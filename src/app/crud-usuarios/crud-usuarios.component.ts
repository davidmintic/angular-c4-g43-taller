import { Component, OnInit } from '@angular/core';
import { RequestBackendService } from '../request-backend.service';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { NzMessageService } from 'ng-zorro-antd/message';
interface Person {
  idUsuario: string;
  nombre: string;
  telefono: number;
  fechaNacimiento: string;
}

@Component({
  selector: 'crud-usuarios',
  templateUrl: './crud-usuarios.component.html',
  styleUrls: ['./crud-usuarios.component.scss'],
})
export class CrudUsuariosComponent implements OnInit {
  userCurrent: Person = {
    idUsuario: '',
    nombre: '',
    telefono: 0,
    fechaNacimiento: '',
  };

  campoBuscar = '';
  listOfData: Person[] = [];
  sedes: any = [];
  sedeCurrent = '';
  formUser: FormGroup = new FormGroup({});

  constructor(
    private requestBack: RequestBackendService,
    private fb: FormBuilder
  ) {
    this.getSedes();

    this.formUser = this.fb.group({
      nombre: [''],
      telefono: [],
      fechaNacimiento: [new Date()],
      contrasenia: ['111'],
      sedeId: [''],
    });
  }

  ngOnInit(): void {}

  getUsuarios(sede: string) {
    const entity = 'sedes/' + sede + '/usuarios';
    this.requestBack.getData(entity).subscribe({
      next: (data) => {
        console.log('next');
        this.listOfData = data;
      },
      error: (error) => {
        console.log('error: ' + error);
        this.listOfData = [];
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  getSedes() {
    this.requestBack.getData('sedes').subscribe({
      next: (data) => {
        this.sedes = data;
        this.sedeCurrent = data[0].idSede;
        this.getUsuarios(this.sedeCurrent);
      },
      error: (error) => {
        console.log('error: ' + error);
        this.sedes = [];
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  getUsuariosFilter() {
    this.requestBack.getData('usuarios', this.campoBuscar).subscribe({
      next: (data) => {
        console.log('next');
        this.listOfData = data;
      },
      error: (error) => {
        console.log('error: ' + error);
        this.listOfData = [];
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  clickUser(user: Person): void {
    console.log(user);
    this.userCurrent = JSON.parse(JSON.stringify(user));
  }

  updateUserName(newUser: Person): void {
    const copiaLista = JSON.parse(JSON.stringify(this.listOfData));

    this.requestBack
      .updateData('usuarios', newUser.idUsuario, JSON.stringify(newUser))
      .subscribe({
        next: (data) => {
          for (const i in copiaLista) {
            if (copiaLista[i].idUsuario == newUser.idUsuario) {
              copiaLista[i] = newUser;
            }
          }
          this.listOfData = copiaLista;
        },
        error: (error) => {
          console.log('error: ' + error);
          this.listOfData = [];
        },
        complete: () => {
          console.log('complete');
        },
      });
  }

  saveUser(): void {
    const datosUser = this.formUser.getRawValue();
    datosUser['fechaNacimiento'] = new Date(datosUser['fechaNacimiento']);
    datosUser['sedeId'] = this.sedeCurrent;

    this.requestBack.addData('usuarios', JSON.stringify(datosUser)).subscribe({
      next: (data) => {
        console.log(data);
        // this.getUsuarios();
        const cloneList = JSON.parse(JSON.stringify(this.listOfData));
        cloneList.unshift(data);
        this.listOfData = cloneList;
      },
      error: (error) => {
        console.log('error: ' + error);
        this.listOfData = [];
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  editUser(): void {}

  deleteUser(code: string): void {
    this.requestBack.deleteData('usuarios', code).subscribe({
      next: (data) => {
        const cloneList = JSON.parse(JSON.stringify(this.listOfData));
        for (const i in cloneList) {
          if (cloneList[i].idUsuario == code) {
            cloneList.splice(Number(i), 1);
            break;
          }
        }
        this.listOfData = cloneList;
      },
      error: (error) => {
        console.log('error: ' + error);
        this.listOfData = [];
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  changeSede(): void {
    this.getUsuarios(this.sedeCurrent);
  }
}
