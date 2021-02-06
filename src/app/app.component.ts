import { Component } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private alertController: AlertController,
  ) {
    this.initializeApp();
    this.backButtonEvent();
  }

  initializeApp(){
    this.platform.ready().then(()=>{
    })
  }

  backButtonEvent(){
    this.platform.backButton.subscribeWithPriority(10,()=>{
      this.backButtonAlert();
    })
  }

  async backButtonAlert(){
    const alert = await this.alertController.create({
      message:'Back button pressed !'
    });
    await alert.present();
  }
}
