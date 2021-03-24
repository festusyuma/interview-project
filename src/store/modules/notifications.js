const state = {
    notifications: [
        {
            notifications: "",
            type: "like",
            img: "",
            time: "",
        },
        {
            notifications: "",
            type: "like",
            img: "",
            time: "",
        },
        {
            notifications: "",
            type: "comment",
            img: "",
            time: "",
        },
    ]
}

const getters = {
    allNotifications: (state) => state.notifications
}

const actions = {}
const mutations = {}


export default {
    state, getters, actions, mutations
}