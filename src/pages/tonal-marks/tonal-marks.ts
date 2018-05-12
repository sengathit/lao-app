import { Component, OnInit } from '@angular/core';
import { AlphabetsService } from '../../services/alphabets.service';

@Component({
  selector: 'page-tonal-marks',
  templateUrl: 'tonal-marks.html',
})
export class TonalMarksPage implements OnInit {s
    tonalMarks: {
        name: string,
        glyph: string,
        audio: string,
        cat: string,
        description: string
    }[];

    currentLetter: {};

    activeLetter: number = 0;

    constructor( private alphabetsService: AlphabetsService ){}

    ngOnInit(){
        this.tonalMarks = this.alphabetsService.tonalMarks;
        this.currentLetter = this.tonalMarks[0];
    }

    changeAlphabet(group,index){
        this.activeLetter = index;
        this.currentLetter = group;
    }

}
