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
  data: any;

  constructor(public ar: ActivatedRoute) { }

  ngOnInit() {

    this.data = this.ar.snapshot.paramMap.get('dataobj');
    this.data = JSON.parse(this.data);
    this.username = this.data['getname'];
    this.password = this.data['getpwd'];
  }

}
