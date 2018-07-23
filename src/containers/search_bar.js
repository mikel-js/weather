import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'


class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {city: '', country: '' }
        this.onInputChange = this.onInputChange.bind(this)
        this.onInputChanges = this.onInputChanges.bind(this)
        this.onFormSUbmit = this.onFormSUbmit.bind(this)
    }

    onInputChange(e) {
        this.setState({city: e.target.value})

    }
    onInputChanges(e) {
        this.setState({country: e.target.value})
        
    }

    onFormSUbmit(e) {
        e.preventDefault()
        if(!this.state){
            alert('error occured')
        }
        this.props.fetchWeather(this.state.city, this.state.country)
        this.setState({city: '', country:''})
        console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={this.onFormSUbmit} className='input-group'>
                <input 
                  placeholder='Search for City'
                  value={this.state.city}
                  onChange={this.onInputChange}
                  className='placehold'
                />
                <input 
                  placeholder='Enter Country Abbreviation(eg. FI)'
                  value={this.state.country}
                  onChange={this.onInputChanges}
                  className='placehold'
                />
                <span className='input-group-btn'>
                    <button type='submit' className='btn btn-secondary'>Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)

