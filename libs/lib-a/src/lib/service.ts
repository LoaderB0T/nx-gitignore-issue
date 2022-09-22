import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LibAService {
  public hello() {
    return 'lib-a';
  }
}
