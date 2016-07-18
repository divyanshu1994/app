import {Component,Input} from '@angular/core'
import {FullAnswerComponent} from './full-answer.component'
import {FullQuestionComponent} from './full-question.component'

@Component({
    selector:'full-view',
    template:`
    <full-question
     [question]="question" 
    ></full-question>
    <br>
    <br>
    <h4>{{question.answers.length}} Answers</h4>
    <br>

    <full-answer
    [answers]="question.answers"
    ></full-answer>
    `,
    directives:[FullAnswerComponent,FullQuestionComponent]
})
export class FullViewComponent
{
    @Input() question;
  
  
 }