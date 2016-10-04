import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public toastCtrl: ToastController) { }

  showToast(position:string)
  {
  	 let toast = this.toastCtrl.create({
  	 	 message: 'Este es un toast en mi movil',
  	 	 duration: 2000,
  	 	 position:position 
  	 });
  	 toast.present(toast);
  }

  showToastlong()
  {
  	 let toast = this.toastCtrl.create({
  	 	 message: 'Este es un toast en mi movil pero esta ves el mensaje es mas largo que el otro',
  	 	 duration: 2000,
  	 });
  	 toast.present(toast);
  }


  showToastWithClosedButton()
  {
  	 const toast = this.toastCtrl.create({
  	 	 message: 'Este se ha grabado correctamente',
  	 	 showCloseButton:true,
  	 	 closeButtonText:'OK'
  	 });
  	 toast.present(toast);
  }




}

