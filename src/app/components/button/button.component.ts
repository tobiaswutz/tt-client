import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() public size: string = 'm';
  @Input() public color: string = 'primary';
  @Input() public disabled: boolean = false;
  @Input() public type: string = 'button';
  @Input() public text: string = 'Button';
}
