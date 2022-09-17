import { NgModule } from '@angular/core';

import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';

const prime = [CalendarModule, DropdownModule];

@NgModule({
  declarations: [],
  imports: prime,
  exports: prime,
})
export class PrimengModule {}
