import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /*templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']*/
  template:'<h1>{{title}}</h1><h2>{{hero.name}} !</h2>'
})
export class AppComponent {
  title = '你有freeStyle吗？';
  hero : Hero  = {
        id:1,
        name:"Windstorm"
  };
}

export class Hero {
    id:number;
    name:string;

}

