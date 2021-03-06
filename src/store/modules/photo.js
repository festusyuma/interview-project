function formatBody(body) {
    return body.map(r => {
        return {
            id: r.id,
            img: r.urls.thumb,
            firstName: r.user.first_name,
            location: r.user.location,
            age: r.user.total_photos
        }
    })
}

const state = {
    pictures: []
}

const getters = {
    allPictures: (state) => state.pictures
}

const actions = {
    async fetchPictures({commit}) {

        fetch('https://api.unsplash.com//photos?client_id=qslzK0CGEIhsydOuy0Zpo2uctS0lWJxQ_kHwpmpVOdc')
        .then(res => {
            res.json().then(body => {
                console.log(body)
                const pictures = formatBody(body)
                commit('setPictures', pictures)
            })
        })
        .catch(err => console.log(err))
    },

    async searchPhoto({commit}, query) {
        console.log(query)

        fetch(`https://api.unsplash.com/search/photos?query=${query}&orientation=portrait&client_id=qslzK0CGEIhsydOuy0Zpo2uctS0lWJxQ_kHwpmpVOdc`)
        .then(res => {
            res.json().then(body => {
                const pictures = formatBody(body.results)
                commit('setPictures', pictures)
            })
        })
        .catch(err => console.log(err))
    },
}

const mutations = {
    setPictures: (state, pictures) => {
        state.pictures = pictures
    }
}

export default {
    state, getters, actions, mutations
}