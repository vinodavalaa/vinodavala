import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'youtube'
})
export class YoutubePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer){

  }

  transform(value: string, ...args) {
    console.log(value);
    if(value){
      value = value.replace('watch?v=','embed/');
      }
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}