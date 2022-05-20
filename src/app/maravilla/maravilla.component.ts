import { Component, OnInit } from '@angular/core';
import { Maravilla } from './maravilla';
import { MaravillaService } from './maravilla.service';

@Component({
  selector: 'app-maravilla',
  templateUrl: './maravilla.component.html',
  styleUrls: ['./maravilla.component.css']
})
export class MaravillaComponent implements OnInit {

  constructor(private maravillaService: MaravillaService) { }
  maravillas: Array<Maravilla> = [];

  selected = false;
  selectedMaravilla!: Maravilla;


  getMaravillas() {
    this.maravillaService.getSeries().subscribe(Maravilla => {
      this.maravillas = Maravilla;

    });
  }

  onSelected(maravilla: Maravilla): void{
    this.selected = true;
    this.selectedMaravilla = maravilla;
  }

  ngOnInit() {

    this.getMaravillas();
  }


}
