import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// material
import { Container, Stack, Typography, OutlinedInput, InputAdornment } from '@mui/material';
// components
import { styled } from '@mui/material/styles';
import { filter } from 'lodash';
import PtApi from '../utils/PtApi';
import Page from '../components/Page';

import {
    ProductSort,
    ProductList,
    ProductCartWidget,
    ProductFilterSidebar,
} from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';
import Iconify from '../components/Iconify';

// ----------------------------------------------------------------------
const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
    width: 240,
    transition: theme.transitions.create(['box-shadow', 'width'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter,
    }),
    '&.Mui-focused': { width: 320, boxShadow: theme.customShadows.z8 },
    '& fieldset': {
        borderWidth: `1px !important`,
        borderColor: `${theme.palette.grey[500_32]} !important`,
    },
}));
// ---------------------------------------------
function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    if (query) {
        return filter(
            array,
            (_product) => _product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
        );
    }
    return stabilizedThis.map((el) => el[0]);
}
export default function EcommerceShop() {
    const [products, setProducts] = useState([]);
    const [openFilter, setOpenFilter] = useState(false);
    const [filterName, setFilterName] = useState('');
    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };

    const filteredUsers = applySortFilter(products, getComparator('desc', ''), filterName);
    const users = applySortFilter(products, getComparator('desc', ''), filterName);

    useEffect(() => {
        const initData = async () => {
            const tmp = await PtApi.getAll().then((res) => res.data);
            setProducts(tmp.data);

        };
        initData();
    }, []);
    return (
        <Page title="Dashboard: Personal Trainers List">
            <Container>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Personal Trainers List
                </Typography>
                <SearchStyle
                    value={filterName}
                    onChange={(e) => setFilterName(e.target.value)}
                    placeholder="Search personal list..."
                    startAdornment={
                        <InputAdornment position="start">
                            <Iconify
                                icon="eva:search-fill"
                                sx={{ color: 'text.disabled', width: 20, height: 20 }}
                            />
                        </InputAdornment>
                    }
                />
                <Stack
                    direction="row"
                    flexWrap="wrap-reverse"
                    alignItems="center"
                    justifyContent="flex-end"
                    sx={{ mb: 5 }}
                >
                    <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                        <ProductFilterSidebar
                            isOpenFilter={openFilter}
                            onOpenFilter={handleOpenFilter}
                            onCloseFilter={handleCloseFilter}
                        />
                        {/* <ProductSort /> */}
                    </Stack>
                </Stack>

                <ProductList products={filteredUsers} />
                {/* <ProductCartWidget /> */}
            </Container>
        </Page>
    );
}
