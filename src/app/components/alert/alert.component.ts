import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';



export enum AlertType {
  primary = 'alert-primary',
  secondary = 'alert-secondary',
  success = 'alert-success',
  danger = 'alert-danger',
  warning = 'alert-warning',
  info = 'alert-info',
  light = 'alert-light',
  dark = 'alert-dark',
}

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {
  @Input() public isDismissible = false;
  @Input({ required: true}) public message = '';
  @Input() public type = 'alert-light';

  enum: typeof  AlertType = AlertType;
}
