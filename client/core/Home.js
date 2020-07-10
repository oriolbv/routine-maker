import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/styles'
import {Button, ButtonGroup} from '@material-ui/core'
import Card, {CardContent, CardMedia} from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import gymImg from './../assets/images/gym.jpg'
import {Link} from 'react-router-dom'

const styles = theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing(5)
    },
    title: {
        padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px 
        ${theme.spacing(2)}px`,
        color: theme.palette.text.secondary
    },
    media: {
        minHeight: 330
    }
}) 


class Home extends React.Component {
    render() {
        const {classes} = this.props 
        return (
            <div>
                <Card className={classes.card}>
                    <Link to="/users"><Button>Users</Button></Link>
                    <Link to="/signup"><Button>Sign up</Button></Link>
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                        
                        
                    </ButtonGroup>
                     <Typography type="headline" component="h2" className=
                    {classes.title}>
                    Home Page
                    </Typography>
                    {/* <CardMedia className={classes.media} image={gymImg} 
                    title="Gym Routine Maker"/> */}
                    
                    {/* <CardContent>
                        <Typography variant="body2" component="p">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent> */}
                </Card>
            </div>
        )
    }
  }
  
Home.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)