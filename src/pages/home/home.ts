import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlphabetsPage } from '../alphabets/alphabets';
import { TonalMarksPage } from '../tonal-marks/tonal-marks';
import { VocabularyPage } from '../vocabulary/vocabulary';
import { FlashcardsPage } from '../flashcards/flashcards';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
    constructor(public navCtrl: NavController) {}

    goToAlphabets(){
        this.navCtrl.push(AlphabetsPage);
    }

    goToTonalMarks(){
        this.navCtrl.push(TonalMarksPage);
    }

    goToVocabulary(){
        this.navCtrl.push(VocabularyPage);
    }

    goToFlashcards(){
        this.navCtrl.push(FlashcardsPage);
    }

}
