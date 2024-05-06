import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TacheService } from '../../services/tache.service';
import { Tache } from '../../models/tache.model';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-nouvelles-tache',
  templateUrl: './nouvelles-tache.component.html',
  styleUrls: ['./nouvelles-tache.component.css'],
  imports: [
    FormsModule
  ],
  standalone: true
})
export class NouvellesTacheComponent implements OnInit {
  listeId: number = 0;
  taskTitle: string = '';

  constructor(private tacheService: TacheService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.listeId = +params['listeId'];
    });
  }

  createNouvellesTache() {
    if (this.taskTitle.trim()) {
      const newTache: Tache = {
        titre: this.taskTitle,
        status: false,
        // description and dueDate
      };

      this.tacheService.createTache(newTache, this.listeId).subscribe({
        next: (tache) => {
          console.log('Tâche créée:', tache);
          this.router.navigate(['../'], {relativeTo: this.route});
        },
        error: (error) => {
          console.error('Erreur lors de la création de la tâche:', error);
        }
      });
    } else {
      console.error('Le titre de la tâche est vide');
    }
  }
}
