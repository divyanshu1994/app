import {Component,Input,Output} from '@angular/core'

@Component({

    selector:'heart',
    template:`
    <div >
        <i class="glyphicon pointer"
        [class.glyphicon-heart]="true"
        [class.red]="isLiked"
        (click)="OnHeartClicked()"
        ></i>
        {{likes}}
    </div>
    `,
    styles:[`
    .red
    {
        color:red;

    }
    .pointer
    {
        cursor:pointer
    }
    `    
    ]
})
export class HeartComponent
{
    @Input() isLiked;
    @Input() likes;

    OnHeartClicked(){
        this.isLiked=!this.isLiked;
        if(this.isLiked)
        {
        this.likes++;
        }
        else{
            this.likes--;
        }
        //TODO
     //change backend1
      }
}