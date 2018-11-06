import React, {Component} from 'react'
import {connect} from 'react-redux'
import R from 'ramda'
import {Link} from 'react-router'



class Phones extends Component {
 

  render () {
    return (
      <div>Phones</div>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Phones)