import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor() { }

  pasos: any[] = [
    {
      img: '../../../assets/images/excel.svg',
      text: 'Exporta tu inventario de excel.',
      pasos: 'PASO 1'
    },
    {
      img: '../../../assets/images/sincronizacion.svg',
      text: 'Sincroniza tu listado con nuestro banco de productos.',
      pasos: 'PASO 2'
    },
    {
      img: '../../../assets/images/reloj.svg',
      text: 'Digitaliza tu farmacia en pocos días.',
      pasos: 'PASO 3'
    }
  ];

  ngOnInit(): void {
  }

}
