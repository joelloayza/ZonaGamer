import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactenosComponent } from './public/contactenos/contactenos.component';
import { InicioComponent } from './public/inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegisterComponent } from './private/user/user-register/user-register.component';
import { UserLoginComponent } from './private/user/user-login/user-login.component';
import { ModeradoresComponent } from './public/moderadores/moderadores.component';
import { CaptchaComponent } from './public/captcha/captcha.component';
import { LayoutModule } from './shared/layout/layout.module';
import { DataProtectionComponent } from './private/user/data-protection/data-protection.component';
import { TermsConditionsComponent } from './private/user/terms-conditions/terms-conditions.component';
import { PcGamesComponent } from './public/pages/pc-games/pc-games.component';
import { RateStartsComponent } from './shared/rate-starts/rate-starts.component';
import { Ps5GamesComponent } from './public/pages/ps5-games/ps5-games.component';
import { XboxGamesComponent } from './public/pages/xbox-games/xbox-games.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactenosComponent,
    InicioComponent,
    UserRegisterComponent,
    UserLoginComponent,
    ModeradoresComponent,
    CaptchaComponent,
    DataProtectionComponent,
    TermsConditionsComponent,
    PcGamesComponent,
    RateStartsComponent,
    Ps5GamesComponent,
    XboxGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LayoutModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
