import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor() {}
  personajes_favoritos: any[] = [];

  Agregar_favoritos(personaje: any) {
    this.personajes_favoritos.push(personaje);
  }
}

