import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Person } from '../../classes/person';
import { PeopleService} from '../../services/people.service';
import { DetailItemPage } from '../detail-item/detail-item';
import { AddPage } from '../add/add';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Person[]= [];

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private peopleService: PeopleService, private loadingCtrl: LoadingController) {

  }

  ionViewWillEnter(){
    let loader = this.loadingCtrl.create({
      content : 'Please Wait..'
    });
    loader.present();
    this.peopleService.findAll().subscribe(output=>{
      loader.dismiss();
      this.items = output;
    }, error=>{
      loader.dismiss();
    }) 
  }

  onDetailPage(person){
    this.navCtrl.push(DetailItemPage, person);
  }

  onButtonClick(){
    this.navCtrl.push(AddPage);
  }
}
