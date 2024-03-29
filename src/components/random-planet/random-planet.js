import React, { Component } from 'react';

import SwapiService from './../../services/swapi-service';

import './random-planet.css';

export default class RandomPlanet extends Component {
  state = {
    planet: {}
  };
  swapiService = new SwapiService();

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = planet => {
    this.setState({ planet });
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 20 + 1);
    this.swapiService.getPlanet(id).then(this.onPlanetLoaded);
  }

  render() {
    const {
      planet: { id, name, population, rotationPeriod, diameter }
    } = this.state;

    return (
      <div className="random-planet jumbotron rounded">
        <img
          className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt="planet"
        />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
