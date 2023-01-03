import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TwitterService } from 'src/app/service/twitter.service';

@Component({
  selector: 'add-tweet-modal',
  templateUrl: './add-tweet-modal.component.html',
  styleUrls: ['./add-tweet-modal.component.scss']
})
export class AddTweetModalComponent implements OnInit {

  constructor(public twitterService: TwitterService){}

  isOpenModal!: Observable<boolean>

  ngOnInit(): void {
    this.isOpenModal = this.twitterService.isAddTweetModal$
  }

}
