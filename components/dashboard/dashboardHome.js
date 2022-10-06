import React from 'react'
import axios from 'axios'

export default class VehiculeUnique extends React.Component {
    componentDidMount() {
        axios.get(`https://nunesaccount.alwaysdata.net/APIDG8/getCCDetailById.php?id=${window.location.pathname.split('/')[2]}`)
          .then(res => {
            const campingcar = res.data;
            this.setState({ campingcar });
        })
    }

    state = {
        campingcar: [],
    }


    render() {
        return (
        <div>
            
        </div>
        )
    }
  }