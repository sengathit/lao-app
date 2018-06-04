import { Component, OnInit } from '@angular/core';
import { ViewController, NavParams, NavController } from 'ionic-angular';
import { VocabularyService } from '../../../services/vocabulary.service';
import { CategoryModel } from '../../../models/category.model';

@Component({
    selector: 'page-cat-name',
    templateUrl: 'cat-name.html'
})

export class CatNamePage implements OnInit {
    title: string = '';
    currentSet = [];
    alphabetAudio = new Audio();
    constructor(
        private viewCtrl: ViewController,
        private navController: NavController,
        private navParams: NavParams,
        private vocabularyService: VocabularyService
    ){}

    ngOnInit(){
        this.title = this.navParams.get('category');
        this.currentSet = this.navParams.get('active');
    }

    playCategory(cat: CategoryModel){
        let selectedAudio: string = '';

        this.alphabetAudio.src = './assets/media/vocabulary/' + cat.cat + '/' + cat.audio;
        this.alphabetAudio.load();
        this.alphabetAudio.play();
        console.log(cat.audio);
    }

    dismissModal(){
        this.viewCtrl.dismiss();
    }
}
