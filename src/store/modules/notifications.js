const state = {
    notifications: [
        {
            id: 1,
            notification: "Michael liked you",
            type: "like",
            img: "https://images.squarespace-cdn.com/content/v1/526c1f5ce4b023d8f09340d7/1539361316507-2POCT3V6DR58VA9NBX6X/ke17ZwdGBToddI8pDm48kFXbnozmmgWQk9QaXD5cjJN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmLKoxsx6wp33kn5fgRqCuBamDslz0dZPrZ-HD_QIQdN_1tj0nA2po57vGaTFRnKlJ/alexandre-leduc-hochelaga-maisonneuve-portrait-professionnel-2018-election-solidaire-corporatif.jpg",
            time: "20 minutes ago",
        },
        {
            id: 2,
            notification: "Jack liked you",
            type: "like",
            img: "https://images.unsplash.com/photo-1590086782792-42dd2350140d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            time: "30 minutes ago",
        },
        {
            id: 3,
            notification: "Martin commented on your photo",
            type: "comment",
            img: "https://healthix.org/wp-content/uploads/2019/05/Todd-Rogow-High-Resolution-717x1024.jpg",
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