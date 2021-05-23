import { Choice } from './choice';
import { Question } from './question';

export class QuestionReply {

  id?: number;
  question?: Question;
  choice?: Choice;
}
