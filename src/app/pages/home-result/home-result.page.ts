import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-result',
  templateUrl: './home-result.page.html',
  styleUrls: ['./home-result.page.scss'],
})
export class HomeResultPage implements OnInit {
  username: any;
  password: any;
  image: any;
  data: any;

  constructor(public ar: ActivatedRoute) { }

  ngOnInit() {

    this.data = this.ar.snapshot.paramMap.get('dataobj');
    this.data = JSON.parse(this.data);
    this.username = this.data['getname'];
    this.password = this.data['getpwd'];
    this.image = this.data['getimg'];

    if (this.image == 1) {
      this.image = "assets/image/FpCQW-xXEAA9ZKK.jpg";
    } else {
      this.image = "assets/image/bread.jpg";
    }

    // this.ar.queryParams.subscribe(param => {
    //   console.log(param);
    //   let data = JSON.parse(param);
    //   console.log(param['getname']);
    // })
  }

}
