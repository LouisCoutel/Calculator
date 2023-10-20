import { defineStore } from "pinia"
import calcUrl from '../assets/images/Calculator.png'
import shazamUrl from '../assets/images/ShazamWorldMap.png'
export const useProjects = defineStore('useProjects', {
    state: () => ({
        projects: [{
            name: 'Calculator', href: './Calculator/calculator.html', img: calcUrl, alt: "Une interface minimaliste représentant une calculatrice"
        }, {
            name: 'ShazamWorldMap', href: './home/louis/Documents/Projets/DataViz/projet-collectif-dataviz-sonia-bastien-gilbert-louis/index.html', img: shazamUrl, alt: "Une carte du monde sur laquelle se surimpose le titre n1 des charts Shazam au Danemark"
        },
        {
            name: 'ShazamWorldMap', href: './home./louis/Documents/Projets/DataViz/projet-collectif-dataviz-sonia-bastien-gilbert-louis/index.html', img: './src/assets/images/ShazamWorldMap.png', alt: "Une carte du monde sur laquelle se surimpose le titre n1 des charts Shazam au Danemark"
        },
        {
            name: 'ShazamWorldMap', href: './home./louis/Documents/Projets/DataViz/projet-collectif-dataviz-sonia-bastien-gilbert-louis/index.html', img: './src/assets/images/ShazamWorldMap.png', alt: "Une carte du monde sur laquelle se surimpose le titre n1 des charts Shazam au Danemark"
        },
        {
            name: 'ShazamWorldMap', href: './home./louis/Documents/Projets/DataViz/projet-collectif-dataviz-sonia-bastien-gilbert-louis/index.html', img: './src/assets/images/ShazamWorldMap.png', alt: "Une carte du monde sur laquelle se surimpose le titre n1 des charts Shazam au Danemark"
        },
        {
            name: 'ShazamWorldMap', href: './home./louis/Documents/Projets/DataViz/projet-collectif-dataviz-sonia-bastien-gilbert-louis/index.html', img: './src/assets/images/ShazamWorldMap.png', alt: "Une carte du monde sur laquelle se surimpose le titre n1 des charts Shazam au Danemark"
        }]
    }),
    getters: {
        getAll: (state) => state.projects
    }
})