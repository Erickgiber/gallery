import Preloader from './preloader.js'
import Header from './views/header.js'
import Searcher from './views/searcher.js'
import Dashboard from './views/dashboard.js'
import Footer from './views/footer.js'
import darkMode from './dark_mode.js'

const App = ({title}) => {
    return(`
        ${Preloader()}
        ${Header({title})}
        ${Searcher()}
        ${Dashboard()}
        ${Footer()}
    `)
}
 document.addEventListener("DOMContentLoaded",(e)=>{
    darkMode()
 })
const HTML = App({
    title: "Gallery"
})

// Agregando Todo el contenido al Body
$('#app').innerHTML = HTML