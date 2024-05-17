import { useState } from "react";

const OnChangeEvent = () => {
  const [name, setName] = useState("kavya");
  const [quantity, setQuantity] = useState(2);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [delivery, setDelivery] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const onEnteringComment = (event) => {
    setComment(event.target.value);
  };

  const onPaymentSelect = (event) => {
    setPayment(event.target.value);
  };

  const onDeliveryPreference = (event) => {
    setDelivery(event.target.value);
  };

  return (
    <>
      <div>
        <p>Name : {name}</p>
        <input type="text" value={name} onChange={onNameChange} />

        <p>Quantity : {quantity}</p>
        <input value={quantity} onChange={onQuantityChange} type="number" />

        <p>Feedback : {comment}</p>
        <textarea value={comment} onChange={onEnteringComment} />
      </div>

      <br />

      <div>
        <label htmlFor="payments">Choose your Payment : </label>
        <select
          name="payments"
          id="payments"
          value={payment}
          onChange={onPaymentSelect}
        >
          <option value="DebitCard">DebitCard</option>
          <option value="CreditCard">CreditCard</option>
          <option value="UPI">UPI</option>
          <option value="PayLater">PayLater</option>
        </select>

        <p>Your Choosen Payment method : {payment}</p>
      </div>

      <div>
        <p>Choose your Delivery : </p>

        <input
          type="radio"
          value="Pick-up"
          checked={delivery === "Pick-up"}
          onClick={onDeliveryPreference}
        />
        <label> Pickup</label>
        <div>
          <input
            type="radio"
            value="delivery"
            checked={delivery === "delivery"}
            onClick={onDeliveryPreference}
          />
          <label> Deliver at your place</label>
        </div>
        <p>preference : {delivery}</p>
      </div>
    </>
  );
};

export default OnChangeEvent;
