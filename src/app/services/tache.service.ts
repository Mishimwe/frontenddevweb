import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Tache } from '../models/tache.model';
import { Liste } from '../models/liste.model';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  private apiUrl = 'http://127.0.0.1:8000/api';
  private listesSubject = new BehaviorSubject<Liste[]>([]);
  private tachesSubject = new BehaviorSubject<Tache[]>([]);

  constructor(private httpClient: HttpClient) {}

  getListe(listeId: number): Observable<Liste> {
    return this.httpClient.get<Liste>(`${this.apiUrl}/listes/${listeId}`);
  }
  updateTache(listeId: number, tacheId: number, titre: string, description?: string): Observable<any> {
    const payload = { titre, description };
    return this.httpClient.put(`${this.apiUrl}/listes/${listeId}/taches/${tacheId}`, payload);
  }

  updateListe(listeId: number, titre: string): Observable<Liste> {
    return this.httpClient.put<Liste>(`${this.apiUrl}/listes/${listeId}`, { titre });
  }

  createListe(titre: string): Observable<Liste> {
    return this.httpClient.post<Liste>(`${this.apiUrl}/listes`, { titre });
  }

  deleteListe(listeId: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/listes/${listeId}`);
  }

  createTache(titre: string, listeId: number): Observable<Tache> {
    return this.httpClient.post<Tache>(`${this.apiUrl}/listes/${listeId}/taches`, { titre, status: false });
  }

  deleteTache(tacheId: number, listeId: number): Observable<any> { // Note the additional listeId parameter
    return this.httpClient.delete(`${this.apiUrl}/taches/${tacheId}`);
  }

  // Revised methods to return Observables directly for component subscription
  refreshListes(): Observable<Liste[]> {
    return this.httpClient.get<Liste[]>(`${this.apiUrl}/listes`);
  }

  refreshTaches(listeId: number): Observable<Tache[]> {
    return this.httpClient.get<Tache[]>(`${this.apiUrl}/listes/${listeId}/taches`);
  }

  // Assuming these methods are still needed for fetching all lists and tasks with BehaviorSubject

  getAllListes(): Observable<Liste[]> {
    this.refreshListes().subscribe(listes => this.listesSubject.next(listes));
    return this.listesSubject.asObservable();
  }

  getAllTaches(listeId: number): Observable<Tache[]> {
    this.refreshTaches(listeId).subscribe(taches => this.tachesSubject.next(taches));
    return this.tachesSubject.asObservable();
  }
}
