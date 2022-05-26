import React from 'react';
import {Layout} from '../components/Layout';
import axios from 'axios';

const Departement = ({data}) =>{
    const style = {
        padding : 10,
        margin:10,
        borderBottom: '1px solid #DDD'
    }
    return(
        <Layout>
            {
                data.map(departement =>(
                    <div style={style} key={departement.code}>
                        <h1>{departement.nom}</h1>
                        <p>Code de departement : {departement.code}</p>
                        <p>Code de la régon : {departement.codeRegion}</p>
                    </div>
                ))
            }
        </Layout>
    )
}


export const getStaticProps = async (context) =>{
    const url = 'https://geo.api.gouv.fr/departements';
    const {data} = await axios.get(url);
    return {
        props:{data}
    }
}
export default Departement;