import { useSelector } from "react-redux";

const BookList = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <div>
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
                <button className="px-4 py-1 bg-red-500 rounded mr-3">
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
