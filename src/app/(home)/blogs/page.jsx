import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

const page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-center font-semibold">All Posts </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
        {data.map((item) => (
          
          <Link href={`/blogs/${item.id}`} key={item.id} >
            <Card className="">
              <CardHeader>
                <CardTitle className="h-14">{item.title}</CardTitle>
                <CardDescription className="overflow-y-scroll">
                  {item.body}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
