import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable()
export class LocalStorageService{
    constructor() { }

    saveUser(user: User): void {
        localStorage.setItem('user', JSON.stringify(user));
    }

    getUser(): string {
       return localStorage.getItem('user');
    }

    cleanUser(): void {
        localStorage.removeItem('user');
     }
    
}