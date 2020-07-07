import React, {Component} from 'react'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import List from 'material-ui/List'
import {Link} from 'react-router-dom'

class Users extends Component {
    state = { users: [] }

    componentDidMount = () => {
        list().then((data) => {
            if (data.error)
                console.log(data.error)
            else
                this.setState({users: data})
        })
    }

    render() {
        const {classes} = this.props
        return (
            <Paper className={classes.root} elevation={4}>
                <Typography type="title" className={classes.title}>
                All Users
                </Typography>
                <List dense>
                    {this.state.users.map(function(item, i) {
                        return <Link to={"/user/" + item._id} key={i}>
                            <ListItem button="button">
                            <ListItemAvatar>
                                <Avatar>
                                <Person/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={item.name}/>
                            <ListItemSecondaryAction>
                                <IconButton>
                                <ArrowForward/>
                                </IconButton>
                            </ListItemSecondaryAction>
                            </ListItem>
                        </Link>
                    })}
                </List>
            </Paper>
        )
      }

}