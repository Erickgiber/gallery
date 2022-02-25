import Icon from '../icons.js'

const Searcher = () => {
    return(`
        <div class="seacher">
            <div class="title_page">
                <h3> Home </h3>
            </div>

            <form id="form_searcher">
                <input id="input_searcher" type="text" placeholder="Search" autocomplete="off" />
                <button id="searcher_icon">
                    ${Icon.searcher}
                </button>
            </form>
        </div>
    `)
}

export default Searcher

// Form Submit
const form_submit = () => {
    const form = $('#form_searcher')
    // Event
    form.addEventListener('submit', (e) => {
        e.preventDefault()
    })
}


// Events Listener
window.addEventListener('load', form_submit)