// export default function Home() {
//
//   return (
//     <div className="container mx-auto p-4">
//       <div>
//         <h1 className="text-xl">This is Home Page</h1>
//       </div>
//       <form></form>
//     </div>
//   );
// }
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-center font-semibold">Featured Posts </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
        {data.slice(0, 12).map((item) => (
          <Link href={"/"} key={item.id}>
            <Card>
              <CardHeader>
                <CardTitle>{item.title.slice(0, 15)}...</CardTitle>
                <CardDescription>{item.body.slice(0, 100)}...</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
      <div className="flex justify-end">
        <Link href={"/blogs"}>
          <Button>See All Posts</Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
