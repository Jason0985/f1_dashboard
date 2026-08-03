import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
    standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
   constructor(private router: Router) {}

  openDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
