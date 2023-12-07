import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departement } from 'src/app/models/Departement';
import { environment } from 'src/environments/environment';
import { AuthentifService } from '../authentifService/authentif.service';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(
    private http: HttpClient,
    private authService: AuthentifService
  ) {}

  private URL = environment.apiBaseUrl2;

  getAllDepartments(): Observable<Departement[]> {
    // Récupérer le token depuis le service AuthService
    const token = this.authService.getToken();

    // Créer les en-têtes avec le token d'autorisation
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    // Utiliser les en-têtes dans la requête HTTP GET
    return this.http.get<Departement[]>(`${this.URL}/api/departments/all`, {
      headers,
    });
  }

  AddDepartment(deptData: Departement): Observable<Departement[]> {
    // Récupérer le token depuis le service AuthService
    const token = this.authService.getToken();

    // Créer les en-têtes avec le token d'autorisation
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<Departement[]>(
      `${this.URL}/api/departments/add`,
      deptData,
      { headers }
    );
  }

  UpdateDepartment(idDepartment: number, deptData: Departement) {
    // Récupérer le token depuis le service AuthService
    const token = this.authService.getToken();

    // Créer les en-têtes avec le token d'autorisation
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<Departement[]>(
      `${this.URL}/api/departments/${idDepartment}`,
      deptData,
      { headers }
    );
  }

  DeleteDepartment(idDepartment: number): Observable<void> {
    // Récupérer le token depuis le service AuthService
    const token = this.authService.getToken();

    // Créer les en-têtes avec le token d'autorisation
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<void>(
      `${this.URL}/api/departments/${idDepartment}`,
      { headers }
    );
  }
}
