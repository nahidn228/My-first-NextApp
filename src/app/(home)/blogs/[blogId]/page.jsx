"use client";
import ProductDetails from "@/component/ProductDetails";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const { blogId } = useParams(); 
  const [data, setData] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${blogId}`
      );
      const data = await res.json();
      setData([data]); 
    };

    if (blogId) fetchData(); 
  }, [blogId]); 

  return (
    <div>
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        data.map((item) => <ProductDetails key={item.id} item={item} />)
      )}
    </div>
  );
};

export default Page;
