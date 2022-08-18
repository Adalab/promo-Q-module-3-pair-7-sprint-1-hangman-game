import { useState } from 'react';
import '../styles/App.scss';

function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [word, setWord] = useState('katakroker');
  const [lastLetter, setLastLetter] = useState('');
  const [userLetters, setUserLetters] = useState([]);

  const renderSolutionLetters = (ev) => {
    const wordLetters = word.split('');
    return wordLetters.map((wordItem, i) => {
      return <li key={i} className="letter"></li>;
    });
  };

  const handleClick = (ev) => {
    setNumberOfErrors(numberOfErrors + 1);
  };

  const forbiddenCharacters =
    /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?¿~·ªº0123456789]/;

  const handleInputLetter = (ev) => {
    if (!forbiddenCharacters.test(ev.currentTarget.value)) {
      setLastLetter(ev.currentTarget.value);
    }
    if (lastLetter !== '') {
      setUserLetters([...userLetters, lastLetter]);
    }
  };

  return (
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">{renderSolutionLetters()}</ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
            </ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              value={lastLetter}
              onChange={handleInputLetter}
            />
          </form>
        </section>

        <section className={`dummy error-${numberOfErrors}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
        <button onClick={handleClick}>Incrementar</button>
      </main>
    </div>
  );
}

export default App;
