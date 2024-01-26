/* eslint-disable eqeqeq */
import { defineStore } from "pinia"
import { types } from "../itemTypes"

export const useSearchResults = defineStore("useSearchResults", {
    state: () => ({
        albums: [],
        books: [],
        movies: [],
        query: "",
        pickedType: types[0],
        pickerOpened: false,
    }),

    getters: {
        unpickedTypes: (state) => {
            return types.filter((obj) => obj != state.pickedType)
        },

        all: (state) => {
            return state.albums.concat(state.books, state.movies)
        },

        filtered(state) {
            if (state.pickedType.name == "All") {
                return this.all
            } else {
                return state[state.pickedType.name.toLowerCase() + "s"]
            }
        },
    },

    actions: {
        async find() {
            this.router.replace({ name: "load" })
            this.endSearch()

            const res = await fetch(`ext/find/${this.pickedType.name}/${this.query}`)

            this.router.replace({ name: "search" })

            const data = await res.json()

            this.albums = await data.albums
            this.movies = await data.movies
            this.books = await data.books
        },

        endSearch() {
            this.albums = []
            this.movies = []
            this.books = []
        },

        setQuery(val) {
            this.query = val
        },

        openPicker() {
            this.pickerOpened = true
        },

        closePicker() {
            this.pickerOpened = false
        },

        setType(type) {
            this.pickedType = type
            this.pickerOpened = false
        },
    },
})
