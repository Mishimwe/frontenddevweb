import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TacheService } from '../../services/tache.service';
import { Tache } from '../../models/tache.model';

@Component({
  selector: 'app-nouvelles-tache',
  standalone: true,
  imports: [],
  templateUrl: './nouvelles-tache.component.html',
  styleUrls: ['./nouvelles-tache.component.css'] // Corrected from 'styleUrl' to 'styleUrls'
})
export class NouvellesTacheComponent implements OnInit {
  listeId: number = 0;
  titre: string = ''; // Added to bind with the input in your form

  constructor(private tacheService: TacheService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.listeId = params['listeId'];
      }
    )
  }

  createNouvellesTache(value: string) {
    this.tacheService.createTache(this.titre, this.listeId); // Assuming createTache will update the internal state of taches in the service
    // After creating the new task, you can navigate back to the list of tasks
    // The below navigate method assumes you want to go up one level in your route hierarchy
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
