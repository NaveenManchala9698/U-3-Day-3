
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import SingleBook from './components/SingleBook';
import ScifiBooks from "./data/scifi.json"
import HorrorBooks from "./data/horror.json"
import FantasyBooks from "./data/fantasy.json"
import RomanceBooks from "./data/romance.json"
import HistoryBooks from "./data/history.json"
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <WarningSign variant="danger" />
      <MyBadge color="danger" text="Check Error!" />
      {/* <SingleBook book={ScifiBooks[0]} category="=Scifi" />
      <SingleBook book={HorrorBooks[0]} category="Horror" />
      <SingleBook book={FantasyBooks[0]} category="Fantasy" />
      <SingleBook book={RomanceBooks[0]} category="Romance" /> */}
      <SingleBook book={HistoryBooks[0]} category="History" />
      <BookList books={RomanceBooks} />
    </div>
  );
}

export default App;
