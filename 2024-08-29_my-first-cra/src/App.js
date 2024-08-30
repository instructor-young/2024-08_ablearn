function App() {
  const imgURL =
    "https://www.vets4pets.com/siteassets/species/dog/puppy/labrador-puppy-happy.jpg?width=1040";

  return (
    <div className="App">
      <header className="App-header">
        <h1>강아지 예뻐요</h1>
      </header>
      <img src={imgURL} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
