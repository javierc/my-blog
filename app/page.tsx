import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const getPosts = () => {
    const postsDirectory = path.join(process.cwd(), 'posts');
    const filenames = fs.readdirSync(postsDirectory);

    return filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        return {
            title: data.title,
            slug: data.slug,
        };
    });
};

const Home = async () => {
    const posts = getPosts();

    return (
        <div className="font-sans p-8 bg-gray-100">
            <h1 className="text-4xl text-center text-gray-800 mb-8">Welcome to My Blog</h1>
            <ul className="list-none p-0">
                {posts.map((post) => (
                    <li key={post.slug} className="mb-4">
                        <a href={`/posts/${post.slug}`} className="text-blue-500 text-2xl no-underline hover:underline">
                            {post.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;