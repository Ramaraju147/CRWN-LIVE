import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

<<<<<<< HEAD
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
=======
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

>>>>>>> 80a2c17db4d0f36f9bc6b72e3333025253fa6f20
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
<<<<<<< HEAD
    <TotalContainer>TOTAL: ${total}</TotalContainer>
    <WarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </WarningContainer>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
=======
    <div className='total'>TOTAL: ${total}</div>
    <div className='test-warning'>
      *Please use the following test credit card for payments*
      <br/>
      4242 4242 4242 4242 - Exp: 01/20 - CVV:123
    </div>
    <StripeCheckoutButton price={total}/>
  </div>
>>>>>>> 80a2c17db4d0f36f9bc6b72e3333025253fa6f20
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
