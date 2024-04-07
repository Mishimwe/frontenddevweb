import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importez FormsModule si vous utilisez des formulaires basés sur des templates
import { ActivatedRoute, Router } from "@angular/router";
import { TacheService } from "../../services/tache.service";
import {Liste} from "../../models/liste.model";



@Component({
  selector: 'app-new-list',
  standalone: true,
  imports: [FormsModule], // Ajoutez FormsModule ici
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css'] // Corrigez à styleUrls
})
export class NewListComponent {
  constructor(private tacheService: TacheService, private route: ActivatedRoute, private router: Router) { }

  createNewList(titre: string) {
    this.tacheService.createListe(titre).subscribe({
      next: (liste: Liste) => {
        console.log(liste);
        this.router.navigate(['/liste', liste.id]);
      },
      error: (error) => {
        console.error('Erreur lors de la création de la liste', error);
        // Gérez l'erreur, par exemple, en affichant un message d'erreur à l'utilisateur
      }
    });
  }
}
