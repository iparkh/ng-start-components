import { Component, OnInit,Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

export interface Post{
  title:string,
  text:string,
  id?:number
}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit,OnChanges {
  @Input() addpost:Post;

  posts:Post[]=[
    {
       title:'title1',
       text:'text1',
       id:1
    },
    {
      title:'title2',
      text:'text2',
      id:2
   },
   {
    title:'title 3',
    text:'text 3',
    id:3
 }
  ]

  

  constructor() { 


  }

  ngOnChanges(changes:SimpleChanges):void{
    if (changes.addpost.currentValue){
      this.posts.unshift(changes.addpost.currentValue) 
    }
  }

  removePost(id: number) {
    console.log('Id to remove', id)
    this.posts = this.posts.filter(p => p.id !== id)
  }

  ngOnInit(): void {
    // console.log("init") 
    }

}
