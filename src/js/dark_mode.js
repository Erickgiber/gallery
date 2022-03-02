const d= document;
export default function darkMode(){
  
    const logo= document.querySelector(".logo")
   
  const btn = `<div class="container_btn_background"> <img  class="btn_background" src="/src/assets/moon.png" /> </div>`
  console.log(d.querySelectorAll("[data-dark]"))

  d.addEventListener("click", (e)=>{
    
    if(e.target.matches(".btn_background")){
      d.querySelectorAll("[data-dark]").forEach((el)=>{
        el.classList.toggle("changeMode")
        d.querySelector(".btn_background").setAttribute("src","/src/assets/sun.png")
      })
      if(!(d.querySelector("body").matches(".changeMode"))){
        d.querySelector(".btn_background").setAttribute("src","/src/assets/moon.png")
        d.querySelector("header").style.borderBotomRadius="1px solid black"
      }
      
      
      
    }
  })
  logo.insertAdjacentHTML("afterend",btn)
}
