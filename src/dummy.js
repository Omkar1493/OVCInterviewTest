
  /*
  render() {
    const {users, error} = this.state
    if(error)
    return (<ReactTable
							data={users}
							columns={[
                                {
                                    Header: 'Details',
                                    columns: [
                                        {
                                            Header: 'name',
                                            accessor: 'name',
                                        },
                                        {
                                            Header: 'email',
                                            accessor: 'email',
                                        },
                                        {
                                            Header: 'city',
                                            accessor: 'city',
                                        },
                                        {
                                            Header: 'company',
                                            accessor: 'company',
                                        },
                                        
                                    ],
                                },
                                
                            ]}
							defaultPageSize={10}
							className="-striped -highlight"
					/>)
  }
}








class App extends Component 
{  state = {
    isLoading: true,
    users: [],
    error: null
  };

  fetchUsers() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          users: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUsers();
  }
  render() {
    const { isLoading, users, error } = this.state;
    return (
      <React.Fragment>
        <h1>Random User</h1>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          users.map(user => {
            const { username, name, email } = user;
            return (
              <div key={username}>
                <p>Name: {name}</p>
                <p>Email Address: {email}</p>
                <hr />
              </div>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </React.Fragment>
    );
  }
}



export default App;








            this.state = {
                persons: [],
                error: null
            };
        }

  ComponentDidMount()
  {
    fetch(`https://jsonplaceholder.typicode.com/users`).then(response => response.json())
      //.then(data => this.setState({ hits: data.hits, isLoading: false }))
      .then(data =>
      {
      this.setState({persons: data.persons})
      }
      ).catch(error => this.setState({error}))
  }


  render() {
    const { error, persons}= this.state
    if(error){
      return <div>{error.message}</div>
    }
    return (
      <ul>
        {persons.map(person => 
          <div>{person.name}</div>)}
    </ul>
    );
  }


}*/
