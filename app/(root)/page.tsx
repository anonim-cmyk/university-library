import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { Button } from "@/components/ui/button";
import React from "react";
import { sampleBooks } from "../constants";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";

const Home = async () => {
  const result = await db.select().from(users);
  console.log(result);
  return (
    <div>
      <BookOverview {...sampleBooks[0]} />

      <BookList
        title="Latest Book"
        books={sampleBooks}
        containerClassName="mt-28"
      />
    </div>
  );
};

export default Home;
