import React, {Fragment} from 'react';
import { Layout } from '../components/Layout';
import Link from 'next/link';
import axios from 'axios';
import Head from 'next/head';

const Blog = ({posts}) =>{
    const styles = {
      main:{
        padding:20,
        margin:20,
        borderBottom:'1px solid #DDD'
      },
      img:{
        height:200,
        width:300
      }
    }
    return(
      <Fragment>
        <Head>
          <title>Next.Js Blog</title>
        </Head>
        <Layout>
            <h1>Blog</h1>
            {
              
              posts.map(post =>(
                <div key={post._id} style={styles.main}>
                  <h1>{post.title}</h1>
                  <Link href='/blog/[id]' as={`/blog/${post._id}`} passHref>
                      <img src={post.pictures[0]} style={styles.img}/>
                  </Link>
                </div>
              ))   
            }
        </Layout>
      </Fragment>
    )
}

export const getStaticProps = async (context) =>{
  const url = 'https://aqueous-meadow-07678.herokuapp.com';
  const {data} = await axios.get(`${url}/api/posts`);
  const posts = data.data
  return{
    props:{
      posts
    }
  }
}

export default Blog;