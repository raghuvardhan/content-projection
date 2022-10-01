import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-slot',
  template: `<h3>Multi Slot content projection</h3>
              <span>Default Content Projection:<span>
              <ng-content></ng-content>

              <span>Content Projection with Select Attribute:<span>
              <ng-content select="[title]"></ng-content>
            <h3>End of Multi Slot content projection</h3>`,
})
export class MultiSlotComponent {}
