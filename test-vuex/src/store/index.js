import { createStore } from 'vuex'

const store = createStore( {
  state() {
    return {
      users: []
    }
  },
  actions: {
    setUsers () {
      return new Promise ((resolve, reject) => {
        const users = [
          {
            firstName: "Elena",
            gender: "FEMALE",
            goals: null,
            height: null,
            hobbies: null,
            id: 1548216777
          },
          {
            firstName: "Olga",
            gender: "FEMALE",
            goals: null,
            height: null,
            hobbies: null,
            id: 1547661319
          },
          {
            firstName: "Alina",
            gender: "FEMALE",
            goals: null,
            height: null,
            hobbies: null,
            id: 1430212704
          }
        ]
        if (users) {
          resolve(users)
        } else {
          reject(new Error('Error'))
        }
      })
      // ctx.commit('changeUsers', users)
    }
  },
  mutations: {
    changeUsers (state, users) {
      state.users = users
    }
  },
  getters: {
    getUsers( state ) {
      return state.users
    }
  }
} )

export default store