import { Component } from '@angular/core';
import { SolutionHomeService } from '../../Solutions-component/solution-home.service';

@Component({
  selector: 'app-home-clinical',
  templateUrl: './home-clinical.component.html',
  styleUrls: ['./home-clinical.component.css']
})
export class HomeClinicalComponent {
  ClinicalContent: any;
  constructor(
    private SolutionHomeService: SolutionHomeService,
  ) {
    this.ClinicalContent = this.SolutionHomeService.ClinicalContent;
  }
}
