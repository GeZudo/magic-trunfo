import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import FilterForm from './components/FilterForm';
import './App.css';

const initialState = {
  cardName: '',
  cardDescription: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
  filterName: '',
  filterRare: 'todas',
  filterTrunfo: false,
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ...initialState,
      hasTrunfo: false,
      deck: [],
      onInputChange: this.handleChange,
      onSaveButtonClick: this.handleSave,
    };
  }

  handleDelete = (name, trunfo) => {
    const { deck } = this.state;
    this.setState((anterior) => ({
      deck: deck.filter((carta) => carta.cardName !== name),
      hasTrunfo: trunfo ? false : anterior.hasTrunfo,
    }));
  }

  handleSave = () => {
    const { hasTrunfo, deck, ...estado } = this.state;
    this.setState((anterior) => ({
      deck: [...anterior.deck, estado],
      hasTrunfo: estado.cardTrunfo ? true : hasTrunfo,
      ...initialState,
    }));
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.handleButon);
  }

  handleButon = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    } = this.state;
    const num = this.verificaNumber();
    let strng = false;
    if (cardName && cardDescription && cardImage && cardRare) strng = true;
    if (num && strng) {
      this.setState({ isSaveButtonDisabled: false });
    } else this.setState({ isSaveButtonDisabled: true });
  }

  verificaNumber = () => {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const attr1 = Number(cardAttr1);
    const attr2 = Number(cardAttr2);
    const attr3 = Number(cardAttr3);
    const maxAttr = 90;
    const maxSum = 210;
    let liberado = true;

    if (attr1 + attr2 + attr3 > maxSum) liberado = false;
    if (attr1 > maxAttr) liberado = false;
    if (attr2 > maxAttr) liberado = false;
    if (attr3 > maxAttr) liberado = false;
    if (attr1 < 0) liberado = false;
    if (attr2 < 0) liberado = false;
    if (attr3 < 0) liberado = false;
    return liberado;
  }

  filterCards = () => {
    const {
      filterName,
      filterRare,
      filterTrunfo,
      deck,
    } = this.state;

    if (filterTrunfo !== false) {
      return deck.filter((carta) => carta.cardTrunfo === true);
    }
    if (filterName !== '') {
      return deck.filter((carta) => carta.cardName.includes(filterName));
    }
    if (filterRare !== 'todas') {
      return deck.filter((carta) => carta.cardRare === filterRare);
    }
    return deck;
  }

  render() {
    return (
      <div>
        <header><h1> MagicTrunfo </h1></header>
        <div className="inputPreviewContainer">
          <div className="inputContainer">
            <h2>Adicionar nova  carta</h2>
            <Form { ...this.state } />
          </div>
          <div className="previewContainer">
            <Card { ...this.state } />
          </div>
        </div>
        <h2 className="header2">Seu Deck</h2>
        <div className="filtro">
          <FilterForm { ...this.state } />
          <div className="deckSalvo">
            {this.filterCards().map((carta) => (
              <div key={ carta.cardName } className="cartinha1">
                <div className="cartinha2">
                  <Card key={ carta.cardName } { ...carta } />
                </div>
                <button
                  data-testid="delete-button"
                  type="button"
                  onClick={ () => this.handleDelete(carta.cardName, carta.cardTrunfo) }
                >
                  Excluir
                </button>
              </div>))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
