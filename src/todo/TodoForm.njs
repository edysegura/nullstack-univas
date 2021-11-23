import Nullstack from 'nullstack';

class TodoForm extends Nullstack {
  description = '';

  addTodo() {
    console.log('added: ', this.description);
    this.description = '';
  }

  render() {
    return (
      <form onsubmit={this.addTodo}>
        <input require autocomplete="off" autofocus bind={this.description} />
        <button> Add task </button>
      </form>
    );
  }
}

export default TodoForm;
