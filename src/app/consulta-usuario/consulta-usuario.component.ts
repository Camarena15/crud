import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-consulta-usuario',
  templateUrl: './consulta-usuario.component.html',
  styleUrls: ['./consulta-usuario.component.css']
})
export class ConsultaUsuarioComponent implements OnInit {
  usuarios:any;
  
  usu={
    idUsuario:0,
    Usuario:"",
    Nombre:"",
    FechaAlta:""
  }
  constructor(private UsuariosServicio: UsuariosService, private router:Router) { }

  ngOnInit(): void {
  }

  consultar() {
    this.UsuariosServicio.consultar(this.usu).subscribe((result:any) => {
      if(result[0] != null){
        this.usu = result[0];
      }
      else{
        this.usu.idUsuario=0;
        this.usu.Nombre="";
        this.usu.FechaAlta="";
      }
      if(this.usu.idUsuario == 0){
        alert("No existe un usuario con ese alias")
      }
    });
  }
    

}
