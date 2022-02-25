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

    const click_image = (e) => {
        e.target.remove()
    }
    
    for (let i = 10; i < 18; i++) {
        const img = document.createElement('img')
        const div = document.createElement('div')
        const bar_options = document.createElement('div')

        // div.setAttribute('onclick', 'click_image(this)')
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

// Bar Options HTML
const options_of_bar = () => {
    return(`
        ${Icons.star}
        ${Icons.heart}
        ${Icons.download}
    `)
}

const click_image = () => {
    const images = $All('.images_content img')
    images.forEach((image) => {
        image.addEventListener('click', (e) => {
            // Constants
            const content = e.path[1]
            const content_exported = content.innerHTML
            const div = document.createElement('div')
            const ghost = document.createElement('div')
            // Div class
            div.classList.add('images_content','image_clicked')
            ghost.classList.add('ghost')
            ghost.onclick = (e) => {
                e.target.remove()
                div.classList.remove('image_clicked_animation')
            setTimeout(() => {
                    div.remove()
                }, 300);
            }

            // Animation to open
            setTimeout(() => {
                div.classList.add('image_clicked_animation')
            }, 1)

            // Add to App
            div.innerHTML = content_exported
            $('#app').append(div, ghost)
        })
    })
}


// Events Listener
window.addEventListener('load', load_images)
window.addEventListener('load', click_image)