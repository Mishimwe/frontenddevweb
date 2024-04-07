import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import {APP_INITIALIZER, NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {initializeKeycloak} from "./services/keycloak.service";

@NgModule({
  declarations: [...],
  imports: [
    ...,
  KeycloakAngularModule,
],
providers: [
  {
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService],
  },
],
  bootstrap: [AppComponent],
})
export class AppModule {}
