import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TacheService } from '../../services/tache.service';
import { Liste } from '../../models/liste.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-liste',
  templateUrl: './edit-liste.component.html',
  styleUrls: ['./edit-liste.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class EditListeComponent implements OnInit {
  listeId: number = 0;
  liste: Liste = { id: 0, titre: '', startDate: '', endDate: '' };

  constructor(private tacheService: TacheService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.listeId = +params['id'];
      this.fetchListe();
    });
  }

  fetchListe(): void {
    this.tacheService.getListeById(this.listeId).subscribe({
      next: (liste) => this.liste = liste,
      error: () => console.error('Erreur lors de la récupération de la liste')
    });
  }

  updateListe(): void {
    this.tacheService.updateListe(this.listeId, this.liste).subscribe({
      next: () => this.router.navigate(['/listes']),
      error: (error) => console.error('Erreur lors de la mise à jour de la liste:', error)
    });
  }
}
