import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'clase01';
  edadUno = "";
  edadDos = "";
  suma = "";
  promedio = "";

  Suma() {
    this.suma =String(Number(this.edadUno) + Number(this.edadDos));
  }
  
  Promedio(): void {

    this.promedio =String((Number(this.edadUno) + Number(this.edadDos))/2);
  }
  Calcular():void {

    this.Suma();
    this.Promedio();
  }

  Limpiar(): void {
    this.edadUno = "";
    this.edadDos = "";
    this.promedio = "";
    this.suma = "";
  }
}
