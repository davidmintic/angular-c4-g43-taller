import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CrudUsuariosComponent } from "./modules/administracion/crud-usuarios/crud-usuarios.component";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzBreadCrumbModule } from "ng-zorro-antd/breadcrumb";
import { LayoutComponent } from "./layout/layout.component";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { CrudVehiculosComponent } from "./modules/administracion/crud-vehiculos/crud-vehiculos.component";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzSpaceModule } from "ng-zorro-antd/space";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CambioContraseniaComponent } from "./modules/administracion/crud-usuarios/cambio-contrasenia/cambio-contrasenia.component";
import { HttpClientModule } from "@angular/common/http";
import { NzModalModule } from "ng-zorro-antd/modal";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    CrudUsuariosComponent,
    LayoutComponent,
    CrudVehiculosComponent,
    CambioContraseniaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzButtonModule,
    NzSpaceModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NzModalModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
