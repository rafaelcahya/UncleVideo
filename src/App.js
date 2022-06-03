import './style/App.css';
import './style/Font.css';
import AdminNavigation from './admin/AdminNavigation';
import MainNavigation from './main/MainNavigation';

function App() {
  return (
    <div className="App">
      <AdminNavigation/>
      <MainNavigation/>
    </div>
  );
}

export default App;
