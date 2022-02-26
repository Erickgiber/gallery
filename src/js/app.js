import Preloader from './preloader.js'
import Header from './views/header.js'
import Searcher from './views/searcher.js'
import Dashboard from './views/dashboard.js'
import Footer from './views/footer.js'
import List_pages from './views/list_pages.js'

const App = ({title}) => {
    return(`
        ${Preloader()}
        ${Header({title})}
        ${Searcher()}
        ${Dashboard()}
        ${Footer()}
        ${List_pages()}
    `)
}

const HTML = App({
    title: "Gallery"
})

// Agregando Todo el contenido al Body
$('#app').innerHTML = HTML