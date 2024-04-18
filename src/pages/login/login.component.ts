import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {KeycloakService} from "keycloak-angular";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private keycloakService: KeycloakService, private router: Router) {}

  ngOnInit() {
   // if (this.keycloakService.keycloakAuth.authenticated)
    {
      this.router.navigate(['/home']);
    }
  }

  onLoginButtonClick() {
    this.keycloakService.login();
  }
}
