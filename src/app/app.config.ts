import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import {LogLevel, provideAuth, authInterceptor} from "angular-auth-oidc-client";
import {routes} from './app.routes';
import {provideHttpClient} from "@angular/common/http";


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideHttpClient(),
    provideAuth({
      config: {
        authority: 'http://localhost:9090/realms/myrealm',
        redirectUrl: 'http://localhost:4200/',
        postLogoutRedirectUri: 'http://localhost:4200/',
        clientId: 'myclient',
        scope: 'openid email profile roles web-origins',
        responseType: 'id_token token',
        silentRenew: true,
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
        secureRoutes: ['http://localhost:8080/', 'http://localhost:4200/api']
      },

    }),]
};
