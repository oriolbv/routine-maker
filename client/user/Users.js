

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

}