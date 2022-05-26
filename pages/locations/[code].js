import React, {Fragment} from 'react';
import axios from 'axios';
import Head from 'next/head';

const CodeLocation = ({data}) =>{
    
    return (
        <Fragment>
            {
                data && (
                    <Fragment>
                      <Head>
                        <title>{data.nom}</title>
                      </Head>
                      <div>
                        <h1>{data.nom}</h1>
                        <p>{data.code}</p>
                      </div>
                    </Fragment>
                )
            }
        </Fragment>
    )
};

export const getServerSideProps = async (context) => {
    const url = 'https://geo.api.gouv.fr';
    const code = context.params.code;
    const {data} = await axios.get(`${url}/regions/${code}`);
    return {
        props:{
            data
        }
    }
};

export default CodeLocation;