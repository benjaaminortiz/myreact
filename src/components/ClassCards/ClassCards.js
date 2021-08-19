import React, { Component } from 'react'
import countries from './countries.json'
import s from '../../CSS/ClassCards.module.css'
import ClassForm from '../ClassForm/ClassForm'
import ClassCard from './ClassCard';


export default class ClassCards extends Component {
    constructor() {
        super();
        this.state = {
            countries
        }
        this.handleAddCountry = this.handleAddCountry.bind(this)
    }

    handleAddCountry(country) {
        this.setState({
            countries: [...this.state.countries, country]
        })
    }

    render() {

        console.log(this.state.countries)



        return (
            <div >
                <div className={s.cont}>
                    <div className={s.header}>
                        <h1 className={s.title}>Countries</h1>
                        <h4 >
                            Add new countries to our list by filling this form!</h4>
                    </div>
                </div>
                <ClassForm onAddCountry={this.handleAddCountry} />
                <div className={s.main}></div>

                <div className="container">
                    <div className="row row-md-flex">
                        {this.state.countries.map((country, i) => {
                            var flagcode = country.alpha3Code.toLowerCase();
                            var alpha3Code = country.alpha3Code.toUpperCase();
                            return (

                                <div className="col">

                                    <ClassCard name={country.name}
                                        continent={country.continent}
                                        flagcode={flagcode}
                                        alphacode={alpha3Code} />
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        )
    }
}


