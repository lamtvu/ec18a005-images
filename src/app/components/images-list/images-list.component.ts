import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

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
      return { link: `${this.imageService.apiURL}/${p.filename}`, uploadDate: p.uploadDate, type: p.contentType }
    })
  }
  get images() {
    return this._imageLinks
  }

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
  }

}
