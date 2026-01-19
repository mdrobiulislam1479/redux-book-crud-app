import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, updateBook } from "../features/bookSlice";

const BookFrom = ({ bookToEdit }) => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
    quantity: "",
  });

  useEffect(() => {
    if (bookToEdit) {
      setBook(bookToEdit);
    }
  }, [bookToEdit]);

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookToEdit) {
      dispatch(updateBook(book));
    } else {
      dispatch(addBook({ id: nanoid(), ...book }));
    }
    setBook({
      title: "",
      author: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <div>
      <h1 className="text-2xl mb-5 text-center ">Add Books:</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleOnChange}
          className="border text-white p-3 m-3"
          placeholder="Title"
        />
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleOnChange}
          className="border text-white p-3 m-3"
          placeholder="Author"
        />
        <br />
        <input
          type="number"
          name="price"
          value={book.price}
          onChange={handleOnChange}
          className="border text-white p-3 m-3"
          placeholder="Price"
        />
        <input
          type="number"
          name="quantity"
          value={book.quantity}
          onChange={handleOnChange}
          className="border text-white p-3 m-3"
          placeholder="Quantity"
        />
        <br />
        <button type="submit" className="py-3 bg-green-500 w-full">
          {bookToEdit ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default BookFrom;
