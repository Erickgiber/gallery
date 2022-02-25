const Preloader = () => {
    return(`
        <div class="preloader">
            <div class="gooey">
                <span class="dot"></span>
                    <div class="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
            </div>
        </div>
    `)
}

export default Preloader

// Remover preloader function
const remove_preloader = () => {
    setTimeout(() => {
        $('.preloader').style.cssText = `
        transform: scale(2);
        opacity: 0;
        `
        setTimeout(() => {
            $('.preloader').remove()
        }, 500)
    }, 300)
    
}


// Events Listener
window.addEventListener('load', remove_preloader)