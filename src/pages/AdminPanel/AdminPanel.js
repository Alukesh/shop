import './adminPanel.scss'
import { render } from 'react-dom';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostListClothes from "./clothes/PostListClothes";


const AdminPanel = () => {
    return (
        <section>
            <Admin dataProvider={restProvider('http://localhost:3000/')}>
                <Resource name="admin/clothes" list={PostListClothes}/>
                {/*edit={PostEdit} create={PostCreate} icon={PostIcon}*/}
            </Admin>,
        </section>
    );
};

export default AdminPanel;