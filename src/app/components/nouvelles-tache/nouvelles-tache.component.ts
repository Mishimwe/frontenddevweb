

import { Component } from '@angular/core';
import {ActivatedRoute, Params, Router } from '@angular/router';
import { TacheService } from '../../services/tache.service';
import { Tache } from '../../models/tache.model';

@Component({
  selector: 'app-nouvelles-tache',
  standalone: true,
  imports: [],
  templateUrl: './nouvelles-tache.component.html',
  styleUrl: './nouvelles-tache.component.css'
})
export class NouvellesTacheComponent {
  constructor(private tacheService: TacheService, private route: ActivatedRoute, private router: Router) { }

  listeId: number = 0;

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.listeId = params['listeId'];
      }
    )
  }


  createNouvellesTache(titre: string) {
    this.tacheService.createTache(titre, this.listeId).subscribe(NouvellesTache => {
      const tache: Tache = NouvellesTache as Tache;
      console.log(tache)
      this.router.navigate(['../'], { relativeTo: this.route });
    })
  }
}

