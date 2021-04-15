import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageService } from './../../services/image.service';


@Component({
  selector: 'app-update-image',
  templateUrl: './update-image.component.html',
  styleUrls: ['./update-image.component.scss']
})
export class UpdateImageComponent implements OnInit, OnDestroy {

  @Output('cancel')
  evenEmitter = new EventEmitter<any>()

  @Output('upload')
  evenEmitter2 = new EventEmitter<any>()

  private subcription!: Subscription
  private selectedFile!: File
  public error: boolean = false


  onCancel() {
    this.evenEmitter.emit('cancel')
  }

  constructor(private _imageService: ImageService) { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    if (this.subcription) {
      this.subcription.unsubscribe()
    }
  }

  onUpload() {
    if (this.error == true) return;
    let fd: FormData = new FormData()
    fd.append('file_upload', this.selectedFile!, this.selectedFile?.name)
    this.subcription = this._imageService.addImage(fd).subscribe(data => {
      this.evenEmitter2.emit(data)
    })
  }
  onSelectFile(event: any) {
    this.selectedFile = <File>event.target.files[0]
    console.log(this.selectedFile.type)
    if (this.selectedFile.type != 'image/jfif' && this.selectedFile.type != 'image/png' && this.selectedFile.type != 'image/jpeg') {
      this.error = true
    }
    else
      this.error = false
  }

}
