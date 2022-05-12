import React from "react";
import { Edit, SimpleForm, NumberInput, TextInput, DateInput } from 'react-admin';

const EditUsers = (props) => {
    return (
        <Edit title="Изменить вещь" {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput disabled source="email" />
                <TextInput disabled source="login" />
                <TextInput source="phone" />
                {/*<NumberInput source="price" />*/}
                <TextInput source="inStock" />
            </SimpleForm>
        </Edit>
    );
};

export default EditUsers;