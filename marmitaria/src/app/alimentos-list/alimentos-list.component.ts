import { Component, OnInit } from '@angular/core';
import { alimentos } from '../shared/alimento.model';

@Component({
  selector: 'app-alimentos-list',
  templateUrl: './alimentos-list.component.html',
  styleUrl: './alimentos-list.component.css'
})
export class AlimentosListComponent implements OnInit{
  foodlist: alimentos [] = [
    new alimentos('Carne', 100, 'Gramas'),
    new alimentos('Arroz', 200, 'Gramas'),
    new alimentos('Feijão', 100, 'Gramas')
  ];
  constructor(){}
  ngOnInit(): void {
    
  }
}
