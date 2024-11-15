"use client";

import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  image: string;
}

const books: Book[] = [
  {
    id: 1,
    title: "The Handmaid&apos;s Tale",
    author: "Margaret Atwood",
    description:
      "Set in the religious patriarchy of Gilead, The Handmaid&apos;s Tale is a haunting narrative of what America could be.",
    image:
      "https://prodimage.images-bn.com/pimages/9780385490818_p0_v8_s600x595.jpg",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A story of racial injustice in the American South.",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    description: "A dystopian novel about the dangers of totalitarianism.",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A classic romance about marriage and morality.",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg",
  },
  {
    id: 5,
    title: "Moby-Dick",
    author: "Herman Melville",
    description: "Captain Ahab&apos;s obsession with Moby-Dick.",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347576219i/3209693.jpg",
  },
  {
    id: 6,
    title: "War and Peace",
    author: "Leo Tolstoy",
    description: "An epic novel about the Napoleonic Wars.",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1413215930i/656.jpg",
  },
  {
    id: 7,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description: "Holden Caulfield&apos;s story of identity and belonging.",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1398034300i/5107.jpg",
  },
  {
    id: 8,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    description: "Bilbo Baggins&apos; adventure in Middle-earth.",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546071216i/5907.jpg",
  },
];

export default function BookDetails() {
  const router = useRouter();
  const { id } = router.query;
  const book = books.find((b) => b.id === parseInt(id as string));

  if (!book) return <div>Book not found.</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Image
          src={book.image}
          alt={book.title}
          width={500}
          height={750}
          className="w-full h-96 object-cover rounded mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{book.title}</h1>
        <p className="text-xl text-gray-600 mb-4">By {book.author}</p>
        <p className="text-gray-700 mb-6">{book.description}</p>
        <Link href="/books">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
            Back to Books
          </button>
        </Link>
      </div>
    </div>
  );
}
