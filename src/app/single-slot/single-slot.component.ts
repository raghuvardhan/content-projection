import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-slot',
  template: `<h3>Single Slot content projection</h3>
                <ng-content></ng-content>
              <h3>End of Single slot content projection</h3>`,
})
export class SingleSlotComponent {}
