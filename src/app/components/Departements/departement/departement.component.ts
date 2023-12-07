import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DepartmentService } from 'src/app/ServiceEmployees/departementService/department.service';
import { Departement } from 'src/app/models/Departement';
import { EmployeeDTO } from 'src/app/models/employeesdto';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent  implements OnInit {
  searchQuery: string = ''; // Modèle de recherche

  departements: Departement[] = [];
  showForm = false;
  isEditing = false;


  defaultEmployee: EmployeeDTO = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '', // Ajoutez les propriétés manquantes
    role: '',
    password: '',
    departmentId: 0,
  };
  
  departement: Departement = {
    id: 0,
    name: '',
    employees: [this.defaultEmployee],
  };
  

  constructor(private departementService:DepartmentService
 
  ) {}

  ngOnInit(): void {
    this.getAllDepartments();
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

  getAllDepartments() {
    this.departementService.getAllDepartments().subscribe(
      (result) => {
        this.departements = result;
        console.log(this.departements);
      },
      (error) => {
        console.error('Error fetching providers:', error);
      }
    );
  }


  addDepartment(addForm: NgForm) {
    if (addForm.valid) {
      // Vérifiez si le formulaire est valide avant d'ajouter le fournisseur
      this.departementService.AddDepartment(this.departement).subscribe(
        () => {
          alert('department is added successfully');
          // Réinitialisez le formulaire après l'ajout si nécessaire
          addForm.resetForm();
        },
        (error) => {
          console.error('Error add department:', error);
        }
      );
    }
  }



  UpdateDepartment(idDepartment: number, departement: Departement) {
    this.departementService.UpdateDepartment(idDepartment, departement).subscribe(
      () => {
        alert('successful update.');
      },
      (error) => {
        console.error('Error update category:', error);
      }
    );
  }

  DeleteDepartment(idDepartment: number) {
    this.departementService.DeleteDepartment(idDepartment).subscribe(
      () => {
        alert('provider' + idDepartment + 'is deleted  successfully');

        // La suppression a réussi, mettez à jour la liste des fournisseurs

        this.departementService.getAllDepartments();
        console.log(this.departement);
      },
      (error) => {
        console.error('Error Delete department:', error);
      }
    );
  }






  
  // Dans votre classe de composant
  editingDepartement: Departement | null = null;
  setEditingDepartment(departement: Departement | null): void {
    // Si l'employé est déjà en cours d'édition, fermez le formulaire en le définissant sur null
    if (this.editingDepartement === departement) {
      this.editingDepartement = null;
    } else {
      // Sinon, ouvrez le formulaire pour l'employé cliqué
      this.editingDepartement = departement;
    }
  }
}
