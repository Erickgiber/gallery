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
    
    for (let i = 10; i < 20; i++) {
        const img = document.createElement('img')
        const div = document.createElement('div')
        const bar_options = document.createElement('div')

        // div.setAttribute('onclick', 'click_image(this)')
        div.classList.add('images_content')
        div.setAttribute('id', i)
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
        <div favorite="true">
         ${Icons.star}
        </div>

        <div like="true">
            ${Icons.heart}
        </div>

        <div download="true">
            ${Icons.download}
        </div>
    `)
}


const click_image = () => {
    const images = $All('.images_content img')
    images.forEach((image) => {
        image.addEventListener('click', (e) => {
            // Constants
            const content = e.target.src
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
            div.innerHTML = `<img src="${content}" alt="Image" />`
            console.log(content)
            $('#app').append(div, ghost)
        })
    })
}


// Function click download
const click_download = () => {
    const images = $All('.images_content img')
    const btn_download = $All('[download="true"]')

    btn_download.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            // Constants
            const src = e.path[3].childNodes[0].src
            const id = e.path[3].getAttribute('id')
            // Download image
            download_image(src, id)
        })
    })
}

// Download image from exter server
const download_image = async (src, id) => {
    const info = document.createElement('div')

    try {
        const image = await fetch(src)
        const imageBlog = await image.blob()
        const imageURL = URL.createObjectURL(imageBlog)
        info.setAttribute('info', "start_download")
        info.innerHTML = `
        <strong">
            Your download has started.
        </strong>`

        const link = document.createElement('a')
        link.href = imageURL
        link.download = `Gallery-image`
        link.click()
    }
    catch (err) {
        console.log(err)
        info.setAttribute('info', "error_download")
        info.innerHTML = `
        <strong>
            Error downloading, please try again.
        </strong>`
    }
    $('#app').append(info)

    setTimeout(() => {
        info.classList.add('animation_info')
        setTimeout(() => {
            info.classList.remove('animation_info')
                setTimeout(() => {
                    info.remove()
                }, 300)
        }, 2500)
    }, 50)
}


// Events Listener
window.addEventListener('load', load_images)
window.addEventListener('load', click_image)
window.addEventListener('load', click_download)