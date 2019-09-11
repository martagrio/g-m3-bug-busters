import React from 'react';
import PropTypes from 'prop-types';
import CardsFormDesign from './Cards_form-design';
import CardsFormFill from './Cards_form-fill';
import CardsFormShare from './Cards_form-share';
import CardsFormTwitter from './Cards_form-twitter';

class CardsForm extends React.Component {
  render() {
    return (
      <section className="cards__section-2">
        <div className="wrapper">
          <form id="form" action="" method="POST">
            <CardsFormDesign 
					    divAction = {this.props.divAction}
              paletteValue= {this.props.paletteValue}
              RadioValue={this.props.RadioValue}
              id = {this.props.id}
            />
            <CardsFormFill 
              id = {this.props.id}
              inputAction = {this.props.inputAction}
              divAction = {this.props.divAction}
            />
            <CardsFormShare 
              id = {this.props.id}
              divAction = {this.props.divAction}
            />
          </form>
          <CardsFormTwitter />  
        </div>
      </section>
    )
  }
}

CardsForm.propTypes = {
  divAction : PropTypes.func.isRequired,
  inputAction: PropTypes.func.isRequired,
	paletteValue: PropTypes.number
}

export default CardsForm;