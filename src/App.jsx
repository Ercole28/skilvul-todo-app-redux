import TodoApp from "./components/TodoApp";

export default function App() {
  return (
    <div className="w-full h-screen max-w-xl flex flex-col items-center mx-auto py-10">
      <h1 className="font-bold text-3xl text-white mb-5">
        <span className="text-amber-400">What&apos;s</span> the plan for <span className="text-sky-400">Today 👋</span> 
      </h1>
      <TodoApp/>
    </div>
  );
}
