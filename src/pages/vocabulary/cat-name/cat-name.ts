import { Component, OnInit } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { VocabularyService } from '../../../services/vocabulary.service';

@Component({
    selector: 'page-cat-name',
    templateUrl: 'cat-name.html'
})

export class CatNamePage implements OnInit {
    title: string = '';
    categories: {name: string, lao: string}[] = [];
    currentSet = [];
    constructor(
        private viewCtrl: ViewController,
        private navParams: NavParams,
        private vocabularyService: VocabularyService
    ){}

    ngOnInit(){
        this.title = this.navParams.get('category');
        this.currentSet = this.navParams.get('active');

    }

    dismissModal(){
        this.viewCtrl.dismiss();
    }
}
