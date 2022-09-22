import { Injectable } from '@angular/core';

import { LibAService } from '@gitignore-issue/lib-a';

@Injectable({ providedIn: 'root' })
export class LibBService {
  constructor(private _libAService: LibAService) {}

  hello() {
    return 'Hello from lib-b and ' + this._libAService.hello();
  }
}
