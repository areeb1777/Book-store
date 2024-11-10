import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-10">
      <h2 className="text-4xl font-bold text-blue-600 mb-6">Contact Us</h2>
      <p className="text-gray-700 mb-4">We&apos;d love to hear from you! Reach out to us at:</p>
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-blue-600" />
          <p className="text-lg text-gray-800 font-semibold">contact@bookstore.com</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhone className="text-blue-600" />
          <p className="text-lg text-gray-800 font-semibold">+123 456 7890</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-blue-600" />
          <p className="text-lg text-gray-800 font-semibold">123 Book Street, Reading City</p>
        </div>
      </div>
      <form className="w-full max-w-lg mt-8 bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-gray-700 mb-4">Send Us a Message</h3>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
          <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-600" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-600" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea id="message" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-600" rows={5} placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">Send Message</button>
      </form>
    </div>
  );
}
