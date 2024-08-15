import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: any[] = [];

  constructor() { }

  register(user: any) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }

  getUserByEmail(email: string) {
    return this.users.find(user => user.email === email);
  }
}
