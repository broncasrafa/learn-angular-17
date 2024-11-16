import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { of } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { User } from './models/user.model';
import { UserCardComponent } from './components/user-card/user-card.component';
import { HeaderToolbarComponent } from './components/header-toolbar/header-toolbar.component';
import { AlertComponent, AlertType } from './components/alert/alert.component';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderToolbarComponent, UserCardComponent, AlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  destroyedRef = inject(DestroyRef);
  userService = inject(UserService);

  alertType: typeof  AlertType = AlertType;

  title = 'learn-angular-17';

  usersList: Array<User> = [];

  usersDatas$ = of(this.usersList);


  ngOnInit(): void {
    this.userService.getUsers()
      .pipe(takeUntilDestroyed(this.destroyedRef))
      .subscribe({
        next: (users) => this.usersList = users,
      })
  }
}
