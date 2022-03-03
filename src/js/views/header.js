// IMG imported
import IMG from '../images.js'

// Header HTML Principal
const Header = ({title}) => {
    return(`
        <header class="header_mobile">
            <div class="logo">
                <img src="${IMG.logo}" alt="LOGO" />
                <strong> ${title} </strong>
            </div>

            <div class="user_btn">
                <strong id="name_header"> User </strong>
                <div class="img_header"></div>
            </div>
        </header>
    `)
}

// Export Default to Header Function
export default Header