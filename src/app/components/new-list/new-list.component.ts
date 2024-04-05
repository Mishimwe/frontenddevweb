import { Component } from '@angular/core';
import {TacheService} from "../../services/tache.service";
import {ActivatedRoute, Router} from "@angular/router";

class Liste {
}

@Component({
  selector: 'app-new-list',
  standalone: true,
  imports: [],
  templateUrl: './new-list.component.html',
  styleUrl: './new-list.component.css'
})
export class NewListComponent {
  constructor(private tacheService: TacheService, private route: ActivatedRoute, private router: Router) { }
  liste: Liste[] = [];

  ngOnInit() {}


  createNewList(titre: string) {
    this.tacheService.createListe(titre).subscribe((liste: any )=> {
      console.log(liste);
      this.router.navigate([ '/liste', liste.id ]);
    })
  }
}

