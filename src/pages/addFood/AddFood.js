import { useState, useEffect } from "react";
import AddNewBook from "../../components/newFoodList/AddNewFood";

const AddBook = () => {
  const [books, setBooks] = useState([]);
  const firebaseUrl =
    "https://food-spot-tre-default-rtdb.europe-west1.firebasedatabase.app/foods.json";
  const addBookHandler = async (book) => {
    console.log(book);
    const response = await fetch(
      { firebaseUrl },
      {
        method: "POST",
        body: JSON.stringify(book),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

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
      <section>
        <AddNewBook onAddNewBook={addBookHandler} />
      </section>
    </>
  );
};

export default AddBook;
