import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import { Tache } from "../../app/models/tache.model";
import { Liste } from "../../app/models/liste.model"; // Assuming you have a Liste model
import { TacheService } from "../../app/services/tache.service";
import {NgClass, NgForOf, NgIf} from '@angular/common'; // Import NgFor and NgIf for use in the template

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    RouterLink,
    NgClass,
    // For iterating over lists and tasks in your template
  ]
})
export class HomeComponent implements OnInit {
  listes: Liste[] = []; // Use the Liste model for type safety
  taches: Tache[] = [];
  selectedListeId: number | null = null;

  constructor(private tacheService: TacheService, private route: ActivatedRoute, private router: Router) {}

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
    this.tacheService.getAllListes().subscribe(listes => {
      this.listes = listes;
    });
  }

  loadTaches(listeId: number): void {
    this.tacheService.getAllTaches(listeId).subscribe(taches => {
      this.taches = taches;
    });
  }

  onDeleteListeClick(listeId: number): void {
    this.tacheService.deleteListe(listeId).subscribe(() => {
      // Assuming you might want to reset the selectedListeId if the current list is deleted
      if (this.selectedListeId === listeId) {
        this.selectedListeId = null;
      }
      this.loadListes();
      this.router.navigate(['/']); // Navigate to the home page or default view
    });
  }


  onDeleteTacheClick(tacheId: number): void {
    if (!this.selectedListeId) return; // Ensure there is a selected list
    // The service method to delete a task does not return an Observable in your service definition
    // In home.component.ts or wherever you're calling deleteTache
    this.tacheService.deleteTache(tacheId, this.selectedListeId);

    this.loadTaches(this.selectedListeId);
  }

  // Method to handle task click, if needed
  tacheClick(tache: Tache): void {
    // Implement logic for handling task click, e.g., marking as complete
    // Remember to refresh the list of tasks after changing a task's status
  }
}
