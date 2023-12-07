import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authService/authentication.service';

import { EmployeesService } from '../ServiceEmployees/employeesService/employees.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private employeeService: EmployeesService
  ) {}

  userName: string = '';
  userEmail: string = '';
  role:string='';

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this.employeeService.getUserInfo().subscribe((data) => {
      // Traitez les données du backend ici
      this.userName = data.firstName + ' ' + data.lastName;
      this.userEmail = data.email;
      this.role=data.role;
    });
  }

  logout() {
    // Déconnectez l'utilisateur et redirigez-le vers la page de connexion
    this.authService.logout();
  }
}
