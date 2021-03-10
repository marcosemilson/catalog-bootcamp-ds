import React from 'react';
import CurrencyInput from 'react-currency-input-field';
import { Control, Controller } from 'react-hook-form';
import { FormState } from '.';

type Props = {
  control: Control<FormState>
}
function PriceField({control}: Props) {
    return(
        <Controller
            name="price"
            control = {control}
            rules={{required: "Campo Obrigatório"}}
            render={({value, onChange}) =>(
                <CurrencyInput
                className="form-control input-base"
                placeholder = "Preço"
                value={value}
                intlConfig={{locale: 'pt-BR', currency:'BRL'}}
                onValueChange={onChange}
                />
            )}
           
        />
    )
}

export default PriceField;