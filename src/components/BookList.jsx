import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../features/bookSlice";

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div>
      <h1 className="text-2xl m-5 text-center">List Of Books:</h1>
      <table className="border border-collapse w-full">
        <thead className="border">
          <tr>
            <th className="border p-6">Id</th>
            <th className="border p-6">Title</th>
            <th className="border p-6">Author</th>
            <th className="border p-6">Quantity</th>
            <th className="border p-6">Actions</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book.id} className="border">
              <td className="border p-6">{book.id}</td>
              <td className="border p-6">{book.title}</td>
              <td className="border p-6">{book.author}</td>
              <td className="border p-6">{book.quantity}</td>
              <td className="border p-6">
                <button
                  onClick={() => handleDelete(book.id)}
                  className="px-4 py-1 bg-red-500 rounded mr-3"
                >
                  Delete
                </button>
                <button className="px-4 py-1 bg-green-500 rounded">
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
