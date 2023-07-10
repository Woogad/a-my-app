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
  constructor(private dataService: homeDB_CRUD, private modalCtrl: ModalController, private cd: ChangeDetectorRef) {
    this.dataService.loadAllData().subscribe(res => {
      this.datalist = res;
      this.cd.detectChanges();
    });
  }

  ngOnInit() {
  }

}
