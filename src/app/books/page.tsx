"use client";

import Link from "next/link";
import Image from "next/image";

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

export default function Books() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Books Header Section */}
      <section className="relative bg-cover bg-center h-[300px] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-70"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
          <h1 className="text-5xl font-extrabold text-yellow-200 mb-4">
            Books Collection
          </h1>
        </div>
      </section>

      {/* Books List Section */}
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
          All Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105"
            >
              <Image
                src={book.image}
                alt={book.title}
                width={300}
                height={450}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {book.title}
              </h3>
              <p className="text-gray-600">{book.author}</p>
              <p className="text-gray-700 text-sm mt-2">
                {book.description.slice(0, 60)}...
              </p>
              <Link href={`/books`}>
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition transform hover:scale-105">
                  Learn More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
