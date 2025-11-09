import { Component } from "@angular/core";
import { SalinasCharacterCardComponent } from "../salinasCharacterCard/salinasCharacterCard";
import { RmPersonaje } from "../../model/salinasInterface";
import { SalinasService } from "../../service/salinasService";


@Component ({
    selector: 'app-salinasListCharacter',
    imports: [SalinasCharacterCardComponent],
    templateUrl: './salinasListCharacter.html',
    styleUrl: './salinasListCharacter.css',
})
export class salinasListCharacter {
    personajes: RmPersonaje[] = [];
    error = '';
    constructor (private salinasService : SalinasService) {

    }

    ngOnInit() {
        this.salinasService.getPersonajes().subscribe({
      next: (personajes) => (this.personajes = personajes),
      error: (err) => {
        console.error('Error cargando personajes', err);
        this.error = 'Error cargando personajes';
      }
    });
    }




}