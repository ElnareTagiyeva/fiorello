var btn=document.querySelector(".btn");
var filter=document.querySelector(".part");
const box=document.querySelectorAll(".image.all");
const li=document.querySelectorAll('#menyu li');
for (let i=0 ;i<li.length;i++){
    li[i].addEventListener("click",()=>{
        for(let z=0; z<box.length;z++){
            if(box[z].classList.contains(li[i].id)){
                box[z].classList.remove(d-none)
            }
            else {
                box[z].classList.add("d-none")
            }
        }
    })
}