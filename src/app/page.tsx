import Link from "next/link";
import Image from "next/image"; // Import Image from next/image

// Define the Book interface
interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  image: string;
}

// Define the books array with the actual data (only 4 books)
const books: Book[] = [
  { 
    id: 1, 
    title: "The Handmaid&apos;s Tale",  // Escaped apostrophe
    author: "Margaret Atwood", 
    description: "Set in the religious patriarchy of Gilead.", 
    image: "https://prodimage.images-bn.com/pimages/9780385490818_p0_v8_s600x595.jpg" 
  },
  { 
    id: 2, 
    title: "To Kill a Mockingbird",  // Escaped apostrophe
    author: "Harper Lee", 
    description: "A story of racial injustice in the American South.", 
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg" 
  },
  { 
    id: 3, 
    title: "1984", 
    author: "George Orwell", 
    description: "A dystopian novel about the dangers of totalitarianism.", 
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg" 
  },
  { 
    id: 4, 
    title: "Pride and Prejudice", 
    author: "Jane Austen", 
    description: "A classic romance about marriage and morality.", 
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg" 
  }
];

// Book Card Component for individual books
const BookCard = ({ book }: { book: Book }) => (
  <div key={book.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
    <Image
      src={book.image}
      alt={`${book.title} Cover`}
      width={300} // Set width
      height={400} // Set height
      layout="intrinsic"  // Keeps the aspect ratio
      className="w-full h-40 object-cover rounded mb-4"
    />
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{book.title}</h3>
    <p className="text-gray-600">{book.author}</p>
    <p className="text-gray-700 text-sm mt-2">{book.description}</p>
    <Link href={`/books/${book.id}`}>
      <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition transform hover:scale-105">
        Learn More
      </button>
    </Link>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[500px] text-white" style={{ backgroundImage: "url('https://images.pexels.com/photos/13650913/pexels-photo-13650913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-70"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
          <h1 className="text-5xl font-extrabold text-yellow-200 mb-4">Welcome to the Book Haven</h1>
          <p className="text-lg text-yellow-100 mb-8">Discover the world&apos;s greatest books and embark on unforgettable journeys.</p>
          <Link href="/books">
            <button className="bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white py-3 px-6 rounded-full font-semibold transition transform hover:scale-105">Browse Collection</button>
          </Link>
        </div>
      </section>

      {/* Popular Books Section */}
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">Popular Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
}
