import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PrimengModule } from './primeng.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColumnFormComponent } from './forms/molecules/column-form/column-form.component';
import { ColumnTypeFormComponent } from './forms/atoms/column-type-form/column-type-form.component';
import { FixFormComponent } from './forms/atoms/fix-form/fix-form.component';
import { ChoiceFormsComponent } from './forms/atoms/choice-forms/choice-forms.component';
import { RandomCharacterFormComponent } from './forms/atoms/random-character-form/random-character-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ColumnFormComponent,
    ColumnTypeFormComponent,
    FixFormComponent,
    ChoiceFormsComponent,
    RandomCharacterFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    PrimengModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
