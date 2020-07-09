import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PolarareaChartComponent } from './polararea-chart/polararea-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';



const routes: Routes = [
 // {
   // path:"",
    //component:NavigationComponent
  //},
  {
    path:"line-chart",
    component:LineChartComponent
  },
  {
    path:"pie-chart",
    component:PieChartComponent
  },
  {
    path:"bar-chart",
    component:BarChartComponent
  },
  {
    path:"doughnut-chart",
    component:DoughnutChartComponent
  },
  {
    path:"radar-chart",
    component:RadarChartComponent
  },
  {
    path:"polararea-chart",
    component:PolarareaChartComponent
  },
  {
    path:"bubble-chart",
    component:BubbleChartComponent
  },
  {
    path:"scatter-chart",
    component:ScatterChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
