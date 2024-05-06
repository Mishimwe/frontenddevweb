import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import {APP_INITIALIZER, NgModule} from "@angular/core";

import {FormsModule} from "@angular/forms";
import { RouterModule} from "@angular/router";
import {routes} from "./app.routes";

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    KeycloakAngularModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [

  ],
})
export class AppModule {}

