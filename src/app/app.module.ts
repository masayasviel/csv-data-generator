import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PrimengModule } from './primeng.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColumnFormComponent } from './forms/column-form/column-form.component';
import { ColumnTypeFormComponent } from './forms/column-type-form/column-type-form.component';
import { DateFormComponent } from './forms/date-form/date-form.component';
import { TimeFormComponent } from './forms/time-form/time-form.component';
import { DatetimeFormComponent } from './forms/datetime-form/datetime-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ColumnFormComponent,
    ColumnTypeFormComponent,
    DateFormComponent,
    TimeFormComponent,
    DatetimeFormComponent,
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
