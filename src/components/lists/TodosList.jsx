import PropTypes from 'prop-types';
import Todo from '../molecules/Todo';

export default function TodosList({todosData}) {
  const todos = todosData;

  return (
    <div className="w-full">
      {todos.length !== 0 ? (
        todos.map((item) => (
          <Todo key={item.id} {...item}/>
        ))
      ) : (
        <div className="animate-bounce mt-14">
          <p className="text-lg text-center text-white">
            There is no result with your request 😭
          </p>
        </div>
      )}
    </div>
  );
}

TodosList.propTypes = {
  todosData: PropTypes.array,
}


