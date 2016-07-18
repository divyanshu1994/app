import {Component,Input,Output} from '@angular/core'

@Component({
selector:'params',
template:`
    <div width="10px" style="text-align:center;float:left;width:50%">
        {{votes}}<br>
        votes
    </div>

    
    <div width="10px" style="text-align:center;float:left;width:50%">
        {{answers}}<br>
        answers
    </div>
`

})
export class ParamsComponent
{
    @Input() votes=0;
    @Input() answers=0;
    
}