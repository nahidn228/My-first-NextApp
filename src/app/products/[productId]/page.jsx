"use client";

import { useParams } from "next/navigation";

const DynamicPage = () => {
  const params = useParams();
  console.log(params.productId);
  return (
    <div>
      <h3 className="text-2xl">DynamicPage</h3>
    </div>
  );
};

export default DynamicPage;
