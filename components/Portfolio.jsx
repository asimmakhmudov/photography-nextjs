import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1 className="font-bold text-2xl">Travel Photos</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-3">
          <Image
            src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="/"
            layout="responsive"
            width="667"
            height="451"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="/"
            layout="responsive"
            width="215"
            height="217"
            className="object-cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1499002238440-d264edd596ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="/"
            layout="responsive"
            width="215"
            height="217"
            className="object-cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="/"
            layout="responsive"
            width="215"
            height="217"
            className="object-cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1500829243541-74b677fecc30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
            alt="/"
            layout="responsive"
            width="215"
            height="217"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
