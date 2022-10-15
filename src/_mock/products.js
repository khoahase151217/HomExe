import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
import PropTypes from 'prop-types';
// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  'Nguyễn An Cơ',
  'Nguyễn An Khang',
  'Nguyễn Ân Lai',
  'Nguyễn An Nam',
  'An Nguyên',
  'An Ninh',
  'Nguyễn An Cơ',
  'Nguyễn An Khang',
  'Nguyễn Ân Lai',
  'Nguyễn An Nam',
  'An Nguyên',
  'Nguyễn An Ninh',
  'Nguyễn An Cơ',
  'Nguyễn An Khang',
  'Nguyễn Ân Lai',
  'Nguyễn An Nam',
  'An Nguyên',
  'Nguyễn An Ninh',
  'Nguyễn An Cơ',
  'Nguyễn An Khang',
  'Nguyễn Ân Lai',
  'Nguyễn An Nam',
  'An Nguyên',
  'Nguyễn An Ninh',
]
const PRODUCT_PRICE = [
  'Gym',
  'Yoga',
  'Pilates',
  'Gym',
  'Yoga',
  'Pilates',
  'Gym',
  'Yoga',
  'Pilates',
  'Gym',
  'Yoga',
  'Pilates',
  'Gym',
  'Yoga',
  'Pilates',
  'Gym',
  'Yoga',
  'Pilates',
  'Gym',
  'Yoga',
  'Pilates',
  'Gym',
  'Yoga',
  'Pilates',
]
const PRODUCT_COLOR = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107'];
const PRODUCT_RATING  = [0, 1, 2, 2,1, 3, 0, 1, 2, 2,1, 3, 0, 1, 2, 2,1, 3, 0, 1, 2, 2,1, 3]
const PRODUCT_AGE = [20, 30, 25, 36, 45, 47, 24, 25, 20, 30, 25, 36, 45, 47, 24, 25, 20, 30, 25, 36, 45, 47, 24, 25, 20, 30, 25, 36, 45, 47, 24, 25]
// ----------------------------------------------------------------------

const products = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    // cover: `/static/mock-images/products/product_${setIndex}.jpg`,
    cover: `/static/mock-images/avatars/avatar_${setIndex}.jpg`,
    name: PRODUCT_NAME[index],
    // price: faker.datatype.number({ min: 4, max: 99, precision: 0.01 }),
    // priceSale: setIndex % 3 ? null : faker.datatype.number({ min: 19, max: 29, precision: 0.01 }),
    price: PRODUCT_PRICE[index],
    age: PRODUCT_AGE[index],
    rating: PRODUCT_RATING[index],
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
      (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
      PRODUCT_COLOR,
    status: sample(['sale', 'new', '', '']),
  };
});

export default products;
