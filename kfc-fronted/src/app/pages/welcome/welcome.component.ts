import { Component, OnInit } from '@angular/core';
import { MenuFormComponent } from '../../components/menu-form/menu-form.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [MenuFormComponent],
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
