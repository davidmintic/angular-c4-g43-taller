import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Md5 } from "ts-md5";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  userForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      correo: [""],
      contrasenia: [""],
    });
  }

  ngOnInit(): void {}

  login(): void {
    const credenciales = this.userForm.getRawValue();
    credenciales["contrasenia"] = Md5.hashStr(credenciales["contrasenia"]);
    console.log(credenciales);
  }
}
