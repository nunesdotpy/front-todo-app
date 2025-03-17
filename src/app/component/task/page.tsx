import Link from "next/link";

export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}
interface ResponseProps {
  posts: PostProps[];
}

export default async function TaskPage() {
  const response = await fetch("http://localhost/3001/tarefas");
  const data: ResponseProps = await  response.json();

  return (
    <div>
      <h1 className="text-center mt-5 mb-2 font-bold text-3xl">Posts Page</h1>

      <ul className="flex flex-col gap-4 mx-2">
        {data.posts.map((post) => (
          <li className="bg-gray-200 p-4 rounded-md" key={post.id}>
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
            <Link
              className="text-blue-500 hover:text-blue-700 underline"
              href={`/posts/${post.id}`}
            >
              Ver mais
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
