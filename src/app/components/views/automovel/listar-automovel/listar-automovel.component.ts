import { Component, OnInit } from '@angular/core';
import { Automovel } from 'src/app/models/automovel';
import { AutomovelService } from 'src/app/services/automovel.service';

@Component({
  selector: 'app-listar-automovel',
  templateUrl: './listar-automovel.component.html',
  styleUrls: ['./listar-automovel.component.css']
})
export class ListarAutomovelComponent implements OnInit {

  constructor(private service: AutomovelService) { }

  carros: Automovel[] = [];

  ngOnInit(): void {
    this.service.list().subscribe((carro => {
      this.carros = carro;
    }));
  }

}
