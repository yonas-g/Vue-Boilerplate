/**
 * State -> store data
 * Getters -> return data to the components from the store
 * Actions -> fetch data from api and invoke mutaretions to store data
 * Mutations -> contains methods that change the state. they are triggered by actions
 */

const state = {
    todos: []
}

const getters = {

    /**
     * getter example
     *  Prodvide data to the component from the store /state
     */

    allTodos: state => state.todos
}

const actions = {

    /**
     * action example
     * 
     * todo fetching will happen here either using axios or fetch api
     * commit is used to trigger mutations
     * commit('mutation name', data)
     * @param {commit} param0 
     */

    async fetchTodos({ commit }) {
        // commit('setTodos', /**response data will be sent here*/) 
    },
}

const mutations = {

    /**
     * mutation example
     * changes state's according to action data received
     * @param {state} param0
     * @param {todo} param1
     */

    setTodos: (state, todos) => (state.todos = todos),
}

export default {
    state,
    getters,
    actions,
    mutations
}
