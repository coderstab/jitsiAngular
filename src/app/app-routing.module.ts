import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JitsiAngularComponent } from './jitsi-angular/jitsi-angular.component';
import { ThankyouComponent } from './thankyou/thankyou.component'

const routes: Routes = [
  {
    path:'',
    component: JitsiAngularComponent
  },
  {
    path:'home',
    component: JitsiAngularComponent
  },
  {
    path:'thank-you',
    component: ThankyouComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
