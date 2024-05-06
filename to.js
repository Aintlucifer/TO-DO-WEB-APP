const taskcontainer=document.getElementById("task-container");

function add()
{
    const in1=document.getElementById("taskInput");
    const taskcontainer=document.getElementById("task-container");
    if(taskcontainer){
        var taskelement=document.createElement("div");
        taskelement.textContent=in1.value;
        taskelement.style.borderRadius='100px';
        taskelement.style.height='50px';
        taskelement.style.marginTop='10px';
        taskelement.style.fontSize='40px';
        taskelement.style.border='8px solid violet';
        taskelement.style.display='flex';
        taskelement.style.alignItems='center';
        taskelement.style.justifyContent='center';
        taskelement.style.marginRight='300px';
        taskelement.style.marginLeft='300px';
        taskcontainer.appendChild(taskelement);
        in1.value="";
        // console.log(taskcontainer);
    }
}
function del()
{
    const taskcontainer=document.getElementById("task-container");
    const first = taskcontainer.firstChild;
    if(first)
    {
        taskcontainer.removeChild(first);
    }
    console.log(taskcontainer);
}
function edit()
{
    const taskcontainer=document.getElementById("task-container");
    const in2=prompt("write the new task");
    const first = taskcontainer.firstChild;
    if(first&&in2.textContent!="")
    {
        first.textContent=in2;
    }
    else
    {
        console.log("please input correctly");
    }
}
const addButton = document.getElementById('ADD');
addButton.onclick=add;
const delButton = document.getElementById('DEL');
delButton.onclick=del;
const editButton = document.getElementById('EDIT');
editButton.onclick=edit;
