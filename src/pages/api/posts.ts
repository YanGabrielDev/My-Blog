// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { send } from "process";
import { Posts } from "../../firebase";

interface Post {
  id: string;
  title: string;
  post: string;
  preview: string
}
export default async function sendPosts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, method } = req;
  const id: string | undefined = body?.id;
  const data: Partial<Post> = body;

  try {
    switch (method) {
      case "GET":
        const snapshot = await Posts.get();
        const post = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        res.status(200).send(post);
        break;

      case "POST":
        const newPost = await Posts.add(data);
        res
          .status(201)
          .send({ id: newPost.id, msg: "Post enviado com sucesso!" });
        break;

      case "DELETE":
        if (!id) {
          res.status(400).send("ID não fornecido");
          return;
        }
        await Posts.doc(id).delete();
        res.status(200).send({ msg: "Post deletado com sucesso!" });
        break;

      case "PUT":
        if (!id) {
          res.status(400).send("ID não fornecido");
        }
        await Posts.doc(id).update(data);
        res.status(200).send({ msg: "Post atualizado com sucesso" });
        break;
      default:
        res.status(400).end({ msg: "Metodo não suportado!" });
    }
  } catch (error) {
    console.error(error),
      res.status(500).send("Erro ao processar a requisição!");
  }
}
