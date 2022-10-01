import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';

const prime = [
  ButtonModule,
  CheckboxModule,
  DropdownModule,
  InputNumberModule,
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
