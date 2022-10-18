//tells the editor and vite that this file deals with react and JSX
import React from 'react'

type NewsArticleProps = {
  title: string
  body: string
}
//this could also be written on line 14 like this 
//export function NewsArticle(props: { title: string; body: string })



//export is so we can use this outside of this file 
//props is an object that has the same properties in the component (the HTML that is JSX)
export function NewsArticle(props: NewsArticleProps){
//must return JSX 
  return(
  <article className="intro-article">
  <h2 className="article-title">{props.title}</h2>
  <p>
    {props.body}
  </p>
  <a className="read-more" href="#here">
    read more about {props.title}
  </a>
</article>
)
}
//ask jason about auto save and how to change it to when I save a prettier format 