import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-abas',
  templateUrl: './abas.component.html',
  styleUrls: ['./abas.component.css']
})
export class AbasComponent {

  selecionarAba(event: MatTabChangeEvent) {
    console.log('Índice da aba selecionada:', event.index);
  }
}
