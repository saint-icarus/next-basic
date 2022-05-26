import React from 'react';
import { Layout } from '../components/Layout';
import axios from 'axios';



const Profile = ({data}) =>{
    
    const styles = {
        padding:10,
        margin:10,
        borderBottom:'1px solid #DDD'
    }
    return(
        <Layout>
            {
                data.map(user =>(
                    <div key={user.id} style={styles}>
                        <h1>{user.name}</h1>
                        <p>Email : {user.email}</p>
                        <p>Phone : {user.phone}</p>
                    </div>
                ))
            }
        </Layout>
    )
};

export const getServerSideProps = async (context) =>{
    const url = 'https://jsonplaceholder.typicode.com/users';
    const data = await axios.get(url);
    return{
        props:{
            data:data.data
        }
    }
}

export default Profile;