import { useState } from "react";
import BookFrom from "./components/BookFrom";
import BookList from "./components/BookList";

const App = () => {
  const [bookToEdit, setBookToEdit] = useState(null);
  const handleEdit = (book) => {
    setBookToEdit(book);
  };

  return (
    <div className="bg-slate-900 min-h-screen flex flex-col items-center justify-center text-white">
      <BookFrom bookToEdit={bookToEdit} />
      <BookList onHandleEdit={handleEdit} />
    </div>
  );
};

export default App;
