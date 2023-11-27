import { defineStore } from "pinia"
import calcUrl from '../assets/images/Calculator.png'
import shazamUrl from '../assets/images/ShazamWorldMap.png'
export const useProjects = defineStore('useProjects', {
    state: () => ({
        projects: [{
            name: 'Calculator', href: './Calculator/calculator.html', img: calcUrl, alt: "Une interface minimaliste représentant une calculatrice"
        },
        {
            name: 'MyTopTracks', href: './MyTopTracks/MTT.html', img: shazamUrl, alt: "Une carte du monde sur laquelle se surimpose mes top tracks sur Deezer"
        }
        ]
    }),
    getters: {
        getAll: (state) => state.projects
    }
})