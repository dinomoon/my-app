import { useContext } from 'react';
import { TodoContext } from '../store/todos-context';
import TodoItem from './TodoItem';

import classes from './Todos.module.css';

const Todos: React.FC = () => {
  const todosContext = useContext(TodoContext);

  return (
    <ul className={classes.todos}>
      {todosContext.items.map((item) => (
        <TodoItem
          onRemoveTodo={todosContext.removeTodo.bind(null, item.id)}
          key={item.id}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
