import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DatePiteComponent } from './components/date-pite/date-pite.component';
import { SexReformPipe } from './sex-reform.pipe';
import { StorageService } from './services/storage.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    DatePiteComponent,
    SexReformPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,


  ],
  providers: [
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
