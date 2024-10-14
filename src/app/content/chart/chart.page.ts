import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage implements AfterViewInit {
  // Population data for the top 3 countries
  public countries = ['China', 'India', 'United States'];
  public populations = [1444216107, 1393409038, 331893745]; // populations

  constructor() {}

  ngAfterViewInit() {
    // Bar Chart
    this.createBarChart();

    // Pie Chart
    this.createPieChart();
  }

  createBarChart() {
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    const barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.countries,
        datasets: [{
          label: 'Population (in billions)',
          data: this.populations.map(pop => pop / 1e9), // converting to billions
          backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)'],
          borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createPieChart() {
    const ctx = document.getElementById('pieChart') as HTMLCanvasElement;
    const pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: this.countries,
        datasets: [{
          label: 'Population Distribution',
          data: this.populations,
          backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)'],
          hoverOffset: 4
        }]
      }
    });
  }
}
