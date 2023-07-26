import { Component, Input, OnInit } from '@angular/core';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faSolidBookmark }  from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit{
  faIcon: any;
  faSolidIcon: any;
  isActive: boolean = false;
  @Input() tweet!:any
  constructor(){
    this.faIcon = faBookmark;
    this.faSolidIcon = faSolidBookmark;
  }

  ngOnInit(): void {

  }

  bookmark(){
    this.isActive = !this.isActive
  }
}
