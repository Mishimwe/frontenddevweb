import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { TacheService } from "../../services/tache.service";

@Component({
  selector: 'app-new-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent {
  titre: string = ''; // Added to bind with the input in your form

  constructor(private tacheService: TacheService, private route: ActivatedRoute, private router: Router) { }

  createNewList(value: string) {
    this.tacheService.createListe(this.titre);

  }
}
