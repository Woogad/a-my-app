import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginauth',
  templateUrl: './loginauth.page.html',
  styleUrls: ['./loginauth.page.scss'],
})
export class LoginauthPage implements OnInit {

  email: any;
  password: any;

  constructor(private authService: AuthService, private loadingCtrl: LoadingController, private alertCtrl: AlertController, private router: Router,) { }

  ngOnInit() {
  }

  async Register() {
    const alert = await this.alertCtrl.create({
      header: 'Register',
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email',
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'text',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Register',
          handler: async (res) => {
            const loading = await this.loadingCtrl.create();
            await loading.present();

            const user = await this.authService.Register(res.email, res.password);
            await loading.dismiss();

            if (user) {
              this.router.navigateByUrl('/home-db', { replaceUrl: true });
            } else {
              this.showAlert("Register Fail", "Please try again!")
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async Login() {
    const loading = await this.loadingCtrl.create();
    await loading.present();

    const user = await this.authService.Login(this.email, this.password);
    await loading.dismiss();

    if (user) {
      this.router.navigateByUrl('/home-db', { replaceUrl: true })
    } else {
      this.showAlert("Login Fail", "Please try agin!");
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

}


