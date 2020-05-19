import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

<<<<<<< HEAD
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_WBqax2FWVzS9QlpJScO07iuL';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
=======
const StripeCheckoutButton = ({ price}) => {
    const priceForStripe = price*100;
    const publishablekey = 'pk_test_j75hWmr7Wgu2zHZwyT0CKdar00NbV3VO4J';

const onToken = token =>{
        console.log(token);
        alert('Payment Successful')
    }

    return(
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishablekey}

        
        />
    )

}

export default StripeCheckoutButton;




>>>>>>> 80a2c17db4d0f36f9bc6b72e3333025253fa6f20
