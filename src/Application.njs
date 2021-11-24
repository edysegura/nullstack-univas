import { MongoClient } from 'mongodb';
import Nullstack from 'nullstack';
import './Application.scss';
import TodoList from './todo/TodoList';
import 'tailwindcss/dist/tailwind.css';

class Application extends Nullstack {
  static async start(context) {
    const { secrets } = context;

    const databaseClient = new MongoClient(secrets.databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await databaseClient.connect();
    const database = databaseClient.db(secrets.databaseName);

    context.database = database;
  }

  prepare({ page, project }) {
    page.title = project.name;
    page.locale = 'en-US';
  }

  renderHead() {
    return (
      <head>
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </head>
    );
  }

  render() {
    return (
      <main>
        <Head />
        <TodoList />
      </main>
    );
  }
}

export default Application;
