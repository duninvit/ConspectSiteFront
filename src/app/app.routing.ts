import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';

const routes: Routes = [
  // { path: '', loadChildren: './layout/layout.module#LayoutModule'}// , canActivate: [AuthGuard] },
  { path: '', loadChildren: () => LayoutModule, },
  { path: 'login', loadChildren: () => LoginModule },
  { path: 'signup', loadChildren: () => SignupModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
