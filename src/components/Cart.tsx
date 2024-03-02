import React from "react";
type CardProps = {
  queryNum: number;
  question: string;
  answers: string;
};
const Cart = ({ queryNum, question, answers }: CardProps) => {
  return (
    <div className="cart">
      <div className="container">
        <p className="cart__question">
          {queryNum}. <span dangerouslySetInnerHTML={{__html:question}}/>
        </p>
      </div>
    </div>
  );
};

export default Cart;
