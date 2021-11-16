import Image from "next/image";
import Link from "next/link";
import Style from "../styles/Post.module.scss";
const Post = ({post}) => {
    const {title, thumbnail, slug, categories} = post
    return (
        <Link href={`/posts/${slug}`}>
            <a>
                <div className={Style.thumbnailWrapper}>
                    <Image src={thumbnail.url} layout="fill"/>
                </div>
                <h1>{title}</h1>
                <div>
                    <span className={Style.badge}>{categories[0].name}</span>
                </div>
            </a>
        </Link>
    );
}

export default Post;