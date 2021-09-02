import { Rna } from './../models/rna.model';
import { RnaService } from './../services/rna.service';
import { Component, OnInit } from '@angular/core';
// import * as tableau from 'tableau-js-api';
// import Tableau from 'tableau-api-js';

declare var tableau: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  tableauViz: any;
  placeholderDiv: any;
  options: any;

  rnadata: any;

  constructor(private service: RnaService) { }


  initViz() {

    const vizUrl = 'https://public.tableau.com/views/SuperlojaMinicurso/Histria1';

    this.placeholderDiv = document.getElementById('viz');
    this.options = {
      hideTabs: true,
      width: '100%',
      height: '1500px',
      hideToolbar: true,
      onFirstInteractive() {
        // The viz is now ready and can be safely used.
      }
    };

    this.tableauViz = new tableau.Viz(this.placeholderDiv, vizUrl, this.options);

  }

  ngOnInit(): void {

    this.initViz();

    this.service.getRna().subscribe(
     (rna: Rna[]) => {
       this.rnadata = rna[0];
       console.log(rna);
     }
    );

  }


  exportPDF(): void {
    this.tableauViz.showExportPDFDialog();
  }

  exportImage(): void {
    this.tableauViz.showExportImageDialog();
  }

  exportCrossTab(): void {
    this.tableauViz.showExportCrossTabDialog();
  }

  exportPowerPoint(): void {
    this.tableauViz.showExportPowerPointDialog();
  }

}
