import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username: any;
  password: any;
  image: any;

  constructor(public navCtrl: NavController, public router: Router) { }

  ngOnInit() {
  }


  gotonext() {
    // this.router.navigate(['/home-result', this.username, this.password, this.image])
    let dataobj = {
      getname: this.username,
      getpwd: this.password,
      getimg: this.image,
    }
    let datastr = JSON.stringify(dataobj);
    this.router.navigate(['/home-result', datastr])
  }

}
