import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';


import { CTService } from './ct.service';
import { CTDirective } from './ct.directive';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { CheckboxModule } from './checkbox/checkbox.module';
import { TextfieldModule } from './textfield/textfield.module';
import { TextfieldComponent } from './textfield/textfield.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CTDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CheckboxModule,
    TextfieldModule
  ], 
  providers: [
    CTService,
    TextfieldComponent,
    CheckboxComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
