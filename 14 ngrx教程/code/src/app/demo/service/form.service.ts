import { Injectable } from '@angular/core';

/**
 * 建立一个业务逻辑
 */
@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  loginWithCredentials(username:string,pwd:string): boolean {

    if(username ==='liwh' && pwd ==='123456'){
      return true;
    }
    return false;
  }
}
