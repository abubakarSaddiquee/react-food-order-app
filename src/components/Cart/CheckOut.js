import { useRef, useState } from "react";

import classes from "./CheckOut.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeinputInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredSreet = nameInputRef.current.value;
    const enteredPostalCode = nameInputRef.current.value;
    const enteredCity = nameInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredSreetIsValid = !isEmpty(enteredSreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredSreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredSreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (formIsValid) {
      return;
    }
  };

  const nameControlCalsses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`;
  const streetControlCalsses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`;
  const cityControlCalsses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`;
  const postalCodeControlCalsses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`;
  

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={nameControlCalsses}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div className={streetControlCalsses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>please enter a valid Street</p>}
      </div>
      <div className={postalCodeControlCalsses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeinputInputRef} />
        {!formInputsValidity.postalCode && (
          <p>please enter a correct PostalCode</p>
        )}
      </div>
      <div className={cityControlCalsses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
