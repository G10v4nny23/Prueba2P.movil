import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicio/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  Users={
    correo: null,
    contrasena: null
  }
  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  async login(){
    console.log('credenciales ->', this.Users);
    const res = await  this.auth.login(this.Users.correo, this.Users.contrasena)
    if (res) {
      console.log('res ->', res);
    }
  }



}
