import Icons from '../icons.js'

const Footer = () => {
    return(`
        <footer class="footer_mobile">
            <div id="dashboard"> ${Icons.dashboard} </div>
            <div id="favorites"> ${Icons.star} </div>
            <div id="likes"> ${Icons.heart} </div>
            <div id="settings"> ${Icons.settings} </div>
        </footer>
    `)
}

export default Footer