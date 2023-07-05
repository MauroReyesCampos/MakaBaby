import { Component } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public pageService: PageService) { }

}
