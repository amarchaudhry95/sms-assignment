import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
 
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class DateWidget extends Component {

  constructor (props) {
    super(props)
    this.state = {
      startDate: null//moment().toDate()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
    this.props.setDate(date);
  }

  handleSubmit(e) {    
  }

  render() {
    return (
      <div className = "container">        
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <label>{this.props.name}</label>
            <DatePicker
              selected={ this.state.startDate }
              onChange={ this.handleChange }
              name="startDate"
              dateFormat="yyyy-MM-dd"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default DateWidget;