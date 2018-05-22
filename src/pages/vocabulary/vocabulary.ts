import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { VocabularyService } from '../../services/vocabulary.service';
import { CatNamePage } from './cat-name/cat-name';

@Component({
  selector: 'page-vocabulary',
  templateUrl: 'vocabulary.html'
})

export class VocabularyPage implements OnInit {

    categories:{name: string, lao: string}[] = [];
    activeSet:{
        lao: string,
        eng: string,
        word : string,
        audio: string,
        cat : string
    }[] = [];

    constructor(
        private modalCtrl: ModalController,
        private vocabularyService: VocabularyService
    ){}

    ngOnInit(){
        this.categories = this.vocabularyService.categories;
    }

    goToVocab(cat: string){
        this.activeSet = this.vocabularyService.getCategories(cat);
        let modal = this.modalCtrl.create(CatNamePage, {category : cat,active: this.activeSet});
        modal.present();
    }

}
