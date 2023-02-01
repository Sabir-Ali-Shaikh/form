var btn = document.getElementById("myButton1");
let input = document.getElementById('input');
function change(){
// console.log(input.value);
if(input.value==""){
alert("Empty")
}
else{
    document.write(`<div style="text-align:center"><p>Thanks</p>
    <button id="view" onclick="hideButton()">View Name</button></div>`)
    document.getElementById('view').addEventListener('click',function(){
       document.write(input.value)
       document.querySelector('p').innerHTML=""
    })
}

    // btn.value = 'Forms submitted sucessfully';
    // btn.disabled=true
}

function hideButton(){

    document.getElementById('view').style.display= 'none';
    
 }
