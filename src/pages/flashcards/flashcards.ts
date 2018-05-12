import { Component } from '@angular/core';
import {
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/animations';

import { AlphabetsService } from '../../services/alphabets.service';

@Component({
  selector: 'page-flashcards',
  templateUrl: 'flashcards.html',
  animations: [
    trigger('flip',[
        state('front',style({
            'transform' : 'rotateY(0deg)'
        })),
        state('back', style({
            'transform' : 'rotateY(180deg)'
        })),
        transition('front <=> back',animate('300ms ease-in-out'))
    ])
  ]
})
export class FlashcardsPage {

  title: string = 'FlashCards';
    alphabets = [];
    selectedAlphabet;
    len: number;
    flipState: string = 'front';
    alphabetAudio = new Audio();
    constructor(
        private alphabetsService: AlphabetsService
    ){}

    ngOnInit(){
        this.alphabets = [...this.alphabetsService.consonants,...this.alphabetsService.vowels];

        this.len = this.alphabets.length;
        this.randomizer();
    }

    randomizer(){
        let rand = Math.floor(Math.random() * this.len);
        this.selectedAlphabet = this.alphabets[rand];
        this.flipState = 'front';
    }

    flipCard(flip: string){
        this.flipState = flip;
    }

    playAudio(alphabet: any){
        if(this.selectedAlphabet){
            this.alphabetAudio.src = './assets/media/' +  this.selectedAlphabet.cat + '/' + alphabet.audio;

            // this.alphabetAudio.src = './assets/media/' + this.active + '/' + audio;
            this.alphabetAudio.load();
            this.alphabetAudio.play();
        }

    }

}
