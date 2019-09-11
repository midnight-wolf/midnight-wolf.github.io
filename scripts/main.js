function change(){
	let listCollection=Array.from(document.querySelectorAll("li"));
	let boxCollection=Array.from(document.querySelectorAll("#check"));
	let linkCollection=Array.from(document.querySelectorAll("a"));
	for(let index=0;index < listCollection.length;index++){
		listCollection[index].addEventListener("change",() =>{
			if(boxCollection[index].checked){
				listCollection[index].style.textDecoration="line-through";
				boxCollection[index].setAttribute("checked","checked");
			}
			else{
				listCollection[index].style.textDecoration="";
				boxCollection[index].removeAttribute("checked");
			}
			localStorage.todo=ul.innerHTML;
		});
		linkCollection[index].addEventListener("click",event =>{
			if(event.button == 0){
				listCollection[index].remove();
			}
			localStorage.todo=ul.innerHTML;
		});
	}
}
let ul=document.querySelector("#todo");
ul.innerHTML=localStorage.todo;
if(ul.textContent == "undefined"){
	ul.textContent="";
}
let form=document.querySelector("#data");
form.addEventListener("submit",event =>{
	event.preventDefault();
	let button=document.querySelector("#todo-data");
	let data=button.value;
	let list=document.createElement("li");
	let box=document.createElement("input");
	box.setAttribute("type","checkbox");
	box.setAttribute("id","check");
	let text=document.createTextNode(data);
	let link=document.createElement("a");
	let x=document.createTextNode("x");
	let line=document.createElement("hr");
	link.appendChild(x);
	list.appendChild(box);
	list.appendChild(text);
	list.appendChild(link);
	list.appendChild(line);
	if(data){
		ul.appendChild(list);
	}
	localStorage.todo=ul.innerHTML;
	button.value="";
	change();
});
change();
