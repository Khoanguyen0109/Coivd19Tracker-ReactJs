import React, { Component ,useState, useEffect } from 'react'
import {Cards , Chart , CountrySearch} from './component'

import  styles from './App.module.css'
import {fetchData} from './api'


class App  extends Component {

    state = {
        data : {},
        country: '',
    }
    async componentDidMount() {
        const data = await fetchData();
    
        this.setState({ data });
    }

    handleCountryChange = async (country) =>{
        const data = await fetchData(country);
        // fetch data
        
        console.log(country)
        //set state
        this.setState({data , country : country} )
    }

    render() {
        
        const  {data , country} = this.state;
        // console.log({data})

        return(
            <div className={styles.container}>
            <h1>COVID-19 TRACKER</h1>
            <Cards data={data} />
            <CountrySearch handleCountryChange={this.handleCountryChange} />
            <Chart data={data}  country={country}  /> 
          </div>
        )
    }
    
}

// const App = () =>{
//     userEffect(()=>{
        
//     })
// }
export default App