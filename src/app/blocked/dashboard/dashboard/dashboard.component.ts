import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { User } from 'src/app/shared/interfaces/user.interface';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: User
  @Input() show = true;
  @Output() visibleEvent = new EventEmitter();

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.user = this.authService.getUsuario()
  }

  visible(show) {
    this.visibleEvent.emit(show);
  }

}
