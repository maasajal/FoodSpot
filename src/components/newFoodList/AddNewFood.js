import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const AddNewBook = (props) => {
  const titleRef = useRef("");
  const authorRef = useRef("");
  const yearRef = useRef("");
  const isbnRef = useRef("");
  const priceRef = useRef("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const book = {
      title: titleRef.current.value,
      author: authorRef.current.value,
      year: yearRef.current.value,
      isbn: isbnRef.current.value,
      price: priceRef.current.value,
    };

    props.onAddNewBook(book);

    titleRef.current.value = "";
    authorRef.current.value = "";
    yearRef.current.value = "";
    isbnRef.current.value = "";
    priceRef.current.value = "";
    navigate('/new-book');
  };

  return (
    <main>
      <form onSubmit={submitHandler} className="add-place">
        <div>
          <label htmlFor="title">Book Name: </label>
          <input
            id="title"
            ref={titleRef}
            placeholder="enter Book title"
            required
          />
        </div>{" "}
        <br />
        <div>
          <label htmlFor="author">Author Name: </label>
          <input
            id="author"
            ref={authorRef}
            placeholder="enter Author name"
            required
          />
        </div>{" "}
        <br />
        <div>
          <label htmlFor="year">Publish year: </label>
          <input
            id="year"
            ref={yearRef}
            placeholder="enter Publish year"
            required
          />
        </div>{" "}
        <br />
        <div>
          <label htmlFor="isbn">Isbn: </label>
          <input id="isbn" ref={isbnRef} placeholder="enter Isbn" required />
        </div>{" "}
        <br />
        <div>
          <label htmlFor="price">Book price: </label>
          <input
            id="price"
            ref={priceRef}
            placeholder="enter Book price"
            required
          />
        </div>{" "}
        <br />
        <button className="add-btn">
          Submit
        </button>
      </form>
    </main>
  );
};

export default AddNewBook;
