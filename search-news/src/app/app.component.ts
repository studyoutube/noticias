import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'search-news';

  constructor(private _noticiaService: NoticiaService) {}

  buscarNoticias(parametros: any) {
    console.log('sou o pai');
    console.log(parametros);

    this._noticiaService.getNoticias(parametros).subscribe((data) => {
      console.log(data);
    });
  }
}
