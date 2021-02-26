import React from 'react';
import CartItems from './CartItems';
import Total from './Total'

function CartSummary(props) {
    const summary = Object.keys(props.selected).map((feature, idx) =>
      <CartItems feature={feature} idx={idx} selected={props.selected} />
    );

    const total = Object.keys(props.selected).reduce(
        (acc, curr) => acc + props.selected[curr].cost,
        0
      );

    return(
        <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <Total total={total}/>
            </div>
        </section>
    )
}

export default CartSummary;