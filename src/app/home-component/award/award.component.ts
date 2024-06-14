import { Component } from '@angular/core';

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.css']
})
export class AwardComponent {

  awards: string[] = [
    'https://i0.wp.com/www.alveo.fit/wp-content/uploads/2022/03/zs-1.png?w=355&ssl=1',
    'https://i0.wp.com/www.alveo.fit/wp-content/uploads/2022/03/tie-silicon-logo-2.png?w=355&ssl=1',
    'https://i0.wp.com/www.alveo.fit/wp-content/uploads/2022/03/Bloomblisser_logo-1.png?w=355&ssl=1',
    'https://i0.wp.com/www.alveo.fit/wp-content/uploads/2022/03/nasscom_black_white.png?w=355&ssl=1',
  ];
}
