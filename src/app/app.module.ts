import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { APP_INITIALIZER, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import {list} from "postcss";


@NgModule({
  declarations: [



  ],
  imports: [
    // Add your other modules here
    BrowserModule, // Ensure BrowserModule is imported
    HttpClientModule, // Import HttpClientModule here
    KeycloakAngularModule,
  ],
  providers: [
  ],

})
export class AppModule {}
