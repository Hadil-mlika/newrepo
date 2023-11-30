import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authService/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService : AuthenticationService) { }

  ngOnInit(): void {
  }



  logout() {
    // Déconnectez l'utilisateur et redirigez-le vers la page de connexion
    this.authService.logout();
  }
}
