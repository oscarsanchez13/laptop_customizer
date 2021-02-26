import React from 'react';



function Total(props) {
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
    return (
        <>
           {USCurrencyFormat.format(props.total)} 
        </>        
    )
}

  export default Total;