import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { TacheService } from "../../services/tache.service";
import { Tache } from "../../models/tache.model";

@Component({
  selector: 'app-edit-tache',
  templateUrl: './edit-tache.component.html',
  styleUrls: ['./edit-tache.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ]
})
export class EditTacheComponent implements OnInit {
  listeId: number = 0;
  tacheId: number = 0;
  tacheTitre: string = '';

  constructor(private tacheService: TacheService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.listeId = +params['listeId'];
        this.tacheId = +params['tacheId'];

        this.fetchOriginalTaskData(this.listeId, this.tacheId);
      }
    );
  }

  fetchOriginalTaskData(listeId: number, tacheId: number) {
    this.tacheService.getTache(listeId, tacheId).subscribe({
      next: (tache) => {
        this.tacheTitre = tache.titre;
        // Définir d'autres propriétés si nécessaire
      },
      error: () => console.error('Tâche non trouvée')
    });
  }

  updateTask() {
    const updatedTache: Partial<Tache> = {
      titre: this.tacheTitre

    };

    this.tacheService.updateTache(this.listeId, this.tacheId, updatedTache).subscribe({
      next: () => {

        this.router.navigate(['/liste', this.listeId]);
      },
      error: (error) => {
        console.error('Erreur lors de la mise à jour de la tâche:', error);
      }
    });
  }
}
