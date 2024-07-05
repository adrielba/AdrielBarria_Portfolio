import { Component, OnInit } from '@angular/core';
import { SExperienciaService } from '../../service/s-experiencia.service';
import { Experiencia } from '../../model/experiencia';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit {
  expe: Experiencia[] = [];
    constructor(private sExperiencia: SExperienciaService) { }

    ngOnInit():void{
      this.cargarExperiencia();

    }

    cargarExperiencia(): void{
      this.sExperiencia.lista().subscribe(data => { this.expe = data; })

    }
    delete(id?: number){
      if(id != undefined){
        this.sExperiencia.delete(id).subscribe(
          data => {
            this.cargarExperiencia();
          }, err => {
            alert("No se pudo borrar la experiencia");
          }
        )
      }
    }
}
