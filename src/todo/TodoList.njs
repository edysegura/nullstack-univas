import Nullstack from 'nullstack';
import TodoCounter from './TodoCounter';
import TodoForm from './TodoForm';
import './TodoList.scss';

class TodoList extends Nullstack {
  static async getItems({ database }) {
    return await database.collection('todos').find({}).toArray();
  }

  async initiate(context) {
    context.todos = await this.getItems();
  }

  renderTodo({ todo }) {
    return (
      <li>
        <label>
          <input type="checkbox" bind={todo.done} />
          {todo.description}
        </label>
      </li>
    );
  }

  render({ todos }) {
    return (
      <div>
        <TodoForm />
        <ul>
          {todos.map((todo) => (
            <Todo todo={todo} />
          ))}
        </ul>
        <TodoCounter />
      </div>
    );
  }
}

export default TodoList;
