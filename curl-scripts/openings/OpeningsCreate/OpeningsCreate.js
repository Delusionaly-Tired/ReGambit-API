import React, { Component } from 'react'

class OpeningsCreate extends Component {
  constructor (props) {
    super(props)

    // initially our openings title and director will be empty until they are filled in
    this.state = {
      openings: {
        name: '',
        type: '',
        skill:'',
        },
      // createdId will be null, until we successfully create a openingsopenings
      createdId: null
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    const { user, msgAlert } = this.props
    const { openings } = this.state

    // create a openings, pass it the openingsopenings data and the user for its token
    openingsCreate(openings, user)
      // set the createdId to the id of the openings we just created
      .then(res => this.setState({ createdId: res.data.openings._id }))
      .then(() => msgAlert({
        heading: 'Created openings Succesfully',
        message: 'openings has been created successfully. Now viewing the openings.',
        variant: 'success'
      }))
  }

  render () {
    // destructure our openings and createdId state
      const { moive, createdId } = this.state

      // if the book has been created and we sits id
      if (createdId) {
        // redirect to the openings show page
        return <Redirect to={`/openings/${createdId}`} />
      }

      return (
        <div>
          <h3>Create Opening</h3>
          <OpeningsForm
            opening={opening}
            handleChange
          />
        </div>
      )


    }
}

export default OpeningCreate
