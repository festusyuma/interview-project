const state = {
    notifications: [
        {
            id: 1,
            notification: "Michael liked you",
            type: "like",
            img: "",
            time: "20 minutes ago",
        },
        {
            id: 2,
            notification: "Jack liked you",
            type: "like",
            img: "",
            time: "30 minutes ago",
        },
        {
            id: 3,
            notification: "Martin commented on your photo",
            type: "comment",
            img: "",
            time: "58 minutes ago",
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