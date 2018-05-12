import { Component, OnInit } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-cat-name',
    templateUrl: 'cat-name.html'
})

export class CatNamePage implements OnInit {
    title: string = '';
    categories: {name: string, lao: string}[] = [];
    constructor(
        private viewCtrl: ViewController,
        private navParams: NavParams
    ){}

    ngOnInit(){
        this.title = this.navParams.get('category');
    }

    dismissModal(){
        this.viewCtrl.dismiss();
    }
}
