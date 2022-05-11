import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';

const PostListClothes = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="title" />
                <DateField source="price" />
                <TextField source="priceSale" />
                <TextField source="category" />
                <EditButton />
            </Datagrid>
        </List>
    );
};

export default PostListClothes;