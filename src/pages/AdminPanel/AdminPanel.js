import './adminPanel.scss'
import { render } from 'react-dom';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostListClothes from "./clothes/PostListClothes";
import PostListUsers from "./users/PostListUsers";
import EditClothes from "./clothes/EditClothes";
import EditUsers from "./users/EditUsers";


const AdminPanel = () => {
    return (
        <section>
            <Admin dataProvider={restProvider('http://localhost:3000')}>
                <Resource name="clothes" edit={EditClothes} list={PostListClothes}/>
                <Resource name="users" edit={EditUsers} list={PostListUsers}/>
            </Admin>,
        </section>
    );
};

export default AdminPanel;