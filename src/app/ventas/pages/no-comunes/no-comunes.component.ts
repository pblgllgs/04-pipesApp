import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect

  public nombre1 : string = 'Rodrigo'
  public nombre2 : string = 'Pablo';
  public nombre3 : string = 'Maria';

  public genero : string = 'masculino';

  invitacionMap = {
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla'
  }

  sorpresaMap ={
    'masculino' : 'sorprendido',
    'femenino' : 'sorprendida'
  }



  //i18nPlural

  public clientes : string[] =['Pablo','Rodrigo','Victor','Raul'];

  clientesMap = {
    '=0' : 'no tenemos clientes esperando',
    '=1' : 'tenemos 1 cliente esperando',
    'other' :'tenemos # clientes esperando'
  }

  cambiarPersona(){
    if(this.nombre1 === 'Rodrigo'){
       this.nombre1 = this.nombre2;
    }else if(this.nombre1 === 'Pablo'){
      this.nombre1 = this.nombre3;
      this.genero = 'femenino';
    }else{
      this.nombre1 = 'Rodrigo'
      this.genero = 'masculino';
    }
  }

  eliminarCliente(){
    this.clientes.pop();
  }


  //kayvaluepipe
  persona = {
    nombre : 'Pablo',
    edad: 32,
    direccion :'Chile'
  }

  //JSON pipes

  heroes = [
    {
      nombre :'Batman',
      compañia: 'DC'
    },
    { nombre: 'ironman',
      compañia: 'marvel'
    }
  ];

  //async pipe

  miObservable = interval(1000);


  valorPromesa = new Promise( (resolve,rejects) => {
    setTimeout( () => {
      resolve('Tenemos data de promesa');
    }, 3500 );
  });

}
