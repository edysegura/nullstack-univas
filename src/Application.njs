import Nullstack from 'nullstack';
import './Application.scss';
import TodoList from './todo/TodoList';

class Application extends Nullstack {

  prepare({ page, project }) {
    page.title = project.name;
    page.locale = 'en-US';
  }

  renderHead() {
    return (
      <head>
        <link
          href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap"
          rel="stylesheet" />
      </head>
    )
  }

  render() {
    return (
      <main>
        <Head />
        <TodoList />
      </main>
    )
  }

}

export default Application;