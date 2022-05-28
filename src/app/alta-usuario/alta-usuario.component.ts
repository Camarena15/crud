import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent implements OnInit {
  usuarios:any;
  
  usu={
    idUsuario:0,
    Usuario:"",
    Nombre:"",
    FechaAlta:"01/01/2001"
  }
  constructor(private UsuariosServicio: UsuariosService, private router:Router) { }

  ngOnInit(): void {
  }

  alta() {
    this.UsuariosServicio.alta(this.usu).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        setTimeout(() => {
          this.router.navigate(['inicio'])
        }, 1000);
      }
    });
  }

  validar() {
    let usuarioencontrado: string="0";
    this.UsuariosServicio.seleccionar(this.usu).subscribe((datos:any) => {
      if(datos[0] != null){
        usuarioencontrado = datos[0].idUsuario;
      }
      if(usuarioencontrado != "0"){
        alert('El usuario ' + this.usu.Usuario + " ya existe ");
      }
      else{
        this.alta();
      }
    });
    
  }

}
