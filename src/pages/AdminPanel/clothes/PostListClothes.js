import { List, Datagrid, Edit, DeleteButton, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';

const PostListClothes = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="title" />
                <TextField source="inStock" />
                <TextField source="price" />
                <TextField source="priceSale" />
                <TextField source="category" />
                <EditButton />
                <DeleteButton/>
            </Datagrid>
        </List>
    );
};

export default PostListClothes;