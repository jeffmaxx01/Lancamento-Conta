import { Component, OnInit } from '@angular/core';
import { LancamentosService } from './lancamentos.service';
import { Lancamento } from './lancamento';
import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css']
})
export class LancamentosComponent implements OnInit {

  lancamento: Lancamento[];
  colunas: any[];

  constructor(private service: LancamentosService) { }

  ngOnInit() {

    this.service.getLancamentosConta().subscribe(data => {
      this.lancamento = data;
    }
    );
    this.colunas = [
      { field: 'dataLancamento', header: 'Data do lançamento' },
      { field: 'descricao', header: 'Descrição' },
      { field: 'numero', header: 'Número' },
      { field: 'situacao', header: 'Situação' },
      { field: 'dataConfirmacao', header: 'Data de confirmação' },
      { field: 'dadosBancarios', header: 'Dados bancários' },
      { field: 'valorFinal', header: 'Valor final' }
    ];
  }
}
