import React from 'react';
import Head from '../components/head';
import Link from 'next/link';
import Cart from '../components/CartItemList'
import { Container, Typography } from '@material-ui/core'
export const ShopPage = () => (
  <Container>
    <Head title='Home'/>
    <div>
      <Typography variant="h3">My Cart</Typography>
    </div>
    <div>
      <Link href="/shop">
        <a>Return to shop</a>
      </Link>
      <Cart />
    </div>
  </Container>
);
export default ShopPage;