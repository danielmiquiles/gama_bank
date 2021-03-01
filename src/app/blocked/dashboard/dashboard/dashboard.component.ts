import { DashboardService } from './../dashboard.service';
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
  visible: boolean;

  constructor(
    private authService: AuthService,
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.user = this.authService.getUsuario()
  }

  toggle() {
    this.visible = this.dashboardService.toggle()
  }

}
