import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  usuarios:any;
  
  usu={
    idUsuario:0,
    Usuario:"",
    Nombre:"",
    FechaAlta:"01/01/2001"
  }

  constructor(private UsuariosServicio: UsuariosService) {}

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.UsuariosServicio.recuperarTodos().subscribe((result:any) => this.usuarios = result);
  }
  
  hayRegistros() {
    return true;
  } 
  title = 'crudusuarios';
}
