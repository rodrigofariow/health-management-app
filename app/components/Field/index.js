import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'

const Field = styled(props => <TextField variant="outlined" {...props} />)`
  & .MuiInputBase-input {
    height: 0.9em;
  }
`

export default Field
