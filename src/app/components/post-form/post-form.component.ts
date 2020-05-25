import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef, EventEmitter,
  Input,
  OnChanges, OnDestroy,
  OnInit, Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';

import { Post } from '../post-list/post-list.component';



@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements 
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
{

  @Output() onAdd:EventEmitter<Post>=new EventEmitter<Post>()
  @ViewChild('titleInput') inputRef:ElementRef; 
  
  
  title=''
  text=''

  constructor() { }

 
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes)
  }

  ngOnInit() {
    console.log('ngOnInit')
    // console.log(this.infoRef.nativeElement)
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }



  addPost(){
    //  console.log('addPost()')
     const post:Post={
       title:this.title,
       text:this.text
     }
    //  
     this.onAdd.emit(post)
    //  
    //  console.log(post)
     this.title=this.text=''
  }
  
  focusTitle(){
      this.inputRef.nativeElement.focus();
  }
}
