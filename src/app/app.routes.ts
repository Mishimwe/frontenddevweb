import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import {NewListComponent} from "./components/new-list/new-list.component";
import {EditListComponent} from "./components/edit-list/edit-list.component";
import {EditTacheComponent} from "./components/edit-tache/edit-tache.component";
import {HomeComponent} from "../pages/home/home.component";
import {NouvellesTacheComponent} from "./components/nouvelles-tache/nouvelles-tache.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'new-list', component: NewListComponent },
  { path: 'edit-list/:listeId', component: EditListComponent },
  { path: 'liste/:listeId/edit-task/:tacheId', component: EditTacheComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/nouvelles-tache', component: NouvellesTacheComponent  },
  { path: 'liste/:listeId', component: HomeComponent },
  { path: 'liste/:listeId/nouvelles-tache', component: NouvellesTacheComponent },
];
