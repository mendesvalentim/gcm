import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardService } from '../../dashboard.service';


declare var google: any;/* variavel global*/

@Component({
  selector: 'app-dashboard-form',
  templateUrl: './dashboard-form.component.html',
  styleUrls: ['./dashboard-form.component.css']
})
export class DashboardComponent implements OnInit {

  private dados: any;
  public dataInicial: string;
  public dataFinal: string;

  constructor(private dadosService: DashboardService) { }

  ngOnInit(): void {
    /* busca todas as ocorrencias, comentei para fazer a busca por período
    this.dadosService.getAllDashboard().subscribe(
      dados => {
        this.dados = dados;
        this.init();
      }
    )*/
  }

  init(): void{
    if(typeof(google) !== 'undefined'){
      google.charts.load('current', {'packages':['corechart']});
      setTimeout(() =>{
        google.charts.setOnloadCallback(this.exibirGraficos());
      }, 1000)
    }
  }

  exibirGraficos(): void{
    this.exibirPieChart();
  }

  exibirPieChart(): void{
    const el = document.getElementById('3d_pie_chart');
    const chart = new google.visualization.PieChart(el);
       

    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  obterDataTable(): any {
  	const data = new google.visualization.DataTable();

    data.addColumn('string', 'Código Ocorrência');
    data.addColumn('number', 'Quantidade');

    data.addRows(this.dados);

    return data;
  }

  obterOpcoes(): any {
  	return {
      'legend': 'top',
    	'title' : 'Ocorrências por período',
      'width' : 800,
      'height': 800,
      'is3D'  : true
    };
  }

  buscaOcorrenciasPorData(): void {
    this.dadosService.getAllDashboardDate(this.dataInicial, this.dataFinal).subscribe(
      dados => {
        this.dados = dados;
        console.log(dados);
        this.init();
      },errorResponse => {
        console.log(errorResponse.error.errors)
      }
    )    
  }

}
