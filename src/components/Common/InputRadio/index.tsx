import React from "react";

type InputRadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const InputRadio = React.forwardRef<HTMLInputElement, InputRadioProps>(
  ({ id, label, ...rest }, ref) => (
    <label htmlFor={id} className="container-input-radio">
      <input
        type="radio"
        id={id}
        ref={ref}
        className="custom-input-radio"
        {...rest}
        data-testid="inputRadio"
      />
      <span>{label}</span>
    </label>
  )
);

InputRadio.displayName = "InputRadio";
export default InputRadio;
