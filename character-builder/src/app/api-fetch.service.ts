import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export type Character = {
  eye: string,
  hasHammer: boolean,
  mouth: string,
  rightHand: string,
  hasTail: boolean
}

type BuildImageResponse = {
  url: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiFetchService {
  httpClient = inject(HttpClient);

  buildImage(character: Character): Observable<object> {
    return this.httpClient.post<BuildImageResponse>('http://localhost:5110/build-image-url', character);
  }
  getRandomCharacter(): Observable<Character> {
    return this.httpClient.get<Character>('http://localhost:5110/get-random-image-options');
  }
  scale(imageId: string, scale: number): Observable<object> {
    return this.httpClient.get(`http://localhost:5110/img/${imageId}?scale=${scale}`);
  }
}
