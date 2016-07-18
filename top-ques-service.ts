import {Injectable}  from '@angular/core'

@Injectable()
export class TopQuesService
{
    getTopQues()
    {
        return [
            {
                question:"Soil test for clay",
                full_question:"How to do soil tets",
                askedBy:"ds",
                votes:"5",
                answers:"10",
                tags:["soil","test"]
            },
                {
                question:"How to use staad",
                full_question:"How to do soil tets",
                askedBy:"hs",
                votes:"7",
                answers:"70",
                tags:["staad","software"]
            }
            
        ]
    }
}