import {
    List,
    Datagrid,
    Edit,
    Create,
    SimpleForm,
    DateField,
    TextField,
    EditButton,
    TextInput,
    DateInput,
    DeleteButton
} from 'react-admin';

const PostListUsers = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="email" />
                <TextField source="phone" />
                <TextField source="login" />

                <EditButton />
                <DeleteButton/>
            </Datagrid>
        </List>
    );
};

export default PostListUsers;