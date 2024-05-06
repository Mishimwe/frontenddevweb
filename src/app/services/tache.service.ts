import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Liste } from '../models/liste.model';
import { Tache } from '../models/tache.model';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  private baseUrl = 'api/listes'; // Set a base URL for consistency

  constructor(private httpClient: HttpClient) {}

  getAllListes(): Observable<Liste[]> {
    return this.httpClient.get<Liste[]>(`${this.baseUrl}`);
  }

  getAllTaches(listeId: number): Observable<Tache[]> {
    return this.httpClient.get<Tache[]>(`${this.baseUrl}/${listeId}/taches`);
  }

  createListe(liste: Liste): Observable<Liste> {
    return this.httpClient.post<Liste>(`${this.baseUrl}`, liste);
  }

  getListeById(listeId: number): Observable<Liste> {
    return this.httpClient.get<Liste>(`${this.baseUrl}/${listeId}`);
  }

  updateListe(listeId: number, listeData: Partial<Liste>): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${listeId}`, listeData);
  }

  deleteListe(listeId: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${listeId}`);
  }

  createTache(tache: Tache, listeId: number): Observable<Tache> {
    return this.httpClient.post<Tache>(`${this.baseUrl}/${listeId}/taches`, tache);
  }

  updateTache(listeId: number, tacheId: number, tacheData: Partial<Tache>): Observable<Tache> {
    return this.httpClient.put<Tache>(`${this.baseUrl}/${listeId}/taches/${tacheId}`, tacheData);
  }

  getTache(listeId: number, tacheId: number): Observable<Tache> {
    return this.httpClient.get<Tache>(`${this.baseUrl}/${listeId}/taches/${tacheId}`);
  }

  deleteTache(listeId: number, tacheId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${listeId}/taches/${tacheId}`);
  }
}
