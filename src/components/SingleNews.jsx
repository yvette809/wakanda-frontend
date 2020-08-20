import React from 'react'

function SingleNews({news,key}) {

    const{author,title,description, url,urlToImage,publishedAt,content} = news;
    return (
        <div>
            <h1>{author}</h1>
            
        </div>
    )
}

export default SingleNews
