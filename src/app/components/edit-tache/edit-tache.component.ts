import { Component } from '@angular/core';
import {TacheService} from "../../services/tache.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-edit-tache',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './edit-tache.component.html',
  styleUrl: './edit-tache.component.css'
})
export class EditTacheComponent {
  constructor(private tacheService: TacheService, private route: ActivatedRoute, private router: Router) { }
  listeId: number = 0;
  tacheId: number = 0;
  tacheTitre: string = '';

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.listeId = params['listeId'];
        this.tacheId = params['tacheId'];
        console.log(params['listeId']);
        console.log(params['tacheId']);
        // Récupérez les données d'origine de la liste
        this.fetchOriginalListData(this.listeId, this.tacheId );
      }
    );
  }

  fetchOriginalListData(listeId: number, tacheId: number) {
    this.tacheService.getAllTaches(listeId ).subscribe(
      (tacheData: any) => {
        this.tacheTitre = tacheData.titre;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des données', error);
      }
    );
  }

  updateTask() {
    const titre = this.tacheTitre;
    this.tacheService.updateTache(this.listeId, this.tacheId, titre).subscribe(( )=> {
      this.router.navigate([ '/liste', this.listeId]);
    })
  }
}

