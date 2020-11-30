import React from "react";
import { useRouter } from "next/router";

const Note = () => {
  const router = useRouter();
  const { params } = router.query;
  console.log(params);
  return <div>Note Page: {params}</div>;
};

export default Note;
