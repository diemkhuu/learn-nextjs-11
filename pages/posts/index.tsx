import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import * as React from "react";

interface IPostPayload {
  title: string;
  author: string;
  description: string;
  createAt: string;
  updateAt: string;
  imageUrl: string;
  id: string;
}

interface IPost {
  title: string;
  id: string;
}

interface PostListPageProps {
  posts: IPost[];
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (context: GetStaticPropsContext) => {
  // server side
  // build time
  const response = await fetch("https://6580118d6ae0629a3f544205.mockapi.io/v1/posts?page=1&limit=10");
  const data = await response.json();
  // console.log({ data });
  const posts = data.map((p: IPostPayload) => ({ title: p.title, id: p.id }));

  return {
    props: {
      posts,
    },
  };
};

export default function PostList(props: PostListPageProps) {
  const { posts } = props;
  return (
    <>
      <h1>POST LIST</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
