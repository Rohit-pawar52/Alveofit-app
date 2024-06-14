import { Component } from '@angular/core';
import { PopupService } from '../../FORMS/services/popup.service';
import { SolutionHomeService } from '../solution-home.service'
@Component({
  selector: 'app-home-solution',
  templateUrl: './home-solution.component.html',
  styleUrls: ['./home-solution.component.css']
})
export class HomeSolutionComponent {
  HealthContent: any;
  ClinicalContent: any;
  TeleSpirometryContent: any;
  constructor(private popupService: PopupService,private SolutionHomeService:SolutionHomeService) {
    this.HealthContent = this.SolutionHomeService.HealthContent;
    this.ClinicalContent = this.SolutionHomeService.ClinicalContent;
    this.TeleSpirometryContent = this.SolutionHomeService.TeleSpirometryContent;
   }


  openPopup1(): void {
    this.popupService.openPopupPatient();
  }
  openPopup2(): void {
    this.popupService.openPopupPatient();
  }
}
