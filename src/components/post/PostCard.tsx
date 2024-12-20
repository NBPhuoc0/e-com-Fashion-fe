import { Post } from "@/models/post/post.model";
import Link from "next/link";

export default function PostCard({ post }: { post: Post }) {
  return (
    <>
      <Link href={"#"}>
        <div className="hover:text-black text-black flex flex-col justify-between h-full">
          <div>
            <img loading="lazy" src={post.image} alt="poster" />
          </div>

          <h3 className="font-medium text-md md:text-xl lg:text-2xl md:mt-5 mt-2 line-clamp-1">
            {post.title}
          </h3>

          <span className="text-gray-500 line-clamp-2 text-[10px] md:text-sm">
            {post.description}
          </span>
        </div>
      </Link>
    </>
  );
}
