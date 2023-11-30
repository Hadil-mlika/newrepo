import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authService/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login(): void {
    this.authService.authenticate(this.email, this.password).subscribe(
      (response) => {
        const token = response.token; 
        const msg=response.message;
        console.log(token);
        console.log(msg);
        this.authService.saveToken(token);
        this.router.navigate(['/employees']); // Redirigez l'utilisateur vers la page après la connexion
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }
}
