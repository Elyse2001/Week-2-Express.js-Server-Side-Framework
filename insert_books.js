 plp_bookstore;

db.books.insertMany([
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", published_year: 1925, price: 15.99, in_stock: true, pages: 218, publisher: "Scribner" },
  { title: "1984", author: "George Orwell", genre: "Dystopian", published_year: 1949, price: 12.5, in_stock: true, pages: 328, publisher: "Secker & Warburg" },
  { title: "The Silent Patient", author: "Alex Michaelides", genre: "Thriller", published_year: 2019, price: 18.0, in_stock: true, pages: 336, publisher: "Celadon Books" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic", published_year: 1960, price: 14.0, in_stock: false, pages: 281, publisher: "J.B. Lippincott & Co." },
  { title: "Atomic Habits", author: "James Clear", genre: "Self-help", published_year: 2018, price: 20.0, in_stock: true, pages: 320, publisher: "Avery" },
  { title: "The Alchemist", author: "Paulo Coelho", genre: "Adventure", published_year: 1988, price: 16.5, in_stock: true, pages: 208, publisher: "HarperTorch" },
  { title: "Sapiens", author: "Yuval Noah Harari", genre: "History", published_year: 2011, price: 22.0, in_stock: true, pages: 443, publisher: "Harvill Secker" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", published_year: 1937, price: 18.0, in_stock: true, pages: 310, publisher: "George Allen & Unwin" },
  { title: "Educated", author: "Tara Westover", genre: "Memoir", published_year: 2018, price: 17.0, in_stock: true, pages: 334, publisher: "Random House" },
  { title: "Becoming", author: "Michelle Obama", genre: "Memoir", published_year: 2018, price: 19.0, in_stock: false, pages: 426, publisher: "Crown" }
]);
