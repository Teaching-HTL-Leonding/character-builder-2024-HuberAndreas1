import {Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ApiFetchService} from '../api-fetch.service';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-builder',
  standalone: true,
  imports: [
    FormsModule,
    NgOptimizedImage
  ],
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.css'
})
export class BuilderComponent {
  apiService = inject(ApiFetchService)

  eye = signal('NoEye');
  hasHammer = signal(true);
  mouth = signal('NoMouth');
  rightHand = signal('NoHand');
  hasTail = signal(true);
  imageUrl = signal('');

  buildCharacter() {
    this.apiService.buildImage({
      eye: this.eye(),
      hasHammer: this.hasHammer(),
      mouth: this.mouth(),
      rightHand: this.rightHand(),
      hasTail: this.hasTail()
    }).subscribe((response: any) => {
      this.imageUrl.set(response.url);
    });
  }
  feelLucky() {
    this.apiService.getRandomCharacter()
      .subscribe((response: any) => {
        this.eye.set(response.eye);
        this.hasHammer.set(response.hasHammer);
        this.mouth.set(response.mouth);
        this.rightHand.set(response.rightHand);
        this.hasTail.set(response.hasTail);
        this.buildCharacter();
      });
  }
}
