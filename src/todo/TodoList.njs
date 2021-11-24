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
      <li class="flex row items-center justify-between w-full py-1 px-4 my-1 rounded border bg-gray-100 text-gray-600">
        <label>
          <input type="checkbox" bind={todo.done} />
          <span class="pl-1">{todo.description}</span>
        </label>
      </li>
    );
  }

  render({ todos }) {
    return (
      <div class="container mx-auto p-5">
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
