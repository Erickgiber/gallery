// Dashboard HTML Principal
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

// Export Default to Dashboard Function
export default Preloader

// Remove Preloader Function
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