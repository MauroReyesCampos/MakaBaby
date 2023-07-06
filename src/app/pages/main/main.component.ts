import { Component } from '@angular/core';
import { PageService } from 'src/app/services/page.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private pageService: PageService) {}

  ngOnInit() {
    this.pageService.showHeader = true;
  }

}
