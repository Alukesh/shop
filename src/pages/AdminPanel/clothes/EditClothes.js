import React from "react";
import { Edit, SimpleForm, NumberInput, TextInput, DateInput } from 'react-admin';

const EditClothes = (props) => {
    return (
        <Edit title="Изменить вещь" {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput disabled source="priceSale" />
                <TextInput disabled source="image" />
                <TextInput source="title" />
                {/*<NumberInput source="price" />*/}
                <TextInput source="inStock" />
            </SimpleForm>
        </Edit>
    );
};

export default EditClothes;