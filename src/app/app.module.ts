import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ColumnFormComponent } from '@common/column-form/column-form.component';
import { ColumnTypeFormComponent } from '@common/column-type-form/column-type-form.component';
import { DateFormComponent } from '@common/date-form/date-form.component';
import { TimeFormComponent } from '@common/time-form/time-form.component';

import { PrimengModule } from './primeng.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatetimeFormComponent } from './common/datetime-form/datetime-form.component';

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
