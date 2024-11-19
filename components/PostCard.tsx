// components/PostCard.tsx

import Link from 'next/link';

interface PostCardProps {
    title: string;
    slug: string;
    excerpt: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, slug, excerpt }) => {
    return (
        <div className="post-card">
            <h2>{title}</h2>
            <p>{excerpt}</p>
            <Link href={`/posts/${slug}`}>
                <a>Read more...</a>
            </Link>
        </div>
    );
};

export default PostCard;
