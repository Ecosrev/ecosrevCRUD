import { Component } from '@angular/core';
import { Posto } from '../shared/posto';
import { ActivatedRoute, Router } from '@angular/router';
import { PostoService } from '../shared/posto.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posto-form',
  templateUrl: './posto-form.component.html',
  styleUrls: ['./posto-form.component.css']
})
export class PostoFormComponent {
  'posto': Posto;
  title = '';
  constructor(private route: ActivatedRoute, private router: Router, private postoservice: PostoService){}
  ngOnInit(){
    this.title = 'Novo Posto de Coleta';
    this.posto = new Posto();
    const id = this.route.snapshot.paramMap.get('id');
    
    if(id){
      this.postoservice.getbyid(parseInt(id)).subscribe(resp =>{
        this.posto = resp;
        this.title = `Alterando o Posto de Coleta ${this.posto.razao}`
      });
    }

  }

  onSubmit(){
    let observable: Observable<Posto>;

    if(this.posto.id){
      this.update();

    } else{
      observable = this.postoservice.insert(this.posto);
    
    observable.subscribe(()=>{
      this.router.navigate(['/posto']);
    })
  }
  }

  private update() {
    this.postoservice.update(this.posto).subscribe(
      resp => {
        console.log('Cliente atualizado com sucesso', resp);
      },
      erro => {
        console.error('Erro ao atualizar cliente', erro);
      }
    );
  }

}
