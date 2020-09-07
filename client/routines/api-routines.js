const create = async (params, credentials, post) => {
    try {
      let response = await fetch('/api/routines/new/'+ params.userId, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        },
        body: post
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }
  
  const listByUser = async (params, credentials) => {
    try {
      let response = await fetch('/api/routines/by/'+ params.userId, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        }
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }
  
  const listRoutines = async (params, credentials, signal) => {
    try {
      let response = await fetch('/api/routines/list/'+ params.userId, {
        method: 'GET',
        signal: signal,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        }
      })    
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }
  
  const remove = async (params, credentials) => {
    try {
      let response = await fetch('/api/routines/' + params.routineId, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        }
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }

  export {
    listRoutines,
    listByUser,
    create,
    remove
  }
  