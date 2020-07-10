import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Card, {CardContent, CardMedia} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import gymImg from './../assets/images/gym.jpg'
import {Link} from 'react-router-dom'

const styles = theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing.unit * 5
    },
    title: {
        padding:`${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px 
        ${theme.spacing.unit * 2}px`,
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
                    <Link to="/users">Users</Link>
                    <Link to="/signup">Signup</Link>

                    <Typography type="headline" component="h2" className=
                    {classes.title}>
                    Home Page
                    </Typography>
                    <CardMedia className={classes.media} image={gymImg} 
                    title="Gym Routine Maker"/>
                    <CardContent>
                    <Typography type="body1" component="p">
                        Welcome to the Mern Skeleton home page
                    </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
  }
  
Home.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)