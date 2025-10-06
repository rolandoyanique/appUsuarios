import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit{
  @Input() user:any;
  imgURL!:string;
  name!:string;
  email!:string;
 constructor(){
  
 }
ngOnInit():void{
  this.name=this.user.name;
  this.email=this.user.email;
  //this.imgURL=this.user.;
  
}
}
