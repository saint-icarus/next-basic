import React, {Fragment} from 'react';
import {useRouter} from 'next/router';
import {Layout} from '../../components/Layout';
import axios from 'axios';
import Head from 'next/head';

const Title = ({data}) =>{
    return(
        <Fragment>
            {
                data && (
                <Fragment>
                  <Head>
                    <title>{data.title}</title>
                  </Head>
                  <Layout>
                    <h1>{data.title}</h1>
                    <img src={data.pictures[0]}/>
                    <p>{data.description}</p>
                  </Layout>
                </Fragment>
                )
            }
        </Fragment>
    )
};

export const getStaticPaths = async () =>{
    const url = 'https://aqueous-meadow-07678.herokuapp.com';
    const {data} = await axios.get(`${url}/api/posts`);
    const posts = data.data;
    const paths = posts.map(post =>({
        params:{id:post._id}
    }))
    return{paths, fallback:true}
}

export const getStaticProps = async ({params}) => {
    const url = 'https://aqueous-meadow-07678.herokuapp.com';
    const id = params.id;
    const {data} = await axios.get(`${url}/api/post/${id}`);
    return {
        props:{
            data
        }
    }
}

export default Title;