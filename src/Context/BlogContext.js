import React from 'react'

const BlogContext =React.createContext();

export const BlogProvider = ({children}) =>{
    const blogPosts=[{title:'title #1'},{title:'title #2'},{title:'title #3'}]
    return (
        <BlogContext.Provider value={blogPosts}>
            {children}
        </BlogContext.Provider>
    )

}
export default BlogContext;