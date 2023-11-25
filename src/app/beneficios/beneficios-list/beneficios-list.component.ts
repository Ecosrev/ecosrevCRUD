import { Component } from '@angular/core';
import { Cliente } from 'src/app/cliente/shared/cliente';
import { ClienteService } from 'src/app/cliente/shared/cliente.service';

@Component({
  selector: 'app-beneficios-list',
  templateUrl: './beneficios-list.component.html',
  styleUrls: ['./beneficios-list.component.css']
})
export class BeneficiosListComponent {
  title = 'Relação de Clientes'
  'clientes': Cliente[];
  constructor(private clienteservice : ClienteService){}
  ngOnInit(){
    this.getAll();

    }
  getAll(){
    this.clienteservice.getAll().subscribe(resp =>{
      this.clientes = resp;
    });

  } 
  delete(cliente: Cliente){
    if(window.confirm('Confirma exclusão do registro:')){

      this.clienteservice.delete(cliente.id).subscribe(()=>{
      this.clientes = this.clientes.filter(c=> c!== cliente);
    })

    } 
  }  
}
