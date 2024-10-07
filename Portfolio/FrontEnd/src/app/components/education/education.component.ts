import { Component, OnInit } from '@angular/core';
import { Educacion } from '../../model/educacion';
import { EducacionService } from '../../service/educacion.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit{
  educacion: Educacion[] = [];

  constructor(private educacionS: EducacionService) { }
  ngOnInit(): void {
    this.cargarEducacion();
    
  }

  cargarEducacion(): void{
    this.educacionS.lista().subscribe(
      data =>{
        this.educacion = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.educacionS.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
  

}
