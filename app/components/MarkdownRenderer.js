// app/components/MarkdownRenderer.js
'use client'

import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm'; // GitHub Flavored Markdown (tables, task lists, etc.)
import rehypeRaw from 'rehype-raw'; // For raw HTML rendering (e.g., Mermaid diagrams)

const MarkdownRenderer = ({ content }) => {
    return (
        <div className="markdown-body">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                    // Render code blocks with syntax highlighting
                    code({ node, inline, className, children, ...props }) {
                        const language = className ? className.replace('language-', '') : '';
                        return !inline ? (
                            <SyntaxHighlighter style={solarizedlight} language={language} {...props}>
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    },
                    // Render links
                    a({ node, ...props }) {
                        return (
                            <a
                                {...props}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#0070f3', textDecoration: 'underline' }}
                            />
                        );
                    },
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
};

export default MarkdownRenderer;
