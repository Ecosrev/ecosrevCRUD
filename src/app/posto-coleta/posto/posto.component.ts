import { Component, OnInit } from '@angular/core';
import { Posto } from '../shared/posto';
import { PostoService } from '../shared/posto.service';


@Component({
  selector: 'app-posto',
  templateUrl: './posto.component.html',
  styleUrls: ['./posto.component.css']
})
export class PostoComponent implements OnInit{
  title = 'Relação de Postos'
  'posto': Posto[];

  constructor(private postoservice: PostoService){ }


  ngOnInit(){

    this.getAll();
    
  }

  getAll() {
    this.postoservice.getAll().subscribe(resp=>{
      this.posto = resp;
    })
  }

  delete(posto : Posto){
    if(window.confirm('Confirma exclusão do registro:')){

      this.postoservice.delete(posto.id).subscribe(()=>{
      this.posto = this.posto.filter(c=> c!== posto);
    })

    } 
  }  
}
