import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';


declare var google: any;/* variavel global*/

@Component({
  selector: 'app-dashboard-form',
  templateUrl: './dashboard-form.component.html',
  styleUrls: ['./dashboard-form.component.css']
})
export class DashboardComponent implements OnInit {

  public dados: any;
  private totalOcorrencias: any;
  public dataInicial: string;
  public dataFinal: string;

  constructor(private dadosService: DashboardService) {}

  ngOnInit(): void {
     /* comando executa uma busta total bara abertura na tela inicial, facilita para teste
     this.dadosService.getAllDashboard().subscribe(
      dados => {
        this.dados = dados;
        this.init();
      })*/};

  buscaOcorrenciasPorData(): void {
    this.dadosService.getAllDashboardDate(this.dataInicial, this.dataFinal).subscribe(
      dados => {
        this.dados = dados;
        this.init();
        console.log(this.totalOcorrencias);        
      },errorResponse => {
        console.log(errorResponse.error.errors)
      }
    )
  }
              
  init(): void{
    if(typeof(google) !== 'undefined'){
      google.charts.load('visualization', '1', {packages:['controls']});
      setTimeout(() =>{ google.charts.setOnloadCallback(this.drawVisualization());}, 1000);
    }    
  }

  drawVisualization() {
              
      var data = new google.visualization.DataTable();    
      data.addColumn('string', 'Código Ocorrência');
      data.addColumn('number', 'Quantidade');
      data.addRows(this.dados);
      
      // Define a slider control for the Age column.
      var slider = new google.visualization.ControlWrapper({
          'controlType': 'NumberRangeFilter',
          'containerId': 'quantidade',
          'options': {
              'filterColumnLabel': 'Quantidade',
              'ui': {'labelStacking': 'vertical'}
          }
      });
      
      // Define a category picker control for the Gender column
      var categoryPicker = new google.visualization.ControlWrapper({
          'controlType': 'CategoryFilter',
          'containerId': 'codigo_ocorrencia',
          'options': {
              'filterColumnLabel': 'Código Ocorrência',
              'ui': {
                  'labelStacking': 'vertical',
                  'allowTyping': false,
                  'caption':'Todos os códigos'
                  
              }
          }
      });
      
      // Define a Pie chart
      var pie = new google.visualization.ChartWrapper({
          'chartType': 'PieChart',
          'containerId': '3d_pie_chart',
          'options': {
              'width': 600,
              'height': 500,
              'legend': 'none',
              'title': 'Gráfico de ocorrências',
              'chartArea': {'left': 1, 'top': 50, 'right': 0, 'bottom': 0, 'width':'50%',
                            'height':'50%'},
              'is3D'  : true
              
          },
          // Instruct the piechart to use colums 0 (Name) and 3 (Donuts Eaten)
          // from the 'data' DataTable.
          'view': {'columns': [0, 1]}
      });
      
      // Define a table 
      var table = new google.visualization.ChartWrapper({
          'chartType': 'Table',
          'containerId': 'table_div',
          'options': {'page': 'true', 'pageSize': '14','width': '500px'
          }
      });
      
      google.visualization.events.addListener(pie, 'ready', function () {
          var dt = pie.getDataTable().toDataTable();
          var totals = google.visualization.data.group(dt, [{
              type: 'number',
              column: 0,
              modifier: function () {return 0;}
          }], [{
              type: 'number',
              column: 1,
              aggregation: google.visualization.data.sum
          }]);

          dt.addRow(['Total',  totals.getValue(0, 1)]);
          table.setDataTable(dt);
          table.draw();
          
      });    

      new google.visualization.Dashboard(document.getElementById('dashboard')).
      bind([slider, categoryPicker], [pie]).
      draw(data);
   }  
}   