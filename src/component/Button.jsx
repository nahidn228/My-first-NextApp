"use client";

const Button = () => {
  return (
    <button
      onClick={() => console.log("Click")}
      className="btn p-2 border-red-300 rounded-xl bg-blue-700 text-white"
    >Click me</button>
  );
};

export default Button;
