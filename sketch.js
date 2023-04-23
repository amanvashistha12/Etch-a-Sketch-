

const container = document.getElementById("container");
const pageReset = document.getElementById("reset");
pageReset.onclick = () => resetGrid();

function resetGrid(){
    pageReset.addEventListener('click', ()=>{
    container.innerHTML =" ";
    })
}

// Function to create Grids
function createGrid(rows, columns){

    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        

    for(let i = 0; i<rows*columns;i++){    
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("square-element");
         
        squareDiv.addEventListener('mouseover', function(){
        
            squareDiv.style.backgroundColor="black";
        });        

    
        container.appendChild(squareDiv);       

    }

}
//Reset


function resetGrid(){
    container.innerHTML = " ";
    createGrid(16,16);
}
resetGrid();










window.onload = function() {
 

  };


