import { Component, OnInit } from '@angular/core';
import { TacheService } from "../../services/tache.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-edit-tache',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './edit-tache.component.html',
  styleUrls: ['./edit-tache.component.css'] // Corrected from 'styleUrl' to 'styleUrls'
})
export class EditTacheComponent implements OnInit {
  listeId: number = 0;
  tacheId: number = 0;
  tacheTitre: string = '';

  constructor(private tacheService: TacheService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.listeId = params['listeId'];
        this.tacheId = params['tacheId'];
        // Fetch the original data of the task
        this.fetchOriginalTaskData(this.listeId, this.tacheId);
      }
    );
  }

  fetchOriginalTaskData(listeId: number, tacheId: number) {
    // Directly finding the task from the service's local state
    let tache = this.tacheService.getAllTaches(listeId).find(t => t.id === tacheId);
    if (tache) {
      this.tacheTitre = tache.titre;
    } else {
      console.error('Task not found');
    }
  }

  updateTask() {
    const titre = this.tacheTitre;
    // Calling the service to update the task and then navigating back to the list view
    this.tacheService.updateTache(this.listeId, this.tacheId, titre, undefined);
    this.router.navigate(['/liste', this.listeId]);
  }
}
