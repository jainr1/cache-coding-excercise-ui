import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';


const ANGULAR_MODULES: any[] = [
  CommonModule, FlexLayoutModule, FormsModule, ReactiveFormsModule, HttpClientModule,
];

const MATERIAL_MODULES: any[] = [
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule,
  MatCardModule, MatIconModule, MatFormFieldModule, MatListModule, MatMenuModule, MatSnackBarModule,
  MatInputModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatRadioModule
];

@NgModule({
  imports: [
    ANGULAR_MODULES,
    MATERIAL_MODULES,
  ],
  declarations: [
  ],
  exports: [
    ANGULAR_MODULES,
    MATERIAL_MODULES,
  ],
})
export class SharedModule { }
