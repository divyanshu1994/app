import { Component } from '@angular/core'
import {TopQuesComponent} from './top-questions.component'
import {BannerComponent} from './banner.component'
import {LogoComponent} from './logo.component'
import {SearchComponent} from './search.component'
import {FullViewComponent} from './full-view.component'


@Component({
  selector: 'my-app',
  template: `
  <br>
  <div class="container">
<logo></logo>
<search-bar style="float:right"></search-bar>
<br>
<br>
<banner></banner>
<br>
  Top Questions 

  <br>

<top-questions></top-questions>
  <full-view 
  [question]="question"
  ></full-view>
</div>
  `,
  directives:[TopQuesComponent,BannerComponent,LogoComponent,SearchComponent,FullViewComponent]
})
export class AppComponent { 

// get this question by its id from REST API
question={
id:1,
ques:"How to do GIS?",
full_question:"How to use open layer",
ques_votes:2,
ques_ur_vote:0,
ques_likes:2,
ques_isLiked:false,
ques_askedBy:"Ds",
answers:[{val:"A1",votes:1,ur_vote:-1,by:"Dibu"},{val:"A2",votes:1,ur_vote:-1,by:"Himu"}]



}


}