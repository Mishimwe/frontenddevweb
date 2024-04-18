import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Keycloak from 'keycloak-js';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  keycloakAuth?: Keycloak.KeycloakInstance;

  constructor(private router: Router) {
    this.initKeycloak();
  }

  initKeycloak() {
    this.keycloakAuth = new Keycloak({
      url: 'http://localhost:9090/auth',
      realm: 'myrealm',
      clientId: 'myclient'
    });

    this.keycloakAuth.init({ onLoad: 'login-required' })
      .then((authenticated) => {
        console.log(authenticated ? 'Authenticated' : 'Not authenticated');
        if (!authenticated) {
          this.router.navigate(['/login']);
        }
      })
      .catch((e) => console.error('Error initializing Keycloak', e));
  }

  login() {
    // @ts-ignore
    this.keycloakAuth.login();
  }

  logout(): void {
    if (this.keycloakAuth) {
      this.keycloakAuth.logout();
      this.router.navigate(['/login']);
    }
  }

  getAccessToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      if (this.keycloakAuth && this.keycloakAuth.token) { // Check for undefined
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        this.keycloakAuth.updateToken(30)
          //.then(() => resolve(this.keycloakAuth.token))
          .catch(reject);
      } else {
        reject('Token not available');
      }
    });
  }

}
