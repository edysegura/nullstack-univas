import Nullstack from 'nullstack';

class TodoForm extends Nullstack {
  description = '';

  addTodo({ todos }) {
    todos.push({
      description: this.description,
      done: false
    });
    this.description = '';
  }

  render() {
    return (
      <form onsubmit={this.addTodo}>
        <input required autocomplete="off" autofocus bind={this.description} />
        <button> Add task </button>
      </form>
    );
  }
}

export default TodoForm;
