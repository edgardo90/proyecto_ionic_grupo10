import { Component } from '@angular/core';
import { CharacterService } from '../services/character.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  characters:any[] = [];
  error : string = '';
  nombrePersonaje:string = '';


  constructor(
    private characterService:CharacterService
  ) {}

  llamarApi(nombre:string){

    this.characterService.getCharacters(nombre).subscribe(
      (data: any) => {
        if(data.response === 'success'){
          this.characters = data.results;
          console.log(this.characters);
          this.error = '';
        } else {
          console.log("error la respuesta no fue exitosa");
          this.error = 'No se encontraron resultados';
        }
      },
      (error: any) => {
        console.log("error en la peticion",error);
      }
    )
  }

  SearchCharacter() {
    if (this.nombrePersonaje.trim()) { // Verificamos que se haya ingresado un nombre
      this.llamarApi(this.nombrePersonaje);
    } else {
      this.error ='Error: No se ingresó ningún nombre'
    }
  }

  ngOnInit() {
   this.llamarApi('super');
  }

}
