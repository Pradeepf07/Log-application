import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as CanvasJS from '../../assets/canvasjs.min.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let dataPoints = [];
    let dpsLength = 0;

    let chart = new CanvasJS.Chart("chartContainer", {
      exportEnabled: true,
      title: {
        text: "Fine Grained Logging"
      },
      data: [{
        type: "spline",
        dataPoints: dataPoints,
      }]
    });


    let chart2 = new CanvasJS.Chart("chartContainer2", {
      exportEnabled: true,
      title: {
        text: "Multi grained Logging"
      },
      data: [{
        type: "spline",
        dataPoints: dataPoints,
      }]
    });

    // $.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=25&length=20&type=json&callback=?", function (data) {
    //   $.each(data, function (key, value) {
    //     dataPoints.push({ x: value[0], y: parseInt(value[1]) });
    //   });
    var dps = [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 5 }, { x: 6, y: 6 }, { x: 7, y: 7 }, { x: 8, y: 8 }];
    dataPoints.push(dps);
    dpsLength = dataPoints.length;
    chart.render();
    chart2.render();
    newfinal();
    updateChart();
    // });

    function updateChart() {
      let i = 0;
      for (var j = 1; j < 8; j++) {
        dataPoints.push({
          x: parseInt("" + j),
          y: parseInt("" + j)
        });
      }
      chart.render();
    }

    function newfinal() {
      let i = 0;
      var dps = [{ x: 1, y: 1 }, { x: 2, y: 1.8 }, { x: 3, y: 2.7 }, { x: 4, y: 3.1 }, { x: 5, y: 3.4 }, { x: 6, y: 3.4 }, { x: 7, y: 3 }, { x: 8, y: 1 }];
      for (var j = 0; j < 8; j++) {
        dataPoints.push({
          x: dps[j].x,
          y: dps[j].y
        });
      }
      // $.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=1&length=8&type=json&callback=?", function (data) {
      //   $.each(data, function (key, value) {
      //     dataPoints.push({
      //       x: parseInt("" + dps[i].x),
      //       y: parseInt("" + dps[i].y)
      //     });
      //     // dpsLength++;
      //     i++;
      //   });
        // if (dataPoints.length > 20) {
        //   dataPoints.shift();
        // }
        dataPoints.push(dps);
        chart2.render();
        // setTimeout(function () { updateChart() }, 1000);
      // });
    }
  }

}
