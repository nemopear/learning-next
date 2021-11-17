import Image from "next/image";
import Link from "next/link";
import Style from "../styles/Post.module.scss";
const Post = ({post}) => {
    const {title, thumbnail, slug, categories} = post
    return (
        <Link href={`/posts/${slug}`}>
            <a>
                {/* <div className="">
                    <div className={Style.thumbnailWrapper}>
                        <Image src={thumbnail.url} layout="fill"/>
                    </div>
                    <h1>{title}</h1>
                    <div>
                        <span className={Style.badge}>{categories[0].name}</span>
                    </div>
                </div> */}
                <div className="group relative">
                    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                        <div className="bg-cover bg-center h-44 p-4 overflow-hidden relative">
                            <Image 
                                src={thumbnail.url} 
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                                />
                        </div>
                        <div className="p-4">
                            <p className="tracking-wide font-bold text-gray-700">{title}</p>
                            <p className="text-gray-900"><span className={Style.badge}>{categories[0].name}</span></p>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
}

export default Post;