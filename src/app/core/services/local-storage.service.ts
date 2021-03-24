import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { ProfileState } from '../profile/store/profile.reducer';

@Injectable()
export class LocalStorageService{
    constructor() { }

    saveUser(user: User): void {
        localStorage.setItem('user', JSON.stringify(user));
    }

    saveGender(gender: 'uomo' | 'donna'): void {
        localStorage.setItem('user', JSON.stringify(gender));
    }

    getUser(): string {
       return localStorage.getItem('user');
    }

    cleanUser(): void {
        localStorage.removeItem('user');
     }
    
}