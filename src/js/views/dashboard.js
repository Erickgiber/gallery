import Icons from '../icons.js'

// Dashboard HTML Principal
const Dashboard = () => {
    return(`
        <main class="main_dashboard">
        </main>
    `)
}

// Export Default to Dashboard Function
export default Dashboard


// Function for load images
const load_images = () => {
    
    // Content Main
    const main = $('.main_dashboard')

    // Amount of Images Number
    let i_counter = 1
    let max = i_counter + 10
    
    // For at i Inner "10" Images to App
    for (let i = i_counter; i < max; i++) {
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


// Click Image function to open
const click_image = () => {
    const images = $All('.images_content img')
    images.forEach((image) => {
        image.addEventListener('click', (e) => {
            // Constants
            const content = e.target.src

            // Elements Created
            const ghost = document.createElement('div')
            const div = document.createElement('div')

            // Div class
            div.classList.add('images_content','image_clicked')
            ghost.classList.add('ghost')

            // Onclick Delet Ghost
            ghost.addEventListener('click', (e) => {
                // Remove Ghost
                e.target.remove()

                // Remove Imagen
                div.classList.remove('image_clicked_animation')
                setTimeout(() => {
                    div.remove()
                }, 300);
            })

            // Animation to open
            setTimeout(() => {
                div.classList.add('image_clicked_animation')
            }, 1)

            // HTML for "DIV CREATED"
            div.innerHTML = `<img src="${content}" alt="Image" />`

            // Add to App
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

    // Try Download Image
    try {
        // Constants
        const image = await fetch(src)
        const imageBlog = await image.blob()
        const imageURL = URL.createObjectURL(imageBlog)

        // Add Attribute to "Info Created"
        info.setAttribute('info', "start_download")

        // HTML for "Info Created"
        info.innerHTML = `
        <strong">
            Your download has started.
        </strong>`

        // Creat Link and download Image
        const link = document.createElement('a')
        link.href = imageURL
        link.download = `${id} Gallery-image`
        link.click()
    }

    // If exist any Error
    catch (err) {
        // Error to console
        console.log(err)

        // Add Attribute to "Info Created"
        info.setAttribute('info', "error_download")

        // HTML for "Info Created"
        info.innerHTML = `
        <strong>
            Error downloading, please try again.
        </strong>`
    }

    // Add to App
    $('#app').append(info)

    // Animation to View Info
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

// Touch Escape Button on Keyboard
const close_img_clicked_keyup = (e) => {
    if (e.key === "Escape") {
        if ($('.ghost')) {
            // Remover Ghost
            $('.ghost').remove()
    
            // Remover Imagen
            $('.image_clicked').classList.remove('image_clicked_animation')
            setTimeout(() => {
                $('.image_clicked').remove()
            }, 300);
        }
    }
}


// Events Listener
window.addEventListener('load', load_images)
window.addEventListener('load', click_image)
window.addEventListener('load', click_download)
window.addEventListener('keyup', close_img_clicked_keyup)