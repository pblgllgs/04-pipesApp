import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  public nombreLower: string = 'pablo';
  public nombreUpper: string = 'PABLO';
  public nombreCompleto: string = 'pAbLO GAlLeGOs';

  public fecha :Date = new Date();

}
