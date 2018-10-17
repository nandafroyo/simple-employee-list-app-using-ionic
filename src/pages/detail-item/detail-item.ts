import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Person } from '../../classes/person';
import { EditPage } from '../edit/edit';
import { PeopleService } from '../../services/people.service';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the DetailItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-item',
  templateUrl: 'detail-item.html',
})
export class DetailItemPage {

  person: Person = new Person();

  constructor(public navCtrl: NavController, public navParams: NavParams, private peopleService: PeopleService, private loadingCtrl: LoadingController, private alertCtrl: AlertController, private callNumber: CallNumber) {
  }

  ionViewDidLoad() {
    this.person = this.navParams.data;
  }

  confirmRemove(){
    let confirm = this.alertCtrl.create({
      title: 'Confirmation',
      message:'Are you sure want to delete '+ this.person.full_name + '?',
      buttons: [
        {
          text:'No',
          handler: () => {
            console.log('cancel');
          }
        },
        {
          text:'Yes',
          handler: () => {
            this.onRemove();
          }
        }
      ]
    });

    confirm.present();
  }

  onRemove(){
    let loader = this.loadingCtrl.create({
      content : 'Updating Data..'
    });
    loader.present();
    this.peopleService.removeById(this.person.id).subscribe(output=>{
      loader.dismiss();
      this.navCtrl.pop();
      this.successAlert();
    }, error=>{
      loader.dismiss();
      this.errorAlert();
    }) 
  }

  onButtonEdit(person){
    this.navCtrl.push(EditPage, person);
  }

  onCallNumber(phone){
    this.callNumber.callNumber(phone,true);
  }

 successAlert() {
    const alert = this.alertCtrl.create({
      title: 'Success',
      subTitle: 'Data Deleted',
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
