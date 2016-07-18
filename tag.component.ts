import {Component,Input,Output} from '@angular/core'

@Component({
    selector:'tag',
    template:`
    <span class="tab">{{tag_name}}</span>
    `,
    styles:[`
    .tab{
        background-color:#E1ECF4;
        color:blue;
        font-size:10px;
        padding:2px;
        border:1px solid black;
        border-radius:5px;
        margin:3px;
    }
    `]
})
export class TagComponent
{
    @Input() tag_name="angular";
}