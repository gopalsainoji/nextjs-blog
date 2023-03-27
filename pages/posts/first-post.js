import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../../components/layout.js';

export default function FirstPost() {
    return (
        <Layout>
            <Head><title>First Post</title></Head>
            <Script 
                src='https://connect.facebook.net/en_US/sdk.js'
                strategy='lazyOnLoad'
                onLoad={()=> console.log('script loaded !!')}
            />
            {/**<h3>Go <Link href='/'>Back to Home </Link></h3>*/}
            <h3>Hey it's a new page loaded</h3>
        </Layout>
    );
}

// function FirstPost() {
//     return <h3>Hey it's a new page loaded</h3>
// }
//export default FirstPost;