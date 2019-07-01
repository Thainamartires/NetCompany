import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss']
})
export class FuncionarioComponent implements OnInit {
  public Funcionario: any = [];
  constructor() {}

  listFuncionario() {
    const localFuncionario = localStorage.getItem('ls-funcionario');
    this.Funcionario = JSON.parse(localFuncionario);
  }
  removeFuncionario(id) {
    let Funcionario = [];
    let updateFuncionario = [];
    const localFuncionario = localStorage.getItem('ls-funcionario');
    Funcionario= JSON.parse(localFuncionario);

    updateFuncionario = Funcionario.filter(item => item.id !== id);

    localStorage.setItem('ls-funcionario', JSON.stringify(updateFuncionario));

    this.listFuncionario();
  }
  cadastrarFuncionario(){
  
  }

  ngOnInit() {
    this.listFuncionario();
  }

}
