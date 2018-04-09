import {Component, OnInit, ViewChild} from '@angular/core';
import {TdTextEditorComponent} from '@covalent/text-editor';
import {FileSystemDirectoryEntry, FileSystemFileEntry, UploadEvent, UploadFile} from 'ngx-file-drop';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import {Conspect} from '../../shared/models/conspect.model';
import {ConspectService} from '../../shared/services/conspect.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  @ViewChild('textEditor') private _textEditor: TdTextEditorComponent;

  files: UploadFile[] = [];
  conspect = new Conspect();
  tagsNew = Array<string>();
  tag: any;

  public uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'dkxmagsmo', uploadPreset: 'kkmmpvlo' })
  );
  loading: any;

  options: any = {
    toolbar: [ 'bold', 'italic', 'heading', '|', 'quote', 'unordered-list', 'ordered-list', '|', 'link', 'image',
      '|', 'preview', 'guide', ]
  };

  constructor(private conspectService: ConspectService, private router: Router) {
  }

  ngOnInit() {
  }

  onEnter() {
    this.tagsNew.push(this.tag);
    this.tag = '';
  }

  onClick(tag: string) {
    const tagNew = Array<string>();
    for (const curTag of this.tagsNew) {
      if (this.tagsNew.indexOf(tag) !== this.tagsNew.indexOf(curTag)) {
        tagNew.push(curTag);
      }
    }
    this.tagsNew = tagNew;
  }

  submit() {
    this.conspect.mainText = this._textEditor.value;
    this.conspect.tags = this.tagsNew;
    this.conspectService.createConspect(this.conspect)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/post/', data]);
      });
  }

  dropped(event: UploadEvent) {
    this.files = event.files;
    for (const droppedFile of event.files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          const files = new Array<File>();
          files.push(file);
          this.uploader.addToQueue(files);
          this.upload();
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  upload() {
    this.loading = true;
    this.uploader.uploadAll();
    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
      const res: any = JSON.parse(response);
      this._textEditor.value += '![](' + res.url + ')';
    };
    this.uploader.onErrorItem = function (fileItem, response, status, headers) {
      console.log('onErrorItem', fileItem, response, status, headers);
    };
  }

  fileOver(event) {
    // console.log(event);
  }

  fileLeave(event) {
    // console.log(event);
  }
}
