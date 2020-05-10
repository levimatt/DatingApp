import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import * as alertify from 'alertifyjs';
import { AlertifyService } from '../_services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private route: Router, private alertify: AlertifyService){}

  canActivate(): boolean {  //Sólo queremos saber si está o no autenticado (con un booleano)

    if (this.authService.loggedIn()){
      return true;
    }

    this.alertify.error('You shall not pass!!!');
    this.route.navigate(['/home']);
    return false;
  }
  
}
