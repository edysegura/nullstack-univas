import Nullstack from 'nullstack';

class TodoList extends Nullstack {

  prepare(context) {
    context.todos = [
      { description: 'Task 1' },
      { description: 'Task 2' },
      { description: 'Task 3' },
    ]
  }

  render({ todos }) {
    return (
      <div>
        <ul>
          {todos.map(todo => <li>{todo.description}</li>)}
        </ul>
      </div>
    )
  }

}

export default TodoList;