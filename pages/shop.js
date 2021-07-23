import React from 'react';
import Head from '../components/head';
import Link from 'next/link';
import ShopItemList from '../components/ShopItemList';
import { Container, Typography } from '@material-ui/core'

export const ShopPage = () => (
  <Container>
    <Head title='Home'/>
    <div>
      <Typography variant="h3">My Shop</Typography>
      <ShopItemList />   
    </div>
    <div>
      <Link href="/cart">
        <a>View cart</a>
      </Link>
    </div>
  </Container>
);

export default ShopPage;