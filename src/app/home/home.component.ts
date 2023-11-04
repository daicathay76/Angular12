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
  public traicay2 = [    { ten: 'Táo', gia: 12.3, hagia: true },   { ten: 'Nho', gia: -3, hagia: false }, { ten: 'Cam', gia: 15.699, hagia: true } ];
  public district:string[] =[];
  public vietnamdata = [
    {city: 'Chọn tỉnh thành', district: []},
    {city: 'Bà Rịa', district: ['Vũng Tàu', 'Xuyên Mộc']}, 
    {city: 'Hồ Chí Minh', district: ['Quận 1', 'Quận 2']}
  ];
  constructor() { }
  public ngOnInit(): void {
    // console.log('Trái cây:', this.traicay);
    // console.log('Trái cây 2:', this.traicay2);
    console.log('Cities:', this.vietnamdata);
  }
  public changecity (event: any){
    const city=event.target.value;
    console.log('event', event.target.value);
    const search= this.vietnamdata.filter((data) => data.city===city);
    console.log ('search', search);
    if(search && search.length>0){
      this.district= search[0].district;
    }
  }
}
