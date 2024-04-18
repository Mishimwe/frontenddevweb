import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TacheService } from '../../services/tache.service';
import { Tache } from '../../models/tache.model';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-nouvelles-tache',
  standalone: true,
  imports: [
    FormsModule
  ],
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
  taskTitle: string = '';
  createNouvellesTache() {
    console.log(this.taskTitle);
    if (this.taskTitle.trim()) {
      this.tacheService.createTache(this.taskTitle, this.listeId).subscribe(
        (tache: Tache) => {
          // Task was created successfully
          console.log('Created Task:', tache);
          // Navigate to your desired route
          this.router.navigate(['../'], { relativeTo: this.route });
        },
        (error) => {
          // There was an error creating the task
          console.error('Error creating task:', error);
        }
      );
    } else {
      console.error('Task title is empty');
    }
  }


}
