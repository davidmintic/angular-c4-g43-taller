import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
  constructor(public auth: AuthService, private router: Router) {
    let token = sessionStorage.getItem("token");
    let usuario = sessionStorage.getItem("usuario");

    if (token) {
      this.auth.token = token;
    } else {
      this.router.navigate(["/login"]);
    }

    if (usuario) {
      this.auth.usuario = JSON.parse(usuario);
    }
  }

  ngOnInit(): void {}
}
