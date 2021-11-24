import Nullstack from 'nullstack';

class TodoForm extends Nullstack {
  description = '';

  static async createTask({ database, newItem }) {
    await database.collection('todos').insertOne(newItem);
  }

  async addTodo({ todos }) {
    const newItem = {
      description: this.description,
      done: false,
    };

    await this.createTask({ newItem });
    todos.push(newItem);

    this.description = '';
  }

  render() {
    return (
      <form onsubmit={this.addTodo}>
        <div class="flex column">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            autocomplete="off"
            autofocus
            bind={this.description}
          />
          <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 ml-1 border border-gray-400 rounded shadow">
            ➕
          </button>
        </div>
      </form>
    );
  }
}

export default TodoForm;
