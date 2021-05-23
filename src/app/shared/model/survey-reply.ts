import { QuestionReply } from './question-reply';

export class SurveyReply {
  id?: number;
  repliedBy?: string;
  questionReplies?: QuestionReply[];
}

