import { Component, OnInit } from '@angular/core';
import { Marmita } from '../marmita.model';

@Component({
  selector: 'app-marmita-list',
  templateUrl: './marmita-list.component.html',
  styleUrl: './marmita-list.component.css'
})
export class MarmitaListComponent implements OnInit{
  marmitas: Marmita[] = [ //instanciamos uma lista do tipo marmita, criada no componente model, necessita de 3 argumentos
    new Marmita('churrasco', 'churrasco descrição', 'https://st1.uvnimg.com/3d/28/5601ad8e4d32a7272e3b7a8d8110/churrasco-0522.jpg')
  ];

  constructor(){  
  }
  ngOnInit(): void{
      
  }

}
