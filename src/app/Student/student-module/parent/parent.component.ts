import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  items: any = ['Item 1', 'Item 2', 'Item 3'];
  ngOnInit(): void {
    console.log(this.onItemClicked(this.items));
  }
  onItemClicked(item: string) {
    console.log('Clicked item:', item);
  }

  showChild = true;
  parentData: any = 'Parent Data';

  toggleChild() {
    this.showChild = !this.showChild;
  }
}
