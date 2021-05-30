import { Injectable } from '@angular/core';
import { MuscleGroupModel } from '../../models/muscle-group';
import { User } from '../../models/user.model';
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

    setLocalStorage(key: string, value: any[]): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    gestLocalStorage(key: string): MuscleGroupModel[] {
        return JSON.parse(localStorage.getItem(key));
    }
    
    
}