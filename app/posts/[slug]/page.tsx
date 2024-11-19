// app/posts/[slug]/page.tsx

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import MarkdownRenderer from '../../components/MarkdownRenderer';

const getPost = (slug: string) => {
    const postsDirectory = path.join(process.cwd(), 'posts');
    const filePath = path.join(postsDirectory, `${slug}.md`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        title: data.title,
        content,
    };
};

// Define the `PostProps` interface to correctly type `params`
//interface PostProps {
//    params: { slug: string };  // `params` should contain a `slug` string.
//}

type Params = Promise<{ slug: string }>


export default async function PostPage({ params }: { params: Params }) {
    const { slug } = await params;
    const post = getPost(slug);

    if (!post) {
        // If the post is not found, display a 404 page
        notFound();
    }

    return (
        <div className="font-sans p-8 bg-gray-100">
            <h1 className="text-4xl text-center text-gray-800 mb-8">{post.title}</h1>
            <div className="prose mx-auto">
                <MarkdownRenderer content={post.content} />
            </div>
        </div>
    );
};


// Define generateStaticParams to specify dynamic slugs
export const generateStaticParams = async () => {
    const postsDirectory = path.join(process.cwd(), 'posts');
    const filenames = fs.readdirSync(postsDirectory);

    return filenames.map((filename) => {
        const slug = filename.replace(/\.md$/, '');
        return { slug };
    });
};


