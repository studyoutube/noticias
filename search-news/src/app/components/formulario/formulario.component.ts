import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  @Output() parametrosSeleccionados = new EventEmitter<any>();

  categoriaSeleccionada = 'general';
  paisSeleccionado = 'br';

  categorias: any[] = [
    { value: 'general', nombre: 'General' },
    { value: 'business', nombre: 'Negócios' },
    { value: 'entertainment', nombre: 'Entretenimento' },
    { value: 'health', nombre: 'Saúde' },
    { value: 'science', nombre: 'Ciência' },
    { value: 'sports', nombre: 'Esportes' },
    { value: 'technology', nombre: 'Tecnologia' },
  ];

  paises: any[] = [
    { value: 'br', nombre: 'Brasil' },
    { value: 'ar', nombre: 'Argentina' },
    { value: 'fr', nombre: 'França' },
    { value: 'hu', nombre: 'Hungria' },
    { value: 'mx', nombre: 'México' },
    { value: 'gb', nombre: 'Reino Unido' },
  ];

  constructor() {}

  ngOnInit(): void {}

  buscarNoticia() {
    // console.log(this.categoriaSeleccionada);
    // console.log(this.paisSeleccionado);

    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado,
    };
    this.parametrosSeleccionados.emit(PARAMETROS);
  }
}
