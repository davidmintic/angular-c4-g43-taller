import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrudUsuariosComponent } from "./modules/administracion/crud-usuarios/crud-usuarios.component";
import { CrudVehiculosComponent } from "./modules/administracion/crud-vehiculos/crud-vehiculos.component";

const routes: Routes = [
  // { path: "", component: CrudUsuariosComponent }
  {
    path: "administracion",
    loadChildren: () =>
      import("./modules/administracion/administracion.module").then(
        (m) => m.AdministracionModule
      ),
  },

  {
    path: "login",
    loadChildren: () =>
      import("./modules/login/login.module").then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
