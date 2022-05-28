import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-modifica-usuario',
  templateUrl: './modifica-usuario.component.html',
  styleUrls: ['./modifica-usuario.component.css']
})
export class ModificaUsuarioComponent implements OnInit {
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
  
  modifica(idUsuario:number) {
    if (idUsuario != 0){
      if(confirm("¿Está seguro de modificar este usuario?") == true){
        this.UsuariosServicio.modificacion(this.usu).subscribe((datos:any) => {
          if (datos['resultado']=='OK') {
            alert(datos['mensaje']);
            setTimeout(() => {
              this.router.navigate(['inicio'])
            }, 1000);
          }
        });   
      }
    }
  }

  validar() {
    let usuarioencontrado: number=0;
    this.UsuariosServicio.seleccionar(this.usu).subscribe((datos:any) => {
      if(datos[0] != null){
        usuarioencontrado = datos[0].idUsuario;
      }
      console.log(usuarioencontrado);
      if(usuarioencontrado != 0 && usuarioencontrado != this.usu.idUsuario){//otro usuario
        alert('El usuario ' + this.usu.Usuario + " ya existe ");
      }
      else if(usuarioencontrado != 0 && usuarioencontrado == this.usu.idUsuario){//este usuario
        this.modifica(this.usu.idUsuario);
      }
      else if(usuarioencontrado == 0 && this.usu.idUsuario != 0){//ningun usuario
        this.modifica(this.usu.idUsuario);
      }
    });
  }



}
