import { Component } from '@angular/core';

interface MenuOptions{
  icon:string,
  label:string,
  route:string,
}

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  menuOptions:MenuOptions[] = [
    {
      icon: 'bi bi-file-earmark-text',
      label: 'Documentos',
      route: '/dashboard/listar-documentos',
    },
    {
      icon: 'bi bi-cloud-upload',
      label: 'Subir Documento',
      route: '/dashboard/subir-documento',
    }
  ]

}
