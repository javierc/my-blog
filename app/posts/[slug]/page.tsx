// app/posts/[slug]/page.tsx

import { notFound } from 'next/navigation';

// Simulated posts data (replace with actual data fetching logic)
const posts = [
    { slug: 'first-post', title: 'First Post', content: 'This is the first post.' },
    { slug: 'second-post', title: 'Second Post', content: 'This is the second post.' },
];

// Define the `PostProps` interface to correctly type `params`
//interface PostProps {
//    params: { slug: string };  // `params` should contain a `slug` string.
//}

type Params = Promise<{ slug: string }>


export default async function PostPage({ params }: { params: Params }) {
    const { slug } = await params;
    const post = posts.find((post) => post.slug === slug);

    if (!post) {
        // If the post is not found, display a 404 page
        notFound();
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <div>{post.content}</div>
        </div>
    );
};

// Define generateStaticParams to specify dynamic slugs
export async function generateStaticParams() {
    // Return all slugs for the dynamic pages
    return posts.map((post) => ({
        slug: post.slug,  // Specify the slug for each post.
    }));
}


