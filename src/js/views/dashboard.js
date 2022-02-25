import Icons from '../icons.js'

const Dashboard = () => {
    return(`
        <main class="main_dashboard">
        </main>
    `)
}

export default Dashboard

// Function for load images
const load_images = () => {
    const main = $('.main_dashboard')
    
    for (let i = 10; i < 18; i++) {
        const img = document.createElement('img')
        const div = document.createElement('div')
        const bar_options = document.createElement('div')

        div.classList.add('images_content')
        bar_options.classList.add('bar_options')
        img.src = `https://picsum.photos/id/${i}/720/1280`
        bar_options.innerHTML = options_of_bar()
        // Agregar al div
        div.append(img, bar_options)
        // Agregar al contenedor
        main.append(div)
    }
}

const options_of_bar = () => {
    return(`
        ${Icons.star}
        ${Icons.heart}
        ${Icons.download}
    `)
}

window.addEventListener('load', load_images)