import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth.service";
import { RequestBackendService } from "src/app/request-backend.service";
import { Md5 } from "ts-md5";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  userForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private requestBackendService: RequestBackendService,
    private auth: AuthService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      correo: [""],
      contrasenia: [""],
    });
  }

  ngOnInit(): void {}

  // everlyn@mail.com
  //2222

  login() {
    const credenciales = this.userForm.getRawValue();
    credenciales["contrasenia"] = Md5.hashStr(credenciales["contrasenia"]);
    console.log(credenciales);
    this.requestBackendService
      .posData("login", JSON.stringify(credenciales))
      .subscribe({
        next: (data) => {
          if (data && data.token) {
            this.auth.token = data.token;
            this.auth.usuario = data;

            sessionStorage.setItem("token", data.token);
            delete data["token"];
            sessionStorage.setItem("usuario", JSON.stringify(data));
            this.router.navigate(["/administracion/usuarios"]);
            return data;
          }
        },
        error: (error) => {
          return false;
        },
        complete: () => {
          return false;
        },
      });
  }
}
