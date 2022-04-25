
const Form = () => {
    return (
        <div>
            <form className={'contact__form'}>
                <h2 className={'contact__form-title'}>Напишите нам</h2>
                <input className={'contact__form-input'} type="text" placeholder={'Имя'}/>
                <input className={'contact__form-input'} type="text" placeholder={'E-mail'}/>
                <input className={'contact__form-input'} type="text" placeholder={'Телефон'}/>
                <textarea className={'contact__form-text'} placeholder={'Сообщение'} name="text" id=""/>
                <button className={'contact__form-btn'}>Отправить</button>
            </form>
        </div>
    );
};

export default Form;