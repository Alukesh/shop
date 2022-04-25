import React, {useState} from 'react';
import InputMask from 'react-input-mask'

// const PhoneInput = (props) => {
//     return (
//             <InputMask
//                 mask='(+1) 999 999 9999'
//                 value={props.value}
//                 onChange={props.onChange}>
//             </InputMask>
//     );
// };
function PhoneInput(props) {
    return (
        <InputMask placeholder={'Введите номер'} className={'form__input'}
            mask='(+\9\9\6) 999-999 '
            value={props.value}
            onChange={props.onChange}>
        </InputMask>
    );
}
function Input() {
    const [phone, setPhone] = useState('');
    const handleInput = ({ target: { value } }) => setPhone(value);
    return (
        <div>
            {/*<div style={{paddingTop: '12px'}}>Phone: {phone}</div>*/}

            <PhoneInput
                value={phone}
                alwaysShowMask={true}
                onChange={handleInput}>
            </PhoneInput> <br/> <br/>
        </div>
    );
}

export default Input;