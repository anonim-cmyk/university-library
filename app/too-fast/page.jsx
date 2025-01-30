import React from "react";

const page = () => {
  return (
    <main className="root-container flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-5xl font-bebas-neue font-bold text-light-100">
        Oh no, You've exceeded your rate limit!{" "}
      </h1>
      <p className="mt-20 text-center text-2xl text-light-400">
        it will reset to 20 request/minute in 00m 44s
      </p>
    </main>
  );
};

export default page;
