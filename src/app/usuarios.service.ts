import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url='http://127.0.0.1/Prueba/crudusuarios/src/app/php/'; // url de servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}recuperartodos.php`);
  }

  alta(articulo:any) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(articulo));    
  }

  baja(codigo:number) {
    return this.http.get(`${this.url}baja.php?idUsuario=${codigo}`);
  }
  
  seleccionar(usuario:any) {
    return this.http.post(`${this.url}seleccionar.php`, JSON.stringify(usuario));
  }

  consultar(usuario:any) {
    return this.http.post(`${this.url}consultar.php?`, JSON.stringify(usuario));
  }

  modificacion(articulo:any) {
    return this.http.post(`${this.url}modificacion.php`, JSON.stringify(articulo));    
  } 
}