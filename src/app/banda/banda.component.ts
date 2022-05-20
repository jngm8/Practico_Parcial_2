import { Component, OnInit } from '@angular/core';
import { Banda } from './banda';
import { BandaService } from './banda.service';

@Component({
  selector: 'app-banda',
  templateUrl: './banda.component.html',
  styleUrls: ['./banda.component.css']
})
export class BandaComponent implements OnInit {

  constructor(private bandaService: BandaService) { }
  bandas: Array<Banda> = [];

  selected = false;
  selectedBanda!: Banda;


  getBandas() {
    this.bandaService.getSeries().subscribe(Banda => {
      this.bandas = Banda;

    });
  }

  onSelected(banda: Banda): void{
    this.selected = true;
    this.selectedBanda = banda;
  }

  ngOnInit() {

    this.getBandas();
  }


}
