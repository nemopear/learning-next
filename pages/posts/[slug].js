import { graphCms } from "../../lib/graphCms";

const singlePost = ({post}) => {
    const {title,createdAt, content} = post
    return (
        <div>
            <h1>{post.title}</h1>
            <div className="create-at">
                {post.createdAt}
            </div>
            <div className="content" dangerouslySetInnerHTML={{__html:content.html}}>
                {/* {post.content.html} */}
            </div>
        </div>
    );
}

export default singlePost;

export async function getStaticPaths() {
    const {posts} = await graphCms.request(`
        {
            posts {
                slug
            }
        }
    `)
    const paths = posts.map(({slug})=>({
        params: {
            slug
        }
    }));
    return{
        paths,
        fallback: "blocking"
    }
}

export async function getStaticProps({params}) {
    const {post} = await graphCms.request(`
        query SinglePost($slug: String!) {
            post(where: {slug: $slug}) {
                title
                createdAt
                content {
                    html
                }
            }
        }      
    `, {"slug": params.slug}
    );

    return {
        props: {
            post,
            revalidate: 10
        }
    }
}