import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';
import {AppProvider} from './hooks';

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
