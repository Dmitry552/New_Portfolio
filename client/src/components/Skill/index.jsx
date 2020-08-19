import React, { Component } from 'react';
import './Skill.scss';
import Biography from '../Biography';
import SkillList from '../Skill_list';

class Skill extends Component {

  Comp = () => {
    var result = this.props.Nav ? false : true;
    this.props.nexComp(result);
  };

  render() {
    //var {Nav} = this.props;
    return (
      <section className="skill">
        <div className="container">
          <Biography />
          <SkillList />
        </div>
      </section>
    );
  }
}

export default Skill;