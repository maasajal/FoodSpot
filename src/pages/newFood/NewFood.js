import { useState, useEffect } from "react";
import BookList from "../../components/newFoodList/FoodList";
import "./NewFood.css";

const NewBooks = () => {
  const [books, setBooks] = useState([]);
  const firebaseUrl =
    "https://food-spot-tre-default-rtdb.europe-west1.firebasedatabase.app/foods.json";
  const fetchBooks = async () => {
    const response = await fetch({ firebaseUrl });
    const data = await response.json();

    const fetchedBook = [];

    for (const key in data) {
      fetchedBook.push({
        id: key,
        title: data[key].title,
        author: data[key].author,
        year: data[key].year,
        isbn: data[key].isbn,
        price: data[key].price,
      });
    }
    setBooks(fetchedBook);
  };

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <>
      {books.length > 0 ? (
        <section>
          <BookList books={books} />
        </section>
      ) : (
        <p className="food">
          You do not have any food item in your new food list yet!
        </p>
      )}
    </>
  );
};

export default NewBooks;
