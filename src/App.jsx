import BookFrom from "./components/BookFrom";
import BookList from "./components/BookList";

const App = () => {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col items-center justify-center text-white">
      <BookFrom />
      <BookList />
    </div>
  );
};

export default App;
