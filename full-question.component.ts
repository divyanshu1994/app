import {Component,Input} from '@angular/core'
import {VoterComponent} from './voter.component'
import {HeartComponent} from './heart.component'


@Component({
    selector:'full-question',
    template:`
   
<div class="row main">
 <h3>{{question.val}}</h3>
    <hr>
    <div class="params">
        <voter [votes]="question.ques_votes" [ur_vote]="question.ques_your_vote"></voter>
        <br>
        <heart [isLiked]="question.ques_isLiked" [likes]="question.ques_likes"></heart>
     </div>
<div class="question">
    {{question.full_question}}
    <br>
    <span class="by">Asked By : {{question.ques_askedBy}}</span>
</div>

</div>
    `,
    
styles:[`
.main
{
    width:100%;
    padding:10px;


}
.params{
    width:10%;
    float:left;
}
.question
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
,directives:[VoterComponent,HeartComponent]
})
export class FullQuestionComponent
{
    @Input() question;
    

}