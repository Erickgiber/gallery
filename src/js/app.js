import Preloader from './preloader.js'
import Header from './views/header.js'
import Searcher from './views/searcher.js'
import Dashboard from './views/dashboard.js'
import Footer from './views/footer.js'

const App = ({title}) => {
    return(`
        ${Preloader()}
        ${Header({title})}
        ${Searcher()}
        ${Dashboard()}
        ${Footer()}
    `)
}

const HTML = App({
    title: "Gallery"
})

// Agregando Todo el contenido al Body
$('#app').innerHTML = HTML