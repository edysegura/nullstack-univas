import Nullstack from 'nullstack';

class TodoForm extends Nullstack {
  description = '';

  static async createTask({ database, newItem }) {
    await database.collection('todos').insertOne(newItem);
  }

  async addTodo({ todos }) {
    const newItem = {
      description: this.description,
      done: false
    }

    await this.createTask({ newItem })
    todos.push(newItem);

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
