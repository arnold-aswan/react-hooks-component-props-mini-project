import React from "react";
import Article from "./Article";

function ArticleList(props) {
  const posts = props.posts.map((post) => {
    return (
      <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
      />
    );
  });
  return <main>{posts}</main>;
}

export default ArticleList;
