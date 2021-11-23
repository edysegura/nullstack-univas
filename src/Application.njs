import Nullstack from 'nullstack';
import './Application.scss';

class Application extends Nullstack {

  prepare({ page }) {
    page.locale = 'en-US';
  }

  renderHead() {
    return (
      <head>
        <title>Edy Segura</title>
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
      </main>
    )
  }

}

export default Application;