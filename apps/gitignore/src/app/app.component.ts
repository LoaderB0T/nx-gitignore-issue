import { Component } from '@angular/core';
import { LibBService } from '@gitignore-issue/lib-b';

@Component({
  selector: 'gitignore-issue-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'gitignore';

  constructor(libBService: LibBService) {
    console.log(libBService.hello());
  }
}
