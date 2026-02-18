

    let data = document.getElementById("inputData");
    let btn = document.getElementById("addText");
    let ul = document.querySelector(".list");

    btn.addEventListener("click",()=>{
        let li = document.createElement("li");
        li.innerText = data.value;
        let delbtn = document.createElement("button");
        delbtn.innerText = "Delete";
        ul.appendChild(li);
        li.appendChild(delbtn);
        delbtn.addEventListener("click",()=>{
            ul.removeChild(li);
        })
        data.value = "";
    });