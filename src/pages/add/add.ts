import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Person } from '../../classes/person';
import { PeopleService } from '../../services/people.service';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  person: Person = new Person();


  constructor(public navCtrl: NavController, public navParams: NavParams, private peopleService: PeopleService, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {

  }
  onSave(){
    let loader = this.loadingCtrl.create({
      content : 'Saving..'
    });
    loader.present();
    this.peopleService.save(this.person).subscribe(output=>{
      loader.dismiss();
      this.navCtrl.pop();
      this.saveAlert();
    }, error=>{
      loader.dismiss();
      this.errorAlert();
    }) 
  }

  saveAlert() {
    const alert = this.alertCtrl.create({
      title: 'Data Saved',
      subTitle: 'Data Saved',
      buttons: ['OK']
    });
    alert.present();
  }

  errorAlert() {
    const alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Error',
      buttons: ['OK']
    });
    alert.present();
  }
}
