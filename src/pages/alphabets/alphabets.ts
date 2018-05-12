import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlphabetsService } from '../../services/alphabets.service';
import {
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/animations';
import 'popper.js';
import 'jquery';
import 'bootstrap';
import fontawesome from '@fortawesome/fontawesome'

@Component({
  selector: 'page-alphabets',
  templateUrl: 'alphabets.html',
  animations: [
      trigger('example-overlay',[
          state('close', style({
              'display' : 'none',
              'opacity' : '0',
              'z-index' : '0'
          })),
          state('open', style({
              'display' : 'block',
              'opacity' : '1',
              'z-index' : '9999'
          })),
          transition('close <=> open',animate('100ms ease-in-out'))
      ]
  )]
})
export class AlphabetsPage implements OnInit {
    title: string = 'Alphabets';
    active: string = 'consonant-1';
    activeLetter: number = 0;
    notActive: string;
    consonants = [];
    vowels = [];
    selectedGroup = [];
    selectedAlphabet = {};
    defaultC = 'consonants';
    defaultV = 'vowels';
    alphabetAudio = new Audio();
    exampleAudio: any;
    letterOverlayState = 'close';

    constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private alphabetsService: AlphabetsService
    ) {}

    ngOnInit(){
      var categoriesConsonants = {};
    var categoriesVowels = {};
    // Iterate over all the consonants object.
    for(var i = 0; i < this.alphabetsService.consonants.length;i++){
        // Get category of each character
        var el = this.alphabetsService.consonants[i].cat;

        // Get the category of each character
        // and make sure there is no duplicates.
        // Just need one category of each.
        if(!(el in categoriesConsonants)){
            categoriesConsonants[el] = true;
            this.consonants.push(el);
        }

        // Initially push first consonant group
        // when component initializes.
        if(el === this.active){
            this.selectedGroup.push(this.alphabetsService.consonants[i]);
        }
    }

            for(var j = 0; j < this.alphabetsService.vowels.length;j++){
                var el = this.alphabetsService.vowels[j].cat;

                if(!(el in categoriesVowels)){
                    categoriesVowels[el] = true;
                    this.vowels.push(el);
                }
            }

            this.notActive = this.defaultV;


            // Load initial alphabet group of each selectedGroup
            this.active = this.consonants[0];

            // Load initial alphabet of each selectedGroup
            this.selectedAlphabet = this.selectedGroup[0];

        }

        selectGroup(group: string){
            // Set selected as an empty array.
            this.selectedGroup = [];
            this.active = group;
            this.activeLetter = 0;

            // Load each category ( vowels or consoants ) into
            // respective category
            if(group.match(/^c/)){
                for(var i = 0; i < this.alphabetsService.consonants.length;i++){
                    if(this.alphabetsService.consonants[i].cat == group){
                        this.selectedGroup.push(this.alphabetsService.consonants[i]);
                    }
                }
                this.notActive = this.defaultV;
            }else if(group.match(/^v/)){
                for(var i = 0; i < this.alphabetsService.vowels.length;i++){
                    if(this.alphabetsService.vowels[i].cat == group){
                        this.selectedGroup.push(this.alphabetsService.vowels[i]);
                    }
                }
                this.notActive = this.defaultC;
            }

            this.selectedAlphabet = this.selectedGroup[0];
        }

        changeAlphabet(group,i){
            this.selectedAlphabet = group;
            this.activeLetter = i;
        }

        setConsonants(){
            if(this.active.match(/^c/)){
                return this.active;
            }else{
                this.notActive = this.defaultC;
                return this.defaultC;
            }
        }

        setVowels(){
            if(this.active.match(/^v/)){
                return this.active;
            }else{
                this.notActive = this.defaultV;
                return this.defaultV;
            }
        }

        showExampleLetter(selectedAlphabet){
            if(this.letterOverlayState == 'close'){
                this.letterOverlayState = 'open';
            }else if(this.letterOverlayState == 'open'){
                this.letterOverlayState = 'close';
            }
        }

        playAlphabet(audio){
            this.alphabetAudio.src = './assets/media/' + this.active + '/' + audio;
            this.alphabetAudio.load();
            this.alphabetAudio.play();
        }

}
