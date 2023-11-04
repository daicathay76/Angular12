import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public name: string = 'Hưng Nguyễn'
  public age: number = 25;
  public traicay: string[] = ['Táo', 'Nho'];
  public traicay2 = [    { ten: 'Táo', gia: 12, hagia: true },   { ten: 'Nho', gia: -3, hagia: false }, { ten: 'Cam', gia: 15, hagia: true } ];
  constructor() { }
  public ngOnInit(): void {
    console.log('Trái cây:', this.traicay);
    console.log('Trái cây 2:', this.traicay2);
  }
}
