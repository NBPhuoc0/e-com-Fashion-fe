import { PostCardType } from "@/types/post";
import Link from "next/link";

export default function PostCard({post}: PostCardType) {
    return (
        <>
            <Link href={'#'}>
                <div className="hover:text-black text-black flex flex-col justify-between h-full">
                    <div>
                        <img loading="lazy" src={post.image} alt="poster" />
                    </div>

                    <h3 className="font-medium text-2xl mt-5">{post.title}</h3>

                    <span className="text-gray-500 line-clamp-2">
                        { post.description }
                    </span>
                </div>
            </Link>
        </>
    )
}