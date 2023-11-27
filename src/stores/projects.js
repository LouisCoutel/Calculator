import { defineStore } from "pinia"
import calcUrl from '../assets/images/Calculator.png'
import mttUrl from '../assets/images/MyTopTracks.png'
export const useProjects = defineStore('useProjects', {
    state: () => ({
        projects: [{
            name: 'Calculator', href: './Calculator/calculator.html', img: calcUrl, alt: "Une interface minimaliste représentant une calculatrice"
        },
        {
            name: 'MyTopTracks', href: './MyTopTracks/MTT.html', img: mttUrl, alt: "Une carte du monde sur laquelle se surimpose mes top tracks sur Deezer"
        }
        ]
    }),
    getters: {
        getAll: (state) => state.projects
    }
})