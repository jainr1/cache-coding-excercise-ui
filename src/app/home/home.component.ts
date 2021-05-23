import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';

import { QuestionReply } from './../shared/model/question-reply';
import { Survey } from './../shared/model/survey';
import { SurveyReply } from './../shared/model/survey-reply';
import { SurveyReplyService } from './../shared/survey-reply.service';
import { SurveyService } from './../shared/survey.service';

@Component({
  selector: 'qs-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  surveyQuestionForm: FormGroup;
  survey: Survey;

  // survey: Survey = {
  //   questions: [
  //     {
  //       id: 1,
  //       question: 'How have patient satisfaction ratings changed at your organization in the past year?',
  //       choices: [
  //         {
  //           id: 1,
  //           option: 'op1'
  //         },
  //         {
  //           id: 2,
  //           option: 'op2'
  //         },
  //         {
  //           id: 3,
  //           option: 'op3'
  //         },
  //         {
  //           id: 4,
  //           option: 'op4'
  //         }
  //       ]
  //     },
  //     {
  //       id: 2,
  //       question: 'question2',
  //       choices: [
  //         {
  //           id: 1,
  //           option: 'op1'
  //         },
  //         {
  //           id: 2,
  //           option: 'op2'
  //         },
  //         {
  //           id: 3,
  //           option: 'op3'
  //         },
  //         {
  //           id: 4,
  //           option: 'op4'
  //         }
  //       ]
  //     }
  //   ]
  // }

  constructor(
    private _titleService: Title,
    private _fb: FormBuilder,
    private _surveyService: SurveyService,
    private _surveyReplyService: SurveyReplyService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this._titleService.setTitle('Simple-Survey');
    this._surveyService.get()
      .subscribe((content: Survey) => {
        this.survey = content;
        this.createForms();
      });
  }

  createForms(): any {

    this.surveyQuestionForm = this._fb.group({});
    this.surveyQuestionForm.addControl('repliedBy', this._fb.control(null, Validators.required));
    this.survey.questions.forEach(question => {
        this.surveyQuestionForm.addControl(question.id  + '', this._fb.control(null, Validators.required));
    });
    console.log(this.surveyQuestionForm);
  }


  submit() {
    console.log(JSON.stringify(this.surveyQuestionForm.value));
    let questionReplies = new Array<QuestionReply>();

    for (let question of this.survey.questions) {
      let questionReply: any = {
        question: {
          id: question.id
        },
        choice: {
          id: this.surveyQuestionForm.value[question.id]
        }
      }
      questionReplies.push(questionReply);
    }
    let surveyReply: SurveyReply = {
      repliedBy: this.surveyQuestionForm.value['repliedBy'],
      questionReplies: questionReplies
    }
    this._surveyReplyService.create(surveyReply)
    .subscribe((response: any) => {
      console.log('Response:' + JSON.stringify(response));
      this._snackBar.open('Thanks for the survey', 'SUCCESS');
      this.createForms();
    });
    console.log(surveyReply);
  }
}
