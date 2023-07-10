import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  productlist: any;
  constructor(public alertCtrl: AlertController) {
    this.productlist = [
      { id: 1, productName: "Tuna", price: "200", icon: "fish-outline" },
      { id: 2, productName: "Apple", price: "10", icon: "nutrition-outline" },
      { id: 3, productName: "Pizza", price: "150", icon: "pizza-outline" },
    ]
  }
  ngOnInit() {
  }

  async OnEditBn(item: any) {
    let alert = this.alertCtrl.create({
      header: 'Edit',
      inputs: [
        {
          name: 'productname',
          placeholder: 'ProductName',
          value: item.productName,
        },
        {
          name: 'price',
          placeholder: 'Price',
          value: item.price,
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Update',
          handler: data => {
            for (let i = 0; i < this.productlist.length; i++) {
              if (this.productlist[i] === item) {
                this.productlist[i].productName = data.productname;
                this.productlist[i].price = data.price;
              }
            }
          }
        }
      ]
    });
    (await alert).present();
  }

}
