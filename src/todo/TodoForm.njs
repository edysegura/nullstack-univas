import Nullstack from 'nullstack';

class TodoForm extends Nullstack {
  render() {
    return (
      <form>
        <input require autocomplete="off" />
        <button> Add task </button>
      </form>
    );
  }
}

export default TodoForm;
