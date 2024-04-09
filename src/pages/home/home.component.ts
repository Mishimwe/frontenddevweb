import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Tache } from "../../app/models/tache.model";
import { Liste } from "../../app/models/liste.model";
import { TacheService } from "../../app/services/tache.service";
import { NgClass, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [NgIf, NgForOf, RouterLink, NgClass]
})
export class HomeComponent implements OnInit {
  listes: Liste[] = [];
  taches: Tache[] = [];
  selectedListeId: number | null = null;

  constructor(
    private tacheService: TacheService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadListes();
    this.route.params.subscribe(params => {
      if (params['listeId']) {
        this.selectedListeId = +params['listeId'];
        this.loadTaches(this.selectedListeId);
      }
    });
  }

  loadListes(): void {
    // Directly assigning the array from the service
    this.listes = this.tacheService.getAllListes();
  }

  loadTaches(listeId: number): void {
    // Directly assigning the array from the service
    this.taches = this.tacheService.getAllTaches(listeId);
  }

  onDeleteListeClick(listeId: number): void {
    this.tacheService.deleteListe(listeId);
    if (this.selectedListeId === listeId) {
      this.selectedListeId = null;
      this.router.navigate(['/']);
    }
    // Reloading the listes to reflect the changes
    this.loadListes();
  }

  onDeleteTacheClick(tacheId: number): void {
    if (!this.selectedListeId) return;
    this.tacheService.deleteTache(tacheId, this.selectedListeId);
    // Reloading the taches to reflect the changes
    this.loadTaches(this.selectedListeId);
  }

  tacheClick(tache: Tache): void {
    // Implement logic for handling task click, if needed
    // Refreshing the list of tasks might be necessary after making changes
  }
}
