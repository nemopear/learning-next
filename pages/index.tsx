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
            {/* <Link href='/about'><a>About Page</a></Link> */}
            <div className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative">
                    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg
                            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                            fill="currentColor"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>
                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">Nemo's</span>{' '}
                                    <span className="block text-indigo-600 xl:inline">Blog</span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                                    fugiat veniam occaecat fugiat aliqua.
                                </p>
                            </div>
                        </main>
                    </div>
                    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <img
                            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                            src="https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=686&q=80"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <div className="lg:container md:container mx-auto">
                <div className="max-w-2xl mx-auto py-16 sm:py-24  lg:max-w-7xl">
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            posts.map(post=> <Post key={post.slug} post={post} />)
                        } 
                    </div>
                </div>
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
