import {Component} from '@angular/core'

@Component({

selector:'banner',
template:`
<div class="banner-box">
    This site has a huge collection of questions
    <img src="images/question.png" style="width:100px;height:80px;float:right">
    <br>
    <button class="btn btn-primary">Sign Up</button>
</div>
`,

styles:[`
.banner-box
{
    margin:auto;
    padding: 20px;
    border:1px solid #ccc;
    background-color:#fafafa;
    height:120px;
    width:100%;
}
`]
})
export class BannerComponent
{


}