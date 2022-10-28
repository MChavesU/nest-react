
import { Inject, Injectable } from '@nestjs/common';
import { response } from 'express';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

   async getItems(){

    const  url="https://jsonplaceholder.typicode.com/users";
    let respuesta;
    const res = await fetch(url);
    respuesta = await res.json();
    return respuesta


  }

}
