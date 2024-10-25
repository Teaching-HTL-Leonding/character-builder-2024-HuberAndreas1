import {Component, inject, signal} from '@angular/core';
import {ApiFetchService} from '../api-fetch.service';

@Component({
  selector: 'app-randomizer',
  standalone: true,
  imports: [],
  templateUrl: './randomizer.component.html',
  styleUrl: './randomizer.component.css'
})
export class RandomizerComponent {
  apiService = inject(ApiFetchService)
  imageUrl = signal('');
  scale = signal(1);
  randomize() {
    this.apiService.getRandomCharacter()
      .subscribe((response: any) => {
        this.apiService.buildImage(response).subscribe((response: any) => {
          this.imageUrl.set(response.url);
        });
      });
  }
  zoomIn() {
    this.scale.update((scale) => scale < 2 ? scale + 0.1 : scale);
    this.apiService.scale(this.imageUrl(), this.scale());
  }
  zoomOut() {
    this.scale.update((scale) => scale > 0.1 ? scale - 0.1 : scale);
    this.apiService.scale(this.imageUrl(), this.scale());
  }

}
