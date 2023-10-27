import TodoApp from "./components/TodoApp";

export default function App() {
  return (
    <div className="w-full h-screen max-w-xl flex flex-col items-center mx-auto py-10">
      <h1 className="font-bold text-3xl text-white mb-5">
        <span className="text-amber-400">Todo App</span> with <span className="text-purple-500">Redux 📝</span> 
      </h1>
      <TodoApp/>
    </div>
  );
}
