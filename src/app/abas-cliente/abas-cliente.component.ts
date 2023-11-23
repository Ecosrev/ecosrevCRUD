import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-abas-cliente',
  templateUrl: './abas-cliente.component.html',
  styleUrls: ['./abas-cliente.component.css']
})
export class AbasClienteComponent {
  selecionarAba(event: MatTabChangeEvent) {
    console.log('Índice da aba selecionada:', event.index);
  }
}
