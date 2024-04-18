import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { APP_INITIALIZER, NgModule } from "@angular/core";
import {KeycloakAngularModule} from "keycloak-angular";



@NgModule({
  declarations: [



  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    KeycloakAngularModule,
  ],
  providers: [
  ],

})

export class AppModule {}
