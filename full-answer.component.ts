import {Component,Input} from '@angular/core'
import {VoterComponent} from './voter.component'

@Component({
selector:'full-answer',
template:`

<div *ngFor="let answer of answers" class="row main">


    <div class="params">
        <voter [votes]="answer.votes" [ur_vote]="answer.ur_vote"></voter>
     </div>
<div class="answer">
    {{answer.val}}
    <br>
  <span class="by">Answered By :  {{answer.by}}</span>
</div>

</div>
`,

styles:[`
.main
{
    width:100%;
    padding:10px;
    border:1px solid #ccc;
    background-color:#fafafa;
    margin-top:20px;

}
.params{
    width:10%;
    float:left;
}
.answer
{
    width:90%;
    float:left;
}
.by
{
    font-size:10px;
    color:blue;
    float:right;
    margin-right:20px
}
`]
,directives:[VoterComponent]

})
export class FullAnswerComponent
{
@Input() answers;

}
