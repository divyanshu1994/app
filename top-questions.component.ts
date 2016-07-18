import {Component,OnInit} from '@angular/core'
import {QuestionComponent} from './question.component'
import {TopQuesService} from './top-ques-service'
import {Observable} from 'rxjs/Rx'
@Component({
selector:'top-questions',
template:`
<question *ngFor="let q of questions"
    [question]="q.question" [askedBy]="q.askedBy"
     [votes]="q.votes" [answers]="q.answers" [tags]="q.tags"
    >
    </question>

`,
directives:[QuestionComponent],
providers:[TopQuesService]

})
export class TopQuesComponent implements OnInit
{
    questions;
        constructor(private _topQuesService : TopQuesService)
        {
            
        }

        ngOnInit()
        {
            
            var o=Observable.of(this._topQuesService.getTopQues())
            .subscribe(x=>{
                this.questions=x;
                console.log(x)});


            
        }

        

}