import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Subject, takeUntil, debounceTime, switchMap, map } from 'rxjs';
import { Category } from 'src/app/models/Category';
import { EmployeeDTO } from 'src/app/models/employeesdto';
import { AuthenticationService } from 'src/app/services/authService/authentication.service';

import { EmployeesService } from 'src/app/services/employeesService/employees.service';

@Component({
  selector: 'app-employees',
  
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {

  searchQuery: string = ''; // Modèle de recherche

  employees: EmployeeDTO[] = [];
  showForm = false;
  isEditing = false;
  employee: EmployeeDTO = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    password: '',
  };



  constructor(private employeeService: EmployeesService,private authService:AuthenticationService) {}

  ngOnInit(): void {
    this.getAllEmployees();

    
  }

  logout() {
    // Déconnectez l'utilisateur et redirigez-le vers la page de connexion
    this.authService.logout();
  }


  toggleForm() {
    this.showForm = !this.showForm; // Basculez entre afficher et masquer le formulaire
  }
  CloseForm(addForm: NgForm) {
    this.toggleForm();
    addForm.resetForm();
  }
  toggleEditing(id: number) {
    this.isEditing = !this.isEditing;
  }

  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe(
      (result) => {
        this.employees = result;
        console.log(this.employees);
      },
      (error) => {
        console.error('Error fetching providers:', error);
      }
    );
  }

  addEmployee(addForm: NgForm) {
    if (addForm.valid) {
      // Vérifiez si le formulaire est valide avant d'ajouter le fournisseur
      this.employeeService.AddEmployee(this.employee).subscribe(
        () => {
          alert('employee is added successfully');
          // Réinitialisez le formulaire après l'ajout si nécessaire
          addForm.resetForm();
        },
        (error) => {
          console.error('Error add employee:', error);
        }
      );
    }
  }

  UpdateEmployee(idEmployee: number,employee: EmployeeDTO) {
    this.employeeService.UpdateEmployee(idEmployee,employee).subscribe(
      () => {
        alert('successful update.');
      },
      (error) => {
        console.error('Error update category:', error);
      }
    );
  }

  DeleteEmployee(idEmployee: number) {
    this.employeeService.DeleteEmployee(idEmployee).subscribe(
      () => {
        alert('provider' + idEmployee + 'is deleted  successfully');

        // La suppression a réussi, mettez à jour la liste des fournisseurs

        this.employeeService.getAllEmployees();
        console.log(this.employees);
      },
      (error) => {
        console.error('Error Delete employee:', error);
      }
    );
  }

  // editingEmployee: EmployeeDTO | null = null; // Ajoutez cette ligne

  // setEditingEmployee(employee: EmployeeDTO | null) {
  //   this.editingEmployee = employee;
  // }


  // Dans votre classe de composant
editingEmployee: EmployeeDTO| null = null;

setEditingEmployee(employee: EmployeeDTO| null): void {
  // Si l'employé est déjà en cours d'édition, fermez le formulaire en le définissant sur null
  if (this.editingEmployee === employee) {
    this.editingEmployee = null;
  } else {
    // Sinon, ouvrez le formulaire pour l'employé cliqué
    this.editingEmployee = employee;
  }
}

}
