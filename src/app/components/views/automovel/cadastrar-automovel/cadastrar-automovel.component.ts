import { Component, OnInit } from '@angular/core';
import { Automovel } from 'src/app/models/automovel';
import { AutomovelService } from 'src/app/services/automovel.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-cadastrar-automovel',
  templateUrl: './cadastrar-automovel.component.html',
  styleUrls: ['./cadastrar-automovel.component.css']
})
export class CadastrarAutomovelComponent implements OnInit {

  modelo!: string;
  ano!: number;
  cor!: string;
  marca!: string;
  constructor(private service: AutomovelService, private router: Router) { }

  ngOnInit(): void {}

  cadastrar():void {
    let carro: Automovel = {
      modelo: this.modelo,
      ano: this.ano,
      cor: this.cor,
      marca: this.marca,
    };
    this.service.create(carro).subscribe((carro) => {
      console.log(carro);
      this.router.navigate([""]);
    });
  }

}
