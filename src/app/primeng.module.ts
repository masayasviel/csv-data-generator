import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';

const prime = [
  ButtonModule,
  CalendarModule,
  DropdownModule,
  InputTextModule,
  RippleModule,
  ToastModule,
];

@NgModule({
  declarations: [],
  imports: prime,
  exports: prime,
  providers: [MessageService],
})
export class PrimengModule {}
