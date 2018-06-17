import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AlphabetsService } from '../services/alphabets.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { VocabularyService } from '../services/vocabulary.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlphabetsPage } from '../pages/alphabets/alphabets';
import { TonalMarksPage } from '../pages/tonal-marks/tonal-marks';
import { VocabularyPage } from '../pages/vocabulary/vocabulary';
import { FlashcardsPage } from '../pages/flashcards/flashcards';
import { CatNamePage } from '../pages/vocabulary/cat-name/cat-name';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlphabetsPage,
    TonalMarksPage,
    VocabularyPage,
    FlashcardsPage,
    CatNamePage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlphabetsPage,
    TonalMarksPage,
    VocabularyPage,
    FlashcardsPage,
    CatNamePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AlphabetsService,
    VocabularyService,
    ScreenOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
