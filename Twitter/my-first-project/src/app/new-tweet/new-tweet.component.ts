import { Component, EventEmitter, Input, Output } from '@angular/core';
import { formatISO } from 'date-fns';
import { ITweet } from '../interface/tweet.interface';

@Component({
  selector: 'app-new-tweet',
  templateUrl: './new-tweet.component.html',
  styleUrls: ['./new-tweet.component.css']
})
export class NewTweetComponent {
  @Output() newTweet = new EventEmitter<Omit<ITweet, 'id'>>();
  @Input() user!: any;
  tweetMessage = '';
  constructor() {}

  get isTweetEmpty() {
    return this.tweetMessage.trim().length === 0;
  }

  ngOnInit(): void {}

  onSubmit($event: Event) {
    $event.preventDefault();
    if (this.isTweetEmpty) {
      return;
    }
    this.newTweet.emit({
      content: this.tweetMessage,
      likedBy: [],
      commentedBy: [],
      createdAt: formatISO(new Date()),
      by: {
        id: '',
        name: '',
        username: '',
        profileURL:
          'https://cdn2.iconfinder.com/data/icons/avatar-181/48/avatar_face_man_boy_girl_female_male_woman_profile_smiley_happy_people-05-512.png',
      },
    });
    this.tweetMessage = '';
  }
}
