import React, {useState, useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import auth from './../auth/auth-helper'
import RoutinesList from './RoutinesList'
import {listRoutines} from './api-routines.js'

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
        <Divider/>
        <Link to="/new">
            <Button style={isActive(history, "/new")}>New routine
            </Button>
          </Link>
        <RoutinesList routines={routines}/>
      </Card>
    )
}

