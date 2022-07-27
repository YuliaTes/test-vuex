import { createStore } from 'vuex'

const store = createStore( {
  state: {
    users: [
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
  },
  actions: {
    setUsers ({state}) {
      return new Promise ((resolve, reject) => {
        const users = state.users
        if (users) {
          resolve(users)
        } else {
          reject(new Error('Error'))
        }
      })
    },
    addUser ({commit}) {
      const user =
      {
        firstName: "Elena",
        gender: "FEMALE",
        goals: null,
        height: null,
        hobbies: null,
        id: 1548216777
      }
      commit('pushUser', user)
    }
  },
  mutations: {
    pushUser (state, user) {
      state.users.push(user)
    }
  },
  getters: {
    getUsers( state ) {
      return state.users
    }
  }
} )

export default store