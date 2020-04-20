import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlimg'
})
export class UrlimgPipe implements PipeTransform {

  url: string;

  transform(img: string): string {

    this.url = "../../../assets/img/";

    img = `${this.url}${img}`;

    console.log(img);

    return img;

  }

}
