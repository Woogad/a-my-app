import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, updateDoc } from '@angular/fire/firestore';
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

    getDatas(): Observable<CustomerData[]> {
        const dataColRef = collection(this.firestore, 'StudentCollection');
        return collectionData(dataColRef, { idField: 'id' }) as Observable<CustomerData[]>;
    }

    getDataById(id: any): Observable<CustomerData> {
        const dataDocRef = doc(this.firestore, 'StudentCollection/' + id);
        return docData(dataDocRef, { idField: 'id' }) as Observable<CustomerData>;
    }

    addData(customerData: CustomerData) {
        const dataDocRef = collection(this.firestore, 'StudentCollection');
        return addDoc(dataDocRef, customerData);
    }

    deleteData(customerData: CustomerData) {
        const dataDocRef = doc(this.firestore, 'StudentCollection/' + customerData.id);
        return deleteDoc(dataDocRef);
    }

    updateData(customerData: CustomerData) {
        const dataDocRef = doc(this.firestore, 'StudentCollection/' + customerData.id);
        return updateDoc(dataDocRef, { name: customerData.name, price: customerData.price });
    }

}