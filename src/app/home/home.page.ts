import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text = 'My First ionic app';

  onChangeText(){
    this.text = 'changed';
  }

  onOriginalText(){
    this.text = 'Original Text'
  }
}
