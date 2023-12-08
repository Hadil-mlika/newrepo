import { Component, OnInit } from '@angular/core';
import { LeaveRequestService } from 'src/app/ServiceEmployees/leave-request.service';

@Component({
  selector: 'app-leave-request-form',
  templateUrl: './leave-request-form.component.html',
  styleUrls: ['./leave-request-form.component.css']
})
export class LeaveRequestFormComponent {
  startDate: string = '';
  endDate:string='';
  reason:string='' // Initialisez les champs du formulaire selon vos besoins

  constructor(private leaveRequestService: LeaveRequestService) {}

  submitLeaveRequest() {
    const leaveRequest = {
      startDate: this.startDate,
      endDate:this.endDate,
      reason:this.reason
    
    };

    this.leaveRequestService.submitLeaveRequest(leaveRequest).subscribe(
      (response) => {
        console.log('Demande de congé soumise avec succès !!!!', response);
        // Ajoutez ici la logique de gestion de la réponse si nécessaire
      },
      (error) => {
        console.error('Erreur lors de la soumission de la demande de congé', error);
        // Ajoutez ici la logique de gestion des erreurs si nécessaire
      }
    );
  }
}