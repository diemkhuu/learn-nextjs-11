import * as React from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

interface IPostPayload {
  title: string;
  author: string;
  description: string;
  createAt: string;
  updateAt: string;
  imageUrl: string;
  id: string;
}

interface PostPageProps {
  post: IPostPayload;
}

export const getStaticPaths: GetStaticPaths = async () => {
  // server side
  // build time
  const response = await fetch("https://6580118d6ae0629a3f544205.mockapi.io/v1/posts?page=1&limit=10");
  const data = await response.json();
  // console.log({ data });
  const paths = data.map((p: IPostPayload) => ({ params: { postId: p.id } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async (context: GetStaticPropsContext) => {
  // server side
  // build time
  const postId: string | string[] | undefined = context.params?.postId;
  if (!postId) return { notFound: true };

  const response = await fetch(`https://6580118d6ae0629a3f544205.mockapi.io/v1/posts/${postId}`);
  const post = await response.json();
  // console.log({ postId });
  // const posts = data.map((p: IPostPayload) => ({ title: p.title, id: p.id }));

  return {
    props: {
      post,
    },
  };
};

export default function PostDetailPage(props: PostPageProps) {
  // const router = useRouter();
  const { post } = props;
  const createD = new Date(post.createAt).toString();
  const updateD = new Date(post.updateAt).toString();
  return (
    <>
      <h1>Detail Page</h1>
      <h2>Title: {post.title}</h2>
      <p>
        <b>Author:</b> {post.author}
      </p>
      <p>
        <b>CreateAt:</b> {createD} - <b>UpdateAt:</b> {updateD}
      </p>
      <p>
        <b>Description:</b> {post.description}
      </p>
      <img src={post.imageUrl} />
    </>
  );
}
