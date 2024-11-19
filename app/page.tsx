import React from 'react';

const Home = async () => {
    const posts = [
        { title: 'First Post', slug: 'first-post' },
        { title: 'Second Post', slug: 'second-post' },
    ];

    return (
        <div>
            <h1>Welcome to My Blog</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <a href={`/posts/${post.slug}`}>{post.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;