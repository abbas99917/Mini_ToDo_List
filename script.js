
    let data = document.getElementById("inputData");
    let btn = document.getElementById("addText");
    let ul = document.querySelector(".list");

let items = JSON.parse(localStorage.getItem("todolist" || []));

function displaList(){
    ul.innerHTML = "";
    items.forEach((item, index )=>{
        let li = document.createElement("li");
        li.innerText = item;
        let delbtn = document.createElement("button");
        delbtn.innerText = "Delete";
        delbtn.addEventListener("click",()=>{
            items.splice(index, 1);
            localStorage.setItem("todolist",JSON.stringify(items));
            displaList();
        });
        ul.appendChild(li);
        li.appendChild(delbtn);
    });
};
displaList();

btn.addEventListener("click", ()=>{
    if(data.value.trim()=== "") return;
    items.push(data.value);
    localStorage.setItem("todolist",JSON.stringify(items));
    displaList();
    data.value = "";
})
    // btn.addEventListener("click",()=>{
    //     if(data.value.trim() === "")return;
    //     let li = document.createElement("li");
    //     li.innerText = data.value;
    //     let delbtn = document.createElement("button");
    //     delbtn.innerText = "Delete";
    //     ul.appendChild(li);
    //     li.appendChild(delbtn);
    //     delbtn.addEventListener("click",()=>{
    //         ul.removeChild(li);
    //     })
    //     data.value = "";
    // });