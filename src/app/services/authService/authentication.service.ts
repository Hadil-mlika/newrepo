import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationRequest } from 'src/app/models/AuthenticationRequest';
import { AuthenticationResponse } from 'src/app/models/AuthenticationResponse';
import { Employee } from 'src/app/models/Employee';
import { VerificationRequest } from 'src/app/models/VerificationRequest';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiBaseUrl=environment.apiBaseUrl;

  private apiUrl = 'http://localhost:9099/auth';

  constructor(private http: HttpClient) {}

  authenticate(email: string, password: string): Observable<any> {
    const credentials = { email, password };
    return this.http.post(`${this.apiUrl}/authenticate`, credentials);
  }

 





  saveToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }





  registerUser(registerRequest: Employee) {
    return this.http.post<AuthenticationResponse>(`${this.apiBaseUrl}/user/add`, registerRequest);
  }

  login(authRequest: AuthenticationRequest) {
    return this.http.post<AuthenticationResponse>(`${this.apiBaseUrl}/user/authenticate`, authRequest);
  }

  verifyCode(verificationRequest: VerificationRequest) {
    return this.http.post<AuthenticationResponse>
    (`${this.apiBaseUrl}/verify`, verificationRequest);
  }



}

// user.model.ts (créez ce fichier pour définir la structure de votre modèle d'utilisateur)
export interface User {
message: number;
  email: string;
  role: string;
  // Ajoutez d'autres propriétés selon votre modèle d'utilisateur
}






