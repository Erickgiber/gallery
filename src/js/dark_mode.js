const d= document;
export default function darkMode(){
  const $body = d.querySelector("body"),
    $logo= d.querySelector(".logo"),
    $btnContainer = `<div class="container_btn_background"> 
                <img  class="btn_background" src="/src/assets/moon.png" />
                 </div>`,
    $arrayDataDark= d.querySelectorAll("[data-dark]");
    $logo.insertAdjacentHTML("afterend",$btnContainer)
    const $image = d.querySelector(".btn_background");

  d.addEventListener("click", (e)=>{
    if(e.target.matches(".btn_background")){
      $arrayDataDark.forEach((el)=>{
        el.classList.toggle("changeMode")
        $image.setAttribute("src","/src/assets/sun.png")
      })
      if(!($body.matches(".changeMode")))  $image.setAttribute("src","/src/assets/moon.png")
    } 
  })    
}      
