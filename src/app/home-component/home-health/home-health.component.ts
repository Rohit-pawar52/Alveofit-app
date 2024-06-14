import { Component } from '@angular/core';
import { SolutionHomeService } from '../../Solutions-component/solution-home.service';

@Component({
  selector: 'app-home-health',
  templateUrl: './home-health.component.html',
  styleUrls: ['./home-health.component.css']
})
export class HomeHealthComponent {
  HealthContent: any;
  constructor(
    private SolutionHomeService: SolutionHomeService,
  ){
    this.HealthContent = this.SolutionHomeService.HealthContent;
  }
  
}
