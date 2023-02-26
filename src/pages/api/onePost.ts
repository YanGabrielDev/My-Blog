// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { send } from "process";
import { Posts } from "../../firebase";

interface Post {
  id: string;
  title: string;
  post: string;
}
export default async function onePost(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, method, query} = req;
  const id = query.id;
  const data: Partial<Post> = body;
console.log('meu id',id);

  try {
      if( method === 'POST'){
        const snapshot = await Posts.get();
        const posts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const post = posts.filter((p) => p.id === id)
        res.send(post);
      }
    }
   catch (error) {
    console.error(error),
      res.status(500).send("Erro ao processar a requisição!");
  }
}
