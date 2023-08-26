import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonIconsComponent } from './button-icons/button-icons.component';
import { FormFieldInputComponent } from './form-field-input/form-field-input.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  { path: 'buttonIcon', component: ButtonIconsComponent },
  { path: 'formFieldInput', component: FormFieldInputComponent },
  { path: 'progBarSpinner', component: ProgressSpinnerComponent },
  { path: 'tabs', component: TabsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
