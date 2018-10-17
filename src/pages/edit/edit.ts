import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Person } from '../../classes/person';
import { PeopleService } from '../../services/people.service';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  person: Person = new Person();

  constructor(public navCtrl: NavController, public navParams: NavParams, private peopleService: PeopleService, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
  }

  onButtonEdit(person){
    this.navCtrl.push(EditPage, person);
  }

  ionViewWillEnter(){
    this.person = this.navParams.data;
  }

  onEdit(){
    let loader = this.loadingCtrl.create({
      content : 'Updating Data..'
    });
    loader.present();
    this.peopleService.update(this.person).subscribe(output=>{
      loader.dismiss();
      this.navCtrl.pop();
      this.editAlert();
    }, error=>{
      loader.dismiss();
      this.errorAlert();
    }) 
  }

  editAlert() {
    const alert = this.alertCtrl.create({
      title: 'Data Updated',
      subTitle: 'Data Updated',
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
