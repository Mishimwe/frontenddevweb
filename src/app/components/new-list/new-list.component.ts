import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { TacheService } from "../../services/tache.service";
import {Liste} from "../../models/liste.model";

@Component({
  selector: 'app-new-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent {
  titre: string = '';

  constructor(private tacheService: TacheService, private route: ActivatedRoute, private router: Router) { }

  createNewList() {
    if (!this.titre.trim()) {
      return;
    }

    this.tacheService.createListe(this.titre).subscribe(
      (liste: Liste) => {
        console.log(liste);
        this.router.navigate(['/liste', liste.id]);
      },
      (error) => {
        console.error('Failed to create the list', error);
      }
    );
  }

}
