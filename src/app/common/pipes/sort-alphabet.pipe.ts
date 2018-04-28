import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortAlphabet'
})
export class SortAlphabetPipe implements PipeTransform {

  public transform(products: Product[], order?: boolean): Product[] {

    products.sort(compareFunction);

    if (!order) {
      products.reverse();
    }
    return products;

    function compareFunction(a: Product, b: Product): number {
      if (`${a.title}`.toLocaleLowerCase() > `${b.title}`.toLocaleLowerCase())
        return 1;
      else {
        if (`${a.title}`.toLocaleLowerCase() === `${b.title}`.toLocaleLowerCase())
          return 0;
        else return -1;
      }
    }
  }

}
