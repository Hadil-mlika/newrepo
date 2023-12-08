import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RxStompService } from '@stomp/ng2-stompjs';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeaveRequestService {
  private leaveRequestSubject: Subject<any> = new Subject<any>();

  constructor(private stompService: RxStompService) {}

  submitLeaveRequest(leaveRequest: any): Observable<any> {
    return new Observable<any>((observer) => {
      this.stompService.publish({
        destination: '/app/leave-requests/submit',
        body: JSON.stringify(leaveRequest),
      });

      observer.next(leaveRequest);
      observer.complete();
    });
  }

  // Utilisez cette méthode pour s'abonner aux réponses
  getNewLeaveRequestNotifications(): Observable<any> {
    return this.stompService
      .watch('/user/admin/topic/new-leave-request')
      .pipe
      // Ajoutez d'autres opérations si nécessaire
      ();
  }

  // Cette méthode sera appelée pour traiter la réponse
  handleLeaveRequestResponse(response: any): void {
    this.leaveRequestSubject.next(response);
  }
}
