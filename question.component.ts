import {Component,Input,Output} from '@angular/core'
import {ParamsComponent} from './params.component'
import {TagComponent} from './tag.component'
@Component({
    selector:'question',
    template:`
    <div class="box">
    <div class="params">
        <params [votes]="votes" [answers]="answers"></params>
    </div>

    <div class="question">
    {{question}}
    <br>
        <tag *ngFor="let t of tags" [tag_name]="t"></tag>
    <br>
    <span style="color:black;font-size:10px;float:right">Asked By : {{askedBy}}</span>

    </div>
    </div>
    `,
    styles:[`
    .box{
        padding:10px;
        border:1px solid #ccc;
        margin-top:10px;
        width:60%;
        height:80px;

    }
    .params
    {
        width:30%;
        float:left;
        font-size:12px;
        
    }
    .question{
        width:70%;
        float:left;
        padding-left:10px;
        color:blue;
    }
    `],
    directives:[ParamsComponent,TagComponent]
})
export class QuestionComponent
{
    @Input() question="How to write angular?";
    @Input() askedBy="divyanshu";
    @Input() votes=5;
    @Input() answers=10;
    @Input() tags=["angualr2" ,"javacript","web"];
}