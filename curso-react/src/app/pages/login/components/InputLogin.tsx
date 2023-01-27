import React from "react";

interface IInputLoginPros {
  type?: string; // 8 o type e para não mostar a senha, tem a interrogação para que não use no email, so na senha
  label: string;
  value: string;

  onChange: (newValue: string) => void; // 6 em vez de usar o setEmail, então usa uma interface, so usa no input
  onPressEnter?: () => void;
}

//export const InputLogin: React.FC<IInputLoginPros> = props ={} usa dessa forma sem o ref

export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginPros
>((props, ref) => {
  return (
    <label>
      <span>{props.label}</span>
      <input
        ref={ref}
        type={props.type}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        onKeyDown={(e) =>
          e.key === "Enter"
            ? props.onPressEnter && props.onPressEnter()
            : undefined
        } // repete a prosp para que a função seja diferente de undefind
      />
    </label>
  );
});
