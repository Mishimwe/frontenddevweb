import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tache } from '../models/tache.model';
import { Liste } from '../models/liste.model';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  //private apiUrl = 'http://127.0.0.1:8080/api';
  private listes: Liste[] = [];
  private taches: Tache[] = [];

  constructor(private httpClient: HttpClient) {
    this.refreshListes();
  }

  private refreshListes() {
    this.httpClient.get<Liste[]>(`api/listes`).subscribe((listes: Liste[]) => {
      this.listes = listes;
    });
  }

  private refreshTaches(listeId: number) {
    this.httpClient.get<Tache[]>(`api/listes/${listeId}/taches`).subscribe((taches: Tache[]) => {
      this.taches = taches;
    });
  }

  getAllListes() {
    return this.listes;
  }

  getAllTaches(listeId: number) {
    this.refreshTaches(listeId);
    return this.taches;
  }

  createListe(titre: string) {
    this.httpClient.post<Liste>(`api/listes`, { titre }).subscribe(() => {
      this.refreshListes();
    });
  }

  createTache(titre: string, listeId: number) {
    this.httpClient.post<Tache>(`api/listes/${listeId}/taches`, { titre, status: false }).subscribe(() => {
      this.refreshTaches(listeId);
    });
  }

  updateListe(listeId: number, titre: string) {
    this.httpClient.put<Liste>(`api/listes/${listeId}`, { titre }).subscribe(() => {
      this.refreshListes();
    });
  }

  updateTache(listeId: number, tacheId: number, titre: string, description?: string) {
    const payload = { titre, description };
    this.httpClient.put(`api/listes/${listeId}/taches/${tacheId}`, payload).subscribe(() => {
      this.refreshTaches(listeId);
    });
  }

  deleteListe(listeId: number) {
    this.httpClient.delete(`api/listes/${listeId}`).subscribe(() => {
      this.refreshListes();
    });
  }

  deleteTache(tacheId: number, listeId: number) {
    this.httpClient.delete(`api/taches/${tacheId}`).subscribe(() => {
      this.refreshTaches(listeId);
    });
  }
}
