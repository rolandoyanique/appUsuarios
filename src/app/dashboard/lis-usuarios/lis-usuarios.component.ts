import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service'
@Component({
  selector: 'app-lis-usuarios',
  templateUrl: './lis-usuarios.component.html',
  styleUrls: ['./lis-usuarios.component.css']
})
export class LisUsuariosComponent implements OnInit{
  listUsuarios:any[]=[];
  flagSpinner:boolean=true;
    constructor(private usuarioService:UsuarioService){}
  ngOnInit(): void {
  this.getUsuarios();  
  }
  getUsuarios():void{
    this.usuarioService.getUsuarios().subscribe(data=>{
      this.flagSpinner=false;
      this.listUsuarios=data;
    })
  }
}
