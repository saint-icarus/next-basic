import React, {Fragment} from 'react';
import { Layout } from '../components/Layout';
import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';

let test = `SERVER:${process.env.API_ROOT}\nCLIENT:${process.env.NEXT_PUBLIC_API_ROOT}`;

const Home = ({data}) =>{
  const styles = {
    location :{
      padding:10,
      margin:10,
      borderBottom:'1px solid #DDD',
      cursor:'pointer'
    }
  }
  console.log(test);
  return(
    <Fragment>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Layout>
      <h1>Bonjour</h1>
      {
        data.map(location =>(
          <div key={location.code} style={styles.location}>
            <Link href='/locations/[code]' as={`/locations/${location.code}`} passHref>
              <h2>{location.nom}</h2>
            </Link>
            <p>{location.code}</p>
          </div>
        ))
      }
    </Layout>
    </Fragment>
  )
}

export const getServerSideProps = async (context) => {
  console.log(test);
  const url = 'https://geo.api.gouv.fr';
  const {data} = await axios.get(`${url}/regions`);
  return {
    props:{
      data
    }
  }
}
export default Home;