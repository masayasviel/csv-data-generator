import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoiceFormsComponent } from './forms/atoms/choice-forms/choice-forms.component';
import { ColumnTypeFormComponent } from './forms/atoms/column-type-form/column-type-form.component';
import { FixFormComponent } from './forms/atoms/fix-form/fix-form.component';
import { RandomCharacterFormComponent } from './forms/atoms/random-character-form/random-character-form.component';
import { ColumnFormComponent } from './forms/molecules/column-form/column-form.component';
import { TableDefineComponent } from './forms/organisms/table-define/table-define.component';
import { PrimengModule } from './primeng.module';

@NgModule({
  declarations: [
    AppComponent,
    ColumnFormComponent,
    ColumnTypeFormComponent,
    FixFormComponent,
    ChoiceFormsComponent,
    RandomCharacterFormComponent,
    TableDefineComponent,
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
