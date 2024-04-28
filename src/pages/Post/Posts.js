import React from "react";
import PostCard from "./PostCard";
import { gql, useQuery } from "@apollo/client";

const GET_POST = gql`
  query postData {
    posts {
      title
      content
      createdAt
      author {
        email
        name
      }
    }
  }
`;

const Posts = () => {
  const { loading, error, data } = useQuery(GET_POST);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log("graphql", data.posts);
  return (
    <div>
      <h1 className="text-center font-bold text-5xl my-4 pb-4">Posts</h1>
      <hr />
      {data?.posts.map((post) => (
        <PostCard post={post}></PostCard>
      ))}
    </div>
  );
};

export default Posts;
