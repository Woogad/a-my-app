import { homeDB_CRUD, CustomerData } from './homeDB_CRUD.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home-db',
  templateUrl: './home-db.page.html',
  styleUrls: ['./home-db.page.scss'],
})
export class HomeDBPage implements OnInit {

  datalist: CustomerData[] = [];

  constructor(private dataService: homeDB_CRUD, private alertCtrl: AlertController, private cd: ChangeDetectorRef) {
    this.dataService.getDatas().subscribe(res => {
      this.datalist = res;
      this.cd.detectChanges();
    });
  }

  ngOnInit() {
  }

  async OnAddData() {
    const alert = await this.alertCtrl.create({
      header: 'Add Product',
      inputs: [
        {
          name: 'name',
          placeholder: 'Product Name',
          type: 'text',
        },
        {
          name: 'price',
          placeholder: 'Price',
          type: 'number',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: (res) => {
            const data: CustomerData =
            {
              name: res.name,
              price: res.price
            };
            this.dataService.addData(data)
          }
        }
      ]
    });
    await alert.present();
  }
  OnDeleteData(customerData: CustomerData) {
    this.dataService.deleteData(customerData)
  }

  async OnUpdateData(customerData: CustomerData) {
    const alert = await this.alertCtrl.create({
      header: 'Add Product',
      inputs: [
        {
          name: 'name',
          placeholder: 'Product Name',
          value: customerData.name,
          type: 'text',
        },
        {
          name: 'price',
          placeholder: 'Price',
          value: customerData.price,
          type: 'number',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Update',
          handler: (res) => {
            const data: CustomerData =
            {
              id: customerData.id,
              name: res.name,
              price: res.price
            }
            this.dataService.updateData(data);
          }
        }
      ]
    });
    await alert.present();
  }

}
