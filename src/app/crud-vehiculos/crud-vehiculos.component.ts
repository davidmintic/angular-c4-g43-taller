import {
  AfterContentInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-crud-vehiculos',
  templateUrl: './crud-vehiculos.component.html',
  styleUrls: ['./crud-vehiculos.component.scss'],
})
export class CrudVehiculosComponent
  implements OnInit, OnChanges, AfterContentInit, OnDestroy
{
  titulo: string = 'Ejemplo contador';
  contador: number = 0;

  edad = 3;

  constructor() {
    this.titulo = 'Vehículos';
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('onInit');
  }

  ngOnChanges(): void {
    console.log('onChanges');
  }

  ngAfterContentInit(): void {
    console.log('onAfter');
  }

  ngOnDestroy(): void {
    console.log('destroy');
  }

  changeCount(): void {
    this.contador++;
  }

  func(): void {
    console.log('perdio el foco');
  }
}
