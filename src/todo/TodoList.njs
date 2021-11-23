import Nullstack from 'nullstack';
import './TodoList.scss';

class TodoList extends Nullstack {

  prepare(context) {
    context.todos = [
      { description: 'Learn HTML' },
      { description: 'Learn CSS' },
      { description: 'Learn JavaScript' },
    ]
  }

  render({ todos }) {
    return (
      <div>
        <ul>
          {todos.map(todo => (
            <li>
              <label>
                <input type="checkbox" bind={todo.done} />
                {todo.description}
              </label>
            </li>
          ))}
        </ul>
      </div>
    )
  }

}

export default TodoList;