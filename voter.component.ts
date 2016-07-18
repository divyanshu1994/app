import {Component,Input} from '@angular/core'

@Component({
    selector:'voter',
    template:`
    <div style="width:20px;text-align:center">
    <i class="glyphicon glyphicon-menu-up pointer" 
    (click)="OnUpClick()"
    [class.orange]="ur_vote==1"></i>
    {{votes}}
       <i class="glyphicon glyphicon-menu-down pointer" 
       (click)="OnDownClick()"
       [class.orange]="ur_vote==-1"></i>
    </div>
    `
    ,
    styles:[`
    .orange
    {
        color:orange

    }
    .pointer
    {
        cursor:pointer
    }
    `]
})
export class VoterComponent
{
    @Input() votes;
    @Input() ur_vote;
    OnUpClick()
    {
        if(this.ur_vote!=1)
        {
        this.votes++;
        this.ur_vote++;
        }
    }
    OnDownClick()
    {
        if(this.ur_vote!=-1)
        {
        this.votes--;
        this.ur_vote--;
        }
    }
}