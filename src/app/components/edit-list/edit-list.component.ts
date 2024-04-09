import { Component, OnInit } from '@angular/core';
import { TacheService } from "../../services/tache.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-edit-list',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {
  listeId: number = 0;
  listeTitre: string = '';

  constructor(private tacheService: TacheService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.listeId = params['listeId'];
        // Fetch the original data of the list
        this.fetchOriginalListData(this.listeId);
      });
  }

  fetchOriginalListData(listeId: number) {
    // Directly assigning the title from the service's local state
    let liste = this.tacheService.getAllListes().find(l => l.id === listeId);
    if (liste) {
      this.listeTitre = liste.titre;
    } else {
      console.error('Liste not found');
    }
  }

  updateList() {
    const titre = this.listeTitre;
    // Calling the service to update the list and then navigating back to the list view
    this.tacheService.updateListe(this.listeId, titre);
    this.router.navigate(['/liste', this.listeId]);
  }
}
