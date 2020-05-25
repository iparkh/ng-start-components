import { Component } from '@angular/core';
import { Post } from './components/post-list/post-list.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   
  addpost:Post

  updatePosts(post:Post){
    // console.log('addPost(post)')
    // console.log(post)
    this.addpost=post
  }
}
