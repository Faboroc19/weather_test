import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsius'
})
export class CelsiusPipe implements PipeTransform {

  constructor(  ) {}

  transform(value: string): string {

    // tslint:disable-next-line:radix
    const intValue = parseInt( value );
    const celsius = intValue - 273;
    const StringValue = celsius.toString();
    return StringValue;

  }

}
