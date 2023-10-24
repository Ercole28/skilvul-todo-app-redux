import PropTypes from 'prop-types';
import Todo from '../molecules/Todo';
import Alert from '../alerts/Alert';

export default function TodosList({todosData}) {
  const todos = todosData;

  return (
    <div className="w-full">
      {todos.length !== 0 ? (
        todos.map((item) => (
          <Todo key={item.id} {...item}/>
        ))
      ) : (
        <Alert message={'There is no result with your request 😭'}/>
      )}
    </div>
  );
}

TodosList.propTypes = {
  todosData: PropTypes.array,
}


