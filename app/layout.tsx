import React from 'react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <head>
                <title>My Blog</title>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
};

export default RootLayout;