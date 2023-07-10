import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';

export interface CustomerData {
    id?: string;
    name: string;
    price: number;

}

@Injectable({
    providedIn: 'root'
})

export class homeDB_CRUD {

    private _DB: any;
    constructor(private firestore: Firestore) { }

    loadAllData(): Observable<CustomerData[]> {
        const notesRef = collection(this.firestore, 'StudentCollection');
        return collectionData(notesRef, { idField: 'id' }) as Observable<CustomerData[]>;
    }
}