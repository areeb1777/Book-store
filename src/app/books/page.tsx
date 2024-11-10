'use client';

import { useState } from "react";
import Image from "next/image"; // Import Image from next/image

// Define the Book type for our books
interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  image: string;
}

const books: Book[] = [
  { id: 1, title: "The Handmaid's Tale", author: "Margaret Atwood", description: "Set in the religious patriarchy of Gilead, The Handmaid's Tale is a haunting narrative of what America could be. As the threat of Gilead looms ever closer, this seems less like a dystopian novel and more like a prescient warning. Read it before you live it.", image: "https://prodimage.images-bn.com/pimages/9780385490818_p0_v8_s600x595.jpg" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", description: "A story of racial injustice in the American South.", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg" },
  { id: 3, title: "1984", author: "George Orwell", description: "A dystopian novel about the dangers of totalitarianism.", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg" },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", description: "A classic romance about marriage and morality.", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg" },
  { id: 5, title: "Moby-Dick", author: "Herman Melville", description: "Captain Ahab's obsession with Moby-Dick.", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347576219i/3209693.jpg" },
  { id: 6, title: "War and Peace", author: "Leo Tolstoy", description: "An epic novel about the Napoleonic Wars.", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1413215930i/656.jpg" },
  { id: 7, title: "The Catcher in the Rye", author: "J.D. Salinger", description: "Holden Caulfield's story of identity and belonging.", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1398034300i/5107.jpg" },
  { id: 8, title: "The Hobbit", author: "J.R.R. Tolkien", description: "Bilbo Baggins' adventure in Middle-earth.", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546071216i/5907.jpg" },
  // Add more books if needed
];

export default function Books() {
  const [visibleBooks, setVisibleBooks] = useState(4);
  
  // Define selectedBook as a state with type `Book | null`
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  // Function to show more books
  const showMoreBooks = () => setVisibleBooks((prev) => prev + 4);

  // Function to open modal
  const openModal = (book: Book) => setSelectedBook(book);

  // Function to close modal
  const closeModal = () => setSelectedBook(null);

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">Our Books Collection</h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.slice(0, visibleBooks).map((book) => (
          <div
            key={book.id}
            onClick={() => openModal(book)}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <Image
              src={book.image}
              alt={book.title}
              width={300} // Set width and height for better performance
              height={200}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="font-semibold text-xl text-gray-800 mb-1">{book.title}</h3>
            <p className="text-gray-600 mb-2">by {book.author}</p>
            <p className="text-gray-700 text-sm">{book.description.slice(0, 60)}...</p>
          </div>
        ))}
      </div>

      {visibleBooks < books.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={showMoreBooks}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Load More
          </button>
        </div>
      )}

      {/* Modal for Book Details */}
      {selectedBook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-3/4 lg:w-1/2 max-h-[80vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-800 float-right mb-2"
              aria-label="Close Modal"
            >
              &times;
            </button>
            <Image
              src={selectedBook.image}
              alt={selectedBook.title}
              width={500} // Adjust the size of the image in the modal
              height={400}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedBook.title}</h3>
            <p className="text-lg text-gray-600 mb-4">by {selectedBook.author}</p>
            <p className="text-gray-700">{selectedBook.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
