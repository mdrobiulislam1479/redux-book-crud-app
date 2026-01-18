import BookList from "./components/BookList";

const App = () => {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-2xl mb-5">List Of Books:</h1>
      <BookList />
    </div>
  );
};

export default App;
