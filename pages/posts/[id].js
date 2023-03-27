import Layout from '../../components/layout';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  console.log("test 7 ----", paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
    //console.log("test 15 ----", params);
    const postData = await getPostData(params.id);
    return {
      props: {
        postData,
      },
    };
  }

// export default function Post() {
//   return <Layout>...</Layout>;
// }
export default function Post({ postData }) {
  //console.log("test 28 ----", postData);
    return (
      <Layout>
      {/** Head tag added but content(postData.title) is not diplayed on screen */}
      {/**
        <Head>
          <title>{postData.title}</title>
        </Head>
      */}
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
        {/**
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
        <br />
        <div dangerouslySetInnerHTML = {{__html : postData.contentHtml}} />
        */}
      </Layout>
    );
  }

// test 7 ---- [ { params: { id: 'pre-rendering' } }, { params: { id: 'ssg-ssr' } } ] -- 1st printed
// test 15 ---- { id: 'ssg-ssr' } -- 2nd printed
// test 28 ---- { -- 3rd printed
//   id: 'ssg-ssr',
//   title: 'When to Use Static Generation v.s. Server-side Rendering',
//   date: '2020-01-02'
// }