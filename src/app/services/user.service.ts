import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersList: Array<User> = [
    { id: "1", name: "Ana Silva", age: 28, profession: "Engenheira Civil", gender: 'F' },
    { id: "2", name: "Carlos Oliveira", age: 35, profession: "Médico", gender: 'M' },
    { id: "3", name: "Beatriz Souza", age: 22, profession: "Designer Gráfico", gender: 'F' },
    { id: "4", name: "João Mendes", age: 40, profession: "Professor", gender: 'M' },
    { id: "5", name: "Mariana Costa", age: 30, profession: "Advogada", gender: 'F' },
    { id: "6", name: "Roberto Lima", age: 45, profession: "Desenvolvedora de Software", gender: 'M' },
    { id: "7", name: "Fernanda Ribeiro", age: 27, profession: "Desenvolvedora de Software", gender: 'F' },
    { id: "8", name: "Lucas Pereira", age: 32, profession: "Analista de Sistemas", gender: 'M' },
    { id: "9", name: "Camila Alves", age: 29, profession: "Arquiteta", gender: 'F' },
    { id: "10", name: "Monica Mattos", age: 20, profession: "Acompanhante", gender: 'F' }
  ]

  constructor() { }

  getUsers(): Observable<Array<User>> {
    return of(this.usersList);
  }
}
