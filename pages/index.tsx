import Link from 'next/link'
import Component from '../components/Component'
import Head from "next/head";
import { graphCms } from '../lib/graphCms';
import Post from "../components/Post"
const index = ({ posts }) => {
    return (
        <div>
            <Head>
                <title>Learn Next.js</title>
                <meta name="keywords" content="Next.js, JS, React" />
            </Head>
            <Link href='/about'><a>About Page</a></Link>
            <div className="container">
                {
                    posts.map(post=> <Post key={post.slug} post={post} />)
                }
            </div>
        </div>
    )
}

export default index;

export async function getStaticProps() {
    // const req = await fetch('https://jsonplaceholder.typicode.com/todos/');
    // const data = await req.json();
    // return {
    //     props: {data}
    // }
    const {posts} = await graphCms.request(`
        {
            posts {
                title
                slug
                thumbnail {
                    url
                }
                categories{
                    name
                    color{
                    css
                    }
                }
            }
        }
    `);
    return{
        props: {
            posts
        },
        revalidate: 10
    }
}
