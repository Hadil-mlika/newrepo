import { Component, OnInit } from '@angular/core';
import { LeaveRequestService } from 'src/app/ServiceEmployees/leave-request.service';

@Component({
  selector: 'app-new-leave-request-notification',
  templateUrl: './new-leave-request-notification.component.html',
  styleUrls: ['./new-leave-request-notification.component.css']
})
export class NewLeaveRequestNotificationComponent implements OnInit {
  newLeaveRequestNotifications: any[] = [];

  constructor(private leaveRequestService: LeaveRequestService) {}

  ngOnInit() {
    this.leaveRequestService.getNewLeaveRequestNotifications().subscribe(
      (notification) => {
        this.newLeaveRequestNotifications.push(notification);
      },
      (error) => {
        console.error('Erreur lors de la réception des notifications de nouvelles demandes de congé', error);
        // Ajoutez ici la logique de gestion des erreurs si nécessaire
      }
    );
  }
}