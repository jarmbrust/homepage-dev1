import React, { Component } from 'react';
import AbilityScore from './AbilityScore';
import AbilityScoreCalc from './AbilityScoreCalc';
import { Table, Button, Dropdown } from 'semantic-ui-react'
import './StatSheet.css';

class StatSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPoints: 27,
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      chr: 0
    };
    this.renderDropdown = this.renderDropdown.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.resetStats = this.resetStats.bind(this);
  }

  onClickHandler(ability, stat) {
    this.setState({ [ability]: stat.target.innerText });
  }

  getValue(ability) {
    switch(ability) {
      case 'str':
        return this.state.str;
      case 'dex':
        return this.state.dex;
      case 'con':
        return this.state.con;
      case 'int':
        return this.state.int;
      case 'wis':
        return this.state.wis;
      case 'chr':
        return this.state.chr;
      default: 
        return 0;
    }
  }

  renderDropdown(ability) {
    const values = [
      {key:'0', value:0, text:'0'},
      {key:'1', value:1, text:'1'},
      {key:'2', value:2, text:'2'},
      {key:'3', value:3, text:'3'},
      {key:'4', value:4, text:'4'},
      {key:'5', value:5, text:'5'},
      {key:'7', value:7, text:'7'},
      {key:'9', value:9, text:'9'},
    ];
    let value = this.getValue(ability).toString();
    
    return (
      <Dropdown 
        placeholder="0"
        selection
        options={values}
        onChange={(e) => this.onClickHandler(ability, e)}
        text={value}
      /> 
   );
  }

  resetStats() {
    this.setState({
      totalPoints: 27,
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      chr: 0
    });
  }

  render() {
    return ( 
      <div className="statsheet-background">
        <Table>
          <caption>A simple Dungeons and Dragons ability score point-buy calculator</caption>
          <tbody>
          <tr>
            <th scope="col">Ability</th>
            <th scope="col">Select Points</th>
            <th scope="col">Points Used</th>
            <th scope="col">Score</th>
          </tr>
          <tr>
            <td>Strength:</td>
            <td className='str'>{this.renderDropdown('str')}</td>
            <td>{this.state.str}</td>
            <td><AbilityScore score={this.state.str} /></td>
          </tr>
          <tr>
            <td>Dexterity:</td>
            <td className='dex'>{this.renderDropdown('dex')}</td>
            <td>{this.state.dex}</td>
            <td><AbilityScore score={this.state.dex} /></td>
          </tr>
          <tr>
            <td>Constitution:</td>
            <td className='con'>{this.renderDropdown('con')}</td>
            <td>{this.state.con}</td>
            <td><AbilityScore score={this.state.con} /></td>
          </tr>
          <tr>
            <td>Intelligence:</td>
            <td className='int'>{this.renderDropdown('int')}</td>
            <td>{this.state.int}</td>
            <td><AbilityScore score={this.state.int} /></td>
          </tr>
          <tr>
            <td>Wisdom:</td>
            <td className='wis'>{this.renderDropdown('wis')}</td>
            <td>{this.state.wis}</td>
            <td><AbilityScore score={this.state.wis} /></td>
          </tr>
          <tr>
            <td>Charisma:</td>
            <td className='chr'>{this.renderDropdown('chr')}</td>
            <td>{this.state.chr}</td>
            <td><AbilityScore score={this.state.chr} /></td>
          </tr>
          <tr>
            <td colSpan="3"><div className='total-points'>Total Points Remaining: <AbilityScoreCalc stats={this.state} /></div></td>
            <td><Button className='reset-button' variant="info" onClick={() => this.resetStats()}>Reset</Button></td>
          </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default StatSheet;