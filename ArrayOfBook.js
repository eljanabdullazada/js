class Book {
    constructor(isbn, title, subtitle, author, published, publisher, pages, description, website) {
      this.isbn = isbn;
      this.title = title;
      this.subtitle = subtitle;
      this.author = author;
      this.published = new Date(published);
      this.publisher = publisher;
      this.pages = pages;
      this.description = description;
      this.website = website;
    }
  
    toString() {
      return `${this.title} by ${this.author}`;
    }
  }
  
  // Array of book objects
  const booksData = {
    "books": [
      {
        // Book data
      },
      // Add other books here
    ]
  };
  
  const books = booksData.books.map(book => new Book(
    book.isbn,
    book.title,
    book.subtitle,
    book.author,
    book.published,
    book.publisher,
    book.pages,
    book.description,
    book.website
  ));
  
  function sortBooks(sortCriteria) {
    const [field, order] = sortCriteria.split(' ');
    const validFields = ["isbn", "title", "author", "published"];
    const validOrders = ["ASC", "DESC"];
  
    if (!validFields.includes(field) || !validOrders.includes(order)) {
      console.log("Invalid sorting criteria. Use format: [field] [order] (e.g., 'isbn ASC')");
      return;
    }
  
    books.sort((a, b) => {
      const aValue = field === "published" ? a.published : a[field];
      const bValue = field === "published" ? b.published : b[field];
  
      if (order === "ASC") {
        return aValue > bValue ? 1 : -1;
      } else {
        return bValue > aValue ? 1 : -1;
      }
    });
  
    console.log("Books sorted by " + field + " in " + order + " order:");
    books.forEach(book => console.log(book.toString()));
  }
  
  const userSortingCriteria = prompt("Enter sorting criteria (e.g., 'isbn ASC', 'title DESC'):");
  sortBooks(userSortingCriteria);
  