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
            mask='+\9\96(999) 999-999 '
            value={props.value}
            onChange={props.onChange}>
        </InputMask>
    );
}
function Input({tel = '', name}) {
    const [phone, setPhone] = useState(tel);
    const handleInput = ({ target: { value } }) => setPhone(value);
    return (
        <>
            {/*<div style={{paddingTop: '12px'}}>Phone: {phone}</div>*/}

            <PhoneInput
                className={name}//not works
                value={phone}
                defaultValue={tel}
                alwaysShowMask={true}
                onChange={handleInput}>
            </PhoneInput> <br/> <br/>
        </>
    );
}

export default Input;