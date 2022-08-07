const post = document.getElementById("post")
const input = document.getElementById("input")
const btn = document.getElementById("btn")


console.log(post,input,btn);
var list;
const localStorageKey = 'localStorageKey';
const local = localStorage.getItem(localStorageKey);
if(local === null){
    list = [];
}else {
    list = JSON.parse(local)
}


btn.addEventListener("click",addItem);

function addItem() {
    debugger
    var newItem = input.value;
    console.log(newItem);
    list.push(newItem);
    render()
    
    localStorage.setItem(localStorageKey,JSON.stringify(list));
    
    
    input.value = '';
}



function render() {
    var html = list.map((item) => {
        return `
                <li>${item}</li>
        `
    })
    post.innerHTML = html.join('')
}
render()