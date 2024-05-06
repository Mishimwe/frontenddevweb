import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { TacheService } from "../../services/tache.service";
import { Liste } from "../../models/liste.model";
import { FormsModule } from "@angular/forms";
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
})
export class NewListComponent {
  titre: string = '';
  startDate: string = '';
  endDate: string = '';
  subtasks: Liste[] = [];
  subtaskTitle: string = '';
  subtaskStartDate: string = '';
  subtaskEndDate: string = '';

  constructor(private tacheService: TacheService, private router: Router) { }

  createNewList() {
    if (!this.titre.trim()) return;

    let newList: Liste = {
      titre: this.titre,
      startDate: this.startDate,
      endDate: this.endDate,
      subtasks: this.subtasks
    };

    this.tacheService.createListe(newList).subscribe(
      (liste: Liste) => {
        console.log('Nouvelle liste créée:', liste);
        this.router.navigate(['/liste', liste.id]);
      },
      error => console.error('Échec de la création de la liste', error)
    );
  }

  addSubtask(titre: string, startDate: string, endDate: string) {
    if (!titre.trim()) return;

    let newSubtask: Liste = {
      titre: titre,
      startDate: startDate,
      endDate: endDate
    };

    this.subtasks.push(newSubtask);
  }
}
