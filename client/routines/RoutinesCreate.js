import React, {useState, useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'



const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: '#efefef',
      padding: `${theme.spacing(3)}px 0px 1px`
    },
    card: {
      maxWidth:600,
      margin: 'auto',
      marginBottom: theme.spacing(3),
      backgroundColor: 'rgba(65, 150, 136, 0.09)',
      boxShadow: 'none'
    },
    cardContent: {
      backgroundColor: 'white',
      paddingTop: 0,
      paddingBottom: 0
    },
    cardHeader: {
      paddingTop: 8,
      paddingBottom: 8
    },
    photoButton: {
      height: 30,
      marginBottom: 5
    },
    input: {
      display: 'none',
    },
    textField: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      width: '90%'
    },
    submit: {
      margin: theme.spacing(2)
    },
    filename:{
      verticalAlign: 'super'
    }
  }))

export default function RoutinesCreate (props) {
    const classes = useStyles()
    const [values, setValues] = useState({
        name: '',
        description: '',
        error: '',
        user: {}
    })
    const jwt = auth.isAuthenticated()
    useEffect(() => {
        setValues({...values, user: auth.isAuthenticated().user})
    }, [])
    const clickRoutine = () => {
        let routineData = new FormData()
        routineData.append('name', values.name)
        routineData.append('description', values.description)
        create({
          userId: jwt.user._id
        }, {
          t: jwt.token
        }, routineData).then((data) => {
          if (data.error) {
            setValues({...values, error: data.error})
          } else {
            setValues({...values, name:'', description: ''})
            props.addUpdate(data)
          }
        })
    }
    const handleChange = name => event => {
        const value = event.target.value
        setValues({...values, [name]: value })
    }
    return (<div className={classes.root}>
        <Card className={classes.card}>
        <CardHeader
              title={values.user.name}
              className={classes.cardHeader}
            />
        <CardContent className={classes.cardContent}>
          
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained" disabled={values.name === ''} onClick={clickRoutine} className={classes.submit}>Create Routine</Button>
        </CardActions>
      </Card>
    </div>)
}