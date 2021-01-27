import React, { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { Redirect, withRouter } from 'react-router-dom'

import { OpeningsShow, OpeningsUpdate } from '../../api/openings'

import OpeningsForm from '../OpeningsForm/OpeningsForm'

class openingsUpdate extends Component {
  constructor () {
    super()

    this.state = {
      openings: null,
      updated: false
    }
  }

  componentDidMount () {
    const { user, match, msgAlert } = this.props
    openingsShow(match.params.id, user)
      .then(res => this.setState({ openings: res.data.openings }))
      .then(() => {
        msgAlert({
          heading: 'Showing openings Successfully',
          variant: 'success',
          message: 'You can now edit the openings.'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Showing openings Failed',
          variant: 'danger',
          message: 'openings is not displayed due to error: ' + err.message
        })
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { user, match, msgAlert } = this.props
    const { openings } = this.state

    openingsUpdate(match.params.id, openings, user)
      .then(res => this.setState({ updated: true }))
      .then(() => {
        msgAlert({
          heading: 'Updated openings Successfully',
          variant: 'success',
          message: 'openings has been updated.'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Updating openings Failed',
          variant: 'danger',
          message: 'openings was not updated due to error: ' + err.message
        })
      })
  }

  // same handleChange from openingsCreate
  handleChange = event => {
    this.setState({ openings: { ...this.state.openings, [event.target.name]: event.target.value } })
  }

  render () {
    const { openings, updated } = this.state

    // if we don't have a openings yet
    if (!openings) {
      // A Spinner is just a nice loading message we get from react bootstrap
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }

    // if the openings is deleted
    if (updated) {
      // redirect to the openingss index page
      return <Redirect to={`/openingss/${this.props.match.params.id}`} />
    }

    return (
      <div>
        <h3>Edit openings</h3>
        <openingsForm
          openings={openings}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default withRouter(openingsUpdate)
