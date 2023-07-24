import { homeDB_CRUD, CustomerData } from './homeDB_CRUD.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-db',
  templateUrl: './home-db.page.html',
  styleUrls: ['./home-db.page.scss'],
})
export class HomeDBPage implements OnInit {

  datalist: CustomerData[] = [];

  constructor(private dataService: homeDB_CRUD, private toastCtrl: ToastController, private alertCtrl: AlertController, private cd: ChangeDetectorRef,
    private authService: AuthService, private loadingCtrl: LoadingController, private router: Router) {
    this.dataService.getDatas().subscribe(res => {
      this.datalist = res;
      this.cd.detectChanges();
    });
  }

  ngOnInit() {
  }

  async OnAddData() {
    const toast = await this.toastCtrl.create({
      message: 'Added Data',
      duration: 1500,
      position: 'bottom',
    });
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
          handler: async (res) => {
            const data: CustomerData =
            {
              name: res.name,
              price: res.price
            };
            this.dataService.addData(data)
            await toast.present();
          }
        }
      ]
    });
    await alert.present();
  }
  async OnDeleteData(customerData: CustomerData) {
    const toast = await this.toastCtrl.create({
      message: 'Deleted Data',
      duration: 1500,
      position: 'bottom',
    });
    this.dataService.deleteData(customerData)
    await toast.present();
  }

  async OnUpdateData(customerData: CustomerData) {
    const toast = await this.toastCtrl.create({
      message: 'Updated Data',
      duration: 1500,
      position: 'bottom',
    });
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
          handler: async (res) => {
            const data: CustomerData =
            {
              id: customerData.id,
              name: res.name,
              price: res.price
            }
            this.dataService.updateData(data);
            await toast.present();
          }
        }
      ]
    });
    await alert.present();
  }

  async Logout() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.authService.Logout();
    await loading.dismiss();
    this.router.navigateByUrl("/loginauth", { replaceUrl: true })
  }

}
