
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactenosComponent } from "./public/contactenos/contactenos.component";
import { InicioComponent } from "./public/inicio/inicio.component";
import { UserLoginComponent } from "./private/user/user-login/user-login.component";
import { UserRegisterComponent } from "./private/user/user-register/user-register.component";
import { ModeradoresComponent } from "./public/moderadores/moderadores.component";
import { LayoutComponent } from "./shared/layout/layout.component";
import { DataProtectionComponent } from "./private/user/data-protection/data-protection.component";
import { TermsConditionsComponent } from "./private/user/terms-conditions/terms-conditions.component";
import { PcGamesComponent } from "./public/pages/pc-games/pc-games.component";
import { Ps5GamesComponent } from "./public/pages/ps5-games/ps5-games.component";
import { XboxGamesComponent } from "./public/pages/xbox-games/xbox-games.component";


const routes:Routes=[
    {
      path: '', component: LayoutComponent, children: [
        {path:"contactenos",component:ContactenosComponent},
        {path:"inicio",component:InicioComponent},
        {path:"moderadores",component:ModeradoresComponent},
        {path:"aviso-proteccion",component:DataProtectionComponent},
        {path:"terminos-condiciones",component:TermsConditionsComponent},
        {path:"pc-games",component:PcGamesComponent},
        {path:"ps5-games",component:Ps5GamesComponent},
        {path:"xbox-games",component:XboxGamesComponent},
        {path:"acceso",component:UserLoginComponent},
        {path:"registrarUsuario",component:UserRegisterComponent},
        {path: "", redirectTo: "inicio", pathMatch: "full"},
      ]
    },
];

@NgModule({

    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]

})

export class AppRoutingModule {}

