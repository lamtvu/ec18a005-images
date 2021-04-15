import { Component, OnChanges, OnDestroy, OnInit, } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageService } from './services/image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit, OnChanges {
  public currentPage: number = 1
  public pageCount: number[] = [1]
  public selectedFile?: File
  public subcription!: Subscription
  public imageFiles: any[] = []
  public showUpload: boolean = false
  title = 'imageEC18A005';

  constructor(private _imageService: ImageService) {
    this.subcription = this._imageService.getAll().subscribe(data => {
      this.imageFiles = data
    })
  }

  getData(data: any) {
    this.imageFiles = data
    this.showUpload = false
  }

  ngOnChanges(): void {
    console.log('change')
  }
  ngOnInit(): void {
  }
  ngOnDestroy() {
    if (this.subcription)
      this.subcription.unsubscribe()
  }


  onCancel() {
    this.showUpload = false
  }

}
