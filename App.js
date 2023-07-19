
let input = document.querySelector(".todoInput");
let btn = document.querySelector(".btn");
let form = document.querySelector(".form");
let ul = document.querySelector(".ul");
let ulComp = document.querySelector(".ulComp")
let hr = document.querySelector(".hr");
let titleComp = document.querySelector(".titleComp");



// let radioBtn = document.querySelector(".inputRadio")

form?.addEventListener("submit",formFunc);

function formFunc(e){
    e.preventDefault()
}

btn.addEventListener("click",btnFunc);


function btnFunc(){

    if (input.value === "") {
        alert("TodoList bosdur")
    }else{

        let li = document.createElement("li");
        let textLeft = document.createElement("div");
        let inptRadio = document.createElement("input");
        let textP = document.createElement("p");
        let icon = document.createElement("i");
    
        inptRadio.setAttribute("type","radio");
        inptRadio.setAttribute("name","imgsel");
        textP.innerHTML = input.value
    
        li.className = "addTexts";
        textLeft.className = "textLeft";
        inptRadio.className = "inputRadio";
        icon.className = "icon fa-solid fa-trash";
    
        ul.prepend(li);
        li.appendChild(textLeft);
        textLeft.appendChild(inptRadio);
        textLeft.appendChild(textP);
        li.appendChild(icon);

    
        input.value = "";
     

        // complated codes
    
        inptRadio.addEventListener("click",radioBtn);
    
        let textComplated = document.createElement("li");
        let textLeftComp = document.createElement("div");
        let inptRadioComp = document.createElement("input");
        let textComp = document.createElement("p");
        let iconComp = document.createElement("i");
    
    
        textComplated.className = "textComplated";
        textComp.className = "textComp";
        textLeftComp.className = "textLeft";
        inptRadioComp.className = "inputRadio";
        iconComp.className = "icon fa-solid fa-trash";
    
        inptRadioComp.setAttribute("type","radio");
        inptRadioComp.setAttribute("checked","checked");

        let child = ulComp.children

    
        icon.addEventListener("click",()=>{
            li.remove()
            textComplated.remove()

            if (child.length === 0) {
                titleComp.setAttribute("class","titleComp");
                hr.setAttribute("style","display:none");
            }
        })



        function radioBtn(){
            ulComp.prepend(textComplated);
            textComplated.appendChild(textLeftComp);
            textLeftComp.appendChild(inptRadioComp);
            textLeftComp.appendChild(textComp);
            textComplated.appendChild(iconComp);
    
            textComp.innerHTML = textP.textContent;
            hr.setAttribute("style","display:block")
            titleComp.setAttribute("class","titleCompShow")
            let child = ulComp.children
            console.log(child);
        }
        iconComp.addEventListener("click",()=>{
            textComplated.remove();
            // let getAtt = textComplated.getAttribute("class")
            // console.log(getAtt);
            if(child.length === 0){
                hr.setAttribute("style","display:none");
                titleComp.setAttribute("class","titleComp");
 
            }
        })
    

    }



}
