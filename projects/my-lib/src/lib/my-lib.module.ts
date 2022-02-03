import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    component: MyLibComponent
  }
]

@NgModule({
  declarations: [MyLibComponent],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [MyLibComponent]
})
export class MyLibModule { }
