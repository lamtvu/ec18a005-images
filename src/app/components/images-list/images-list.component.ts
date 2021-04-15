import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.scss']
})
export class ImagesListComponent implements OnInit {

  private _imageLinks: any[] = [];

  @Input()
  set images(images: any[]) {
    this._imageLinks = images.map(p => {
      return { link: `http://localhost:3000/api/images/${p.filename}`, uploadDate: p.uploadDate, type: p.contentType }
    })
  }
  get images() {
    return this._imageLinks
  }

  constructor() { }

  ngOnInit(): void {
  }

}
