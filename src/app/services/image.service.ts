import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from './../models/image.class'

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private _httpClinet: HttpClient) { }

  public apiURL: string = 'https://ec18a00a-images.herokuapp.com/api/images'

  getAll(): Observable<any> {
    return this._httpClinet.get(this.apiURL)
  }
  handleError(err: any) {
    if (err.error instanceof Error) {
      console.log('Client-side error: ', err.error.messager)
    }
    else {
      console.log('Server-side error: ', err.satus, err.error)
    }
  }
  addImage(formData: FormData) : Observable<object>{
    return this._httpClinet.post(this.apiURL, formData)
  }

}
