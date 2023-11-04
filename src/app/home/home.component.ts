import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public name: string = 'Hưng Nguyễn'
  public age: number = 25;
  constructor() { }
  ngOnInit(): void { }

  public resetname(): void {
    console.log('đã click resetname');
    this.name = ''
  }
}
