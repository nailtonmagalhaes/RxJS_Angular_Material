import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonIconsComponent } from './button-icons/button-icons.component';
import { FormFieldInputComponent } from './form-field-input/form-field-input.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { TabsComponent } from './tabs/tabs.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SnackbarComponent } from './snackbar/snackbar.component';

const routes: Routes = [
  { path: 'buttonIcon', component: ButtonIconsComponent },
  { path: 'formFieldInput', component: FormFieldInputComponent },
  { path: 'progBarSpinner', component: ProgressSpinnerComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'snackbar', component: SnackbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
