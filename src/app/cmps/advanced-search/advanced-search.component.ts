import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { TwitterService } from 'src/app/service/twitter.service';

@Component({
    selector: 'advanced-search',
    templateUrl: './advanced-search.component.html',
    styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {
    constructor(public twitterService: TwitterService) {}

    isOpenModal!: Observable<boolean>

    ngOnInit(): void {
        this.isOpenModal = this.twitterService.isAdvancedSearchModal$  
    }

    term = ''


    onSubmit(form: NgForm) {
        this.twitterService.advancedQuery(form.value)
        this.twitterService.toggleAdvancedSearchModal()
        form.reset()
    }
}
