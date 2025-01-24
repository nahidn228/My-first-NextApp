"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProductDetails = ({ item }) => {
  return (
    <div className="max-w-screen-md mx-auto min-h-screen py-10">
      <Card>
        <CardHeader>
          <CardTitle className="h-14">{item.title}</CardTitle>
          <CardDescription className="font-medium">
            <p>User Id: {item.userId}</p>
            <p>Id: {item.id}</p>
          </CardDescription>
          <CardFooter className="overflow-y-scroll">{item.body}</CardFooter>
        </CardHeader>
      </Card>
    </div>
  );
};

export default ProductDetails;
