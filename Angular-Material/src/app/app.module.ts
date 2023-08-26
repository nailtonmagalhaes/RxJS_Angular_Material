import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './Material/Material.module';
import { ButtonIconsComponent } from './button-icons/button-icons.component';
import { FormFieldInputComponent } from './form-field-input/form-field-input.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { TabsComponent } from './tabs/tabs.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SnackbarMsnComponent } from './snackbar/snackbar-msn/snackbar-msn.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogModalComponent } from './dialog/dialog-modal/dialog-modal.component';
import { DatatableComponent } from './datatable/datatable.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonIconsComponent,
    FormFieldInputComponent,
    ProgressSpinnerComponent,
    TabsComponent,
    DatepickerComponent,
    SnackbarComponent,
    SnackbarMsnComponent,
    DialogComponent,
    DialogModalComponent,
    DatatableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
