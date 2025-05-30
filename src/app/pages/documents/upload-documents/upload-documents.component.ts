import { Component} from '@angular/core';
import { NgxDropzoneModule } from 'ngx-dropzone';

@Component({
  selector: 'app-upload-documents',
  imports: [NgxDropzoneModule],
  schemas: [],
  templateUrl: './upload-documents.component.html',
  styleUrl: './upload-documents.component.css'
})
export default class UploadDocumentsComponent {

  // files: File[] = [];

  file: File | null = null;

  onSelect(event: any) {
    const selectedFile = (event.addedFiles?.[0]) || (event.target?.files?.[0]);
  
    if (selectedFile && selectedFile.type === 'application/pdf') {
      this.file = selectedFile;
    } else {
      alert('Por favor, selecciona solo archivos PDF.');
    }
  }
  


}
