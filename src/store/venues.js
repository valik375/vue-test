import postReviewsApiUrl from '@/helpers/apiStringHelper'

export default {
    state: {
        venues: [
            { id: '11', name: 'Kompot' },
            { id: '12', name: 'Tavernetta' }
        ],
        review: null
    },
    getters: {
        getVenues(state) {
            return state.venues
        },
        getVenuesDetails: (state) => (venuesId) => {
            return state.venues.filter(v => v.id === venuesId)[0]
        },
        getReview(state) {
            return state.review
        },
    },
    mutations: {
        addReview(state, review) {
            state.review = review
        }
    },
    actions: {
        async createReview(review) {
            try {
                await fetch(postReviewsApiUrl.postReviewsApiUrl, {
                    review: review,
                    venueId: review.venueId
                } || {})
            } catch (e) {
                console.log(e)
            }
        }
    }
}