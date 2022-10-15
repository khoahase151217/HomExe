import { replace } from 'lodash';
import numeral from 'numeral';

// ----------------------------------------------------------------------

// const products = [...Array(24)].map((_, index) => {
//   const setIndex = index + 1;

//   return {
//     id: faker.datatype.uuid(),
//     cover: `/static/mock-images/products/product_${setIndex}.jpg`,
//     name: PRODUCT_NAME[index],
//     price: faker.datatype.number({ min: 4, max: 99, precision: 0.01 }),
//     priceSale: setIndex % 3 ? null : faker.datatype.number({ min: 19, max: 29, precision: 0.01 }),
//     colors:
//       (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
//       (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
//       (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
//       (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
//       (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
//       (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
//       PRODUCT_COLOR,
//     status: sample(['sale', 'new', '', '']),
//   };
// });

export function fCurrency(number) {
  return numeral(number).format(Number.isInteger(number) ? '$0,0' : '$0,0.00');
}

export function fPercent(number) {
  return numeral(number / 100).format('0.0%');
}

export function fNumber(number) {
  return numeral(number).format();
}

export function fShortenNumber(number) {
  return replace(numeral(number).format('0.00a'), '.00', '');
}

export function fData(number) {
  return numeral(number).format('0.0 b');
}
