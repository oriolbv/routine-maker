import React, {useState, useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import auth from './../auth/auth-helper'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Icon from '@material-ui/core/Icon'
import RoutinesList from './RoutinesList'
import {listRoutines} from './api-routines.js'
import RoutinesCreate from './RoutinesCreate'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  card: {
    margin: 'auto',
    paddingTop: 0,
    paddingBottom: theme.spacing(3)
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle,
    fontSize: '1em'
  },
  media: {
    minHeight: 330
  }
}))
export default function Routines () {
  const classes = useStyles()
  const [routines, setRoutines] = useState([])
  const jwt = auth.isAuthenticated()

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    listRoutines({
      userId: jwt.user._id
    }, {
      t: jwt.token
    }, signal).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        setLists(data)
      }
    })
    return function cleanup(){
      abortController.abort()
    }

  }, [])

    return (
      <Card className={classes.card}>
        <Typography type="title" className={classes.title}>
          Routines
        </Typography>
        <Divider/>
        <RoutinesCreate/>
        <Divider/>
        <Link to="/new">
            <Button>New routine</Button>
          </Link>
        <RoutinesList routines={routines}/>
      </Card>
    )
}

