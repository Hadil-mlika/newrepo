import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket, io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:9099'); // Assurez-vous d'ajuster l'URL selon votre configuration backend
  }

  // Méthode pour écouter les événements du serveur
  listen(event: string): Observable<any> {
    return new Observable((subscriber) => {
      this.socket.on(event, (data) => {
        subscriber.next(data);
      });
    });
}

}
