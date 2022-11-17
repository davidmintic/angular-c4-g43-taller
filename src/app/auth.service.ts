import { Injectable } from "@angular/core";
import { RequestBackendService } from "./request-backend.service";

interface Credenciales {
  correo: string;
  contrasenia: string;
}

@Injectable({
  providedIn: "root",
})
export class AuthService {
  usuario: any;
  token: string = "";

  constructor() {}
}
