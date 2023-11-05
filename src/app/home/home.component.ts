import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public city: string[] = [];
  public district: string[] = [];
  // 1. Tạo object vietnamdata bao gồm cả tỉnh và huyện thuộc tỉnh
  public vietnamdata = [
    { city: 'Chọn tỉnh thành', district: [] },
    { city: 'Bà Rịa', district: ['Vũng Tàu', 'Xuyên Mộc'] },
    { city: 'Hồ Chí Minh', district: ['Quận 1', 'Quận 2'] }
  ];
  constructor() { }
  public ngOnInit(): void {
    console.log('Cities:', this.vietnamdata);
  }
  //2. Tạo Funtion bắt sự kiện khi chọn tỉnh thành
  public changecity(event: any): void {
    const city = event.target.value; // 4. khi chọn tỉnh sẽ gán city = tỉnh đó
    if (!city) {
      return;
    }
    // cách 1:
    // console.log('event', event.target.value);
    // const search = this.vietnamdata.filter(data1 => data1.city === city);// 5. khai báo object search lấy dòng dữ liệu có chứa dữ liệu của city đã chọn mục 4
    // console.log('search', search);
    // if (search && search.length > 0) { // nếu có chọn search
    //   this.district = search[0].district;
    // }
    //Cách 2:
    this.district = this.vietnamdata.find(data2 => data2.city === city)?.district || []
    // trong vietnamdata tìm thằng nào có cái city đang chọn, trả về cái district, hoặc nếu ko có thì trả về mảng rỗng
  }
}
