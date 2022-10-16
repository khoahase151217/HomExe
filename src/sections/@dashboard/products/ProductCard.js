import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Link, Typography, Stack, Radio, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import { fCurrency } from '../../../utils/formatNumber';
// components
import Label from '../../../components/Label';
import { ColorPreview } from '../../../components/color-utils';
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
const PRODUCT_CATEGORY = [
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
const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({ product }) {
  // const { name, cover, price, colors, status, priceSale} = product;
  const { fullName, cover, categoryName , age, rating } = product;
  console.log('Meowww');
  console.log(product);
  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {/* {status && (
          <Label
            variant="filled"
            color={(status === 'sale' && 'error') || 'info'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {status}
          </Label>
        )} */}
        <ProductImgStyle alt={fullName} src={cover ? cover : `/static/mock-images/avatars/avatar_1.jpg`} />
      </Box>

      <Stack spacing={1} sx={{ p: 3 }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="h6" noWrap>
            {fullName || PRODUCT_NAME[Math.floor(Math.random() * 20)  + 1]}
          </Typography>
        </Link>
        {/* <Link to="#" color="inherit" underline="hover" component={RouterLink}> */}
          {/* <Typography variant="subtitle2" noWrap> */}
          <Typography variant="body2" noWrap sx={{
                color: 'text.disabled'
              }}>
            {age || Math.floor(Math.random() * (40-20)) + 20}
          </Typography>
        {/* </Link> */}

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {/* <ColorPreview colors={colors} /> */}
          <Typography variant="body2">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: 'text.disabled',
                textDecoration: 'line-through',
              }}
            >
              {/* {priceSale && fCurrency(priceSale)} */}
            </Typography>
            {/* &nbsp; */}
            {categoryName || PRODUCT_CATEGORY[Math.floor(Math.random() * 20) + 1]}
          </Typography>
          
        </Stack>
        <Typography >
        <Rating readOnly value={4 - 0} />
        </Typography>
      </Stack>
    </Card>
  );
}
