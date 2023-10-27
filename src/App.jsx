import TodoApp from "./components/TodoApp";

export default function App() {
  return (
    <div className="w-full sm:h-screen max-w-xl flex flex-col items-center mx-auto pt-12 pb-8 gap-y-8 px-4">
      <div className="flex flex-col gap-y-5 items-center justify-center">
        <img className="w-20 aspect-square sm:mr-8" src="/public/assets/todo-app.png" alt="To Do Illustration" />
        <h1 className="font-bold text-3xl text-white text-center">
          <span className="text-amber-400">What&apos;s</span> the plan for <span className="text-sky-400">Today 👋</span> 
        </h1>
      </div>
      <TodoApp/>
    </div>
  );
}
