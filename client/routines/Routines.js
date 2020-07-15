import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
import {List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ArrowForward from '@material-ui/icons/ArrowForward'
import Person from '@material-ui/icons/Person'
import {Link} from 'react-router-dom'
// import {list} from './api-user.js'

const styles = theme => ({
    root: theme.mixins.gutters({
        padding: theme.spacing(1),
        margin: theme.spacing(5)
    }),
    title: {
        margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
        color: theme.palette.openTitle
    }
})

class Routines extends Component {
   

  render() {
        return (
        <Paper>
            <Typography type="title">
            All Routines
            </Typography>
                
        
        </Paper>

        
        )
    }
}


export default withStyles(styles)(Routines)
