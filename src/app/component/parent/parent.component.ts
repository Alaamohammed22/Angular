import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  messagefromchild: any;
  //Child: ChildComponent = new ChildComponent();
  @ViewChild(ChildComponent) child!: ChildComponent;
  ngAfterViewInit() {
    this.child.sayWelcome();
  }
}
