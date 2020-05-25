import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Post } from '../post-list/post-list.component';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  
  @Input() post:Post;
  @Output() onRemove = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  removePost() {
                this.onRemove.emit(this.post.id)
  }


}
