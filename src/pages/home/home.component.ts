import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import { TacheService } from '../../app/services/tache.service';
import { Liste } from '../../app/models/liste.model';
import { Tache } from '../../app/models/tache.model';
import { CommonModule, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, NgForOf, NgIf, RouterLink],
  standalone: true
})
export class HomeComponent implements OnInit {
  listes: Liste[] = [];
  taches: Tache[] = [];
  selectedListeId: number | null = null;
  visibleSubtasks: { [key: number]: boolean } = {};

  constructor(
    private tacheService: TacheService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadListes();
    this.loadTaches();
  }

  loadListes(): void {
    this.tacheService.getAllListes().subscribe(
      listes => this.listes = listes,
      error => console.error('Erreur lors de la récupération des listes:', error)
    );
  }

  loadTaches(): void {
    this.tacheService.getAllTaches(this.selectedListeId!).subscribe(
      taches => this.taches = taches,
      error => console.error('Erreur lors de la récupération des tâches:', error)
    );
  }

  onDeleteTacheClick(tacheId: number): void {
    // Add logic to delete task and log appropriately
  }

  toggleSubtasks(listeId: number): void {
    this.visibleSubtasks[listeId] = !this.visibleSubtasks[listeId];
  }

  onDeleteListeClick(listeId: number): void {
    this.tacheService.deleteListe(listeId).subscribe(() => {
      this.router.navigate(['/']);
      this.loadListes();
    }, error => {
      console.error('Échec de la suppression de la liste:', error);
    });
  }
}
