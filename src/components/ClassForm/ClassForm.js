import React, { Component } from 'react'
import s from '../../CSS/ClassForm.module.css'
export default class ClassForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            alpha3Code: '',
            continent: '-Select a continent-'
        };
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleInput(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.onAddCountry(this.state)
        alert('Country Added!. ');
        console.log(this.state)
    }
    render() {



        return (
            <div className={s.main}>
                <div className='container'>
                    <form ref='form' className={s.form} onSubmit={this.handleSubmit} >
                        <div className='row'>
                            <div className="col-sm"><input type='text' name='name' onChange={e => this.handleInput(e)} placeholder='Add a name'></input></div>
                            <div className="col-sm"><input type='text' name='alpha3Code' onChange={e => this.handleInput(e)} placeholder='Add a code'></input></div>

                            <div className="col-sm"><select name='continent' onChange={e => this.handleInput(e)}>
                                <option>-Select a continent-</option>
                                <option>Asia</option>
                                <option>Europe</option>
                                <option>North America</option>
                                <option>Latin America</option>
                                <option>Oceania</option>
                            </select></div>
                            <div className="col-sm" ><button type="submit">ADD COUNTRY</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
