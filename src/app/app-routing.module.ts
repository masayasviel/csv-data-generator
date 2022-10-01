import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableDefineComponent } from './forms/organisms/table-define/table-define.component';

const routes: Routes = [{ path: '', component: TableDefineComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
