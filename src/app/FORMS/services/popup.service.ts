import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PatientFormComponent } from '../patient-form/patient-form.component';
import { ProviderFormComponent } from '../provider-form/provider-form.component';

@Injectable({
  providedIn: 'root'
})
export class PopupService { 
    constructor(private dialog: MatDialog) { }
  
    openPopupPatient(): void {
      this.dialog.open(PatientFormComponent, {
        width: '1400px'
      });
    }
    openPopupProvider(): void {
      this.dialog.open(ProviderFormComponent, {
        width: '1400px'
      });
    }
  }