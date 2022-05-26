import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () =>{

    const router = useRouter();
    const styles = {
        header: {
            margin:20,
            padding:20,
            border:'1px solid #DDD'
        },
        link: {
            margin:15,
            cursor:'pointer'
        },
        active:{
            margin:15,
            cursor:'pointer',
            color:'blue'
        }
    }
    return(
        <div style={styles.header}>
            <Link href='/' passHref>
                <span style={router.pathname === '/' ? styles.active : styles.link}>Home</span>
            </Link>
            <Link href='/blog' passHref>
                <span style={router.pathname === '/blog' ? styles.active : styles.link}>Blog</span>
            </Link>
            <Link href='/profile' passHref>
                <span style={router.pathname === '/profile' ? styles.active : styles.link}>Profile</span>
            </Link>
            <Link href='/blog/category' passHref>
                <span style={router.pathname === '/blog/category' ? styles.active : styles.link}>Category</span>
            </Link>
            <Link href='/blog/items' passHref>
                <span style={router.pathname === '/blog/items' ? styles.active : styles.link}>Items</span>
            </Link>
            <Link href='/departement' passHref>
                <span style={router.pathname === '/departement' ? styles.active : styles.link}>Departement</span>
            </Link>
        </div>
        
    )
}

export default Header;