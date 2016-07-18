import {Component} from '@angular/core'


@Component({

    selector:'search-bar',
    template:`
    <form  #f="ngForm" (ngSubmit)="OnSearchSubmit(f)">
    <input ngControl="search"
     #search="ngForm"  type="text"
      id="search" class="form-control" 
    placeholder="search for topics">
    </form>
    `
})
export class SearchComponent
{
    OnSearchSubmit(f)
    {
        console.log("You have searched "+f.value);
    }
}