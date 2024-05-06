import {NewListComponent} from "./components/new-list/new-list.component";
import {HomeComponent} from "../pages/home/home.component";
import {NouvellesTacheComponent} from "./components/nouvelles-tache/nouvelles-tache.component";
import {Routes} from "@angular/router";
import {EditListeComponent} from "./components/edit-list/edit-list.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'new-list', component: NewListComponent },

  { path: 'home', component: HomeComponent },
  { path: 'home/nouvelles-tache', component: NouvellesTacheComponent },
  { path: 'liste/:listeId', component: HomeComponent },
  { path: 'liste/:listeId/nouvelles-tache', component: NouvellesTacheComponent },
  { path: 'liste/:listeId/nouvelles-tache', component: EditListeComponent },
  { path: 'liste/:listeId/nouvelles-tache', component: NouvellesTacheComponent },
];
