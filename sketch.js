

const container = document.getElementById("container");

function createGrid(rows,columns){

    container.style.gridTemplateRows = `repeat(${rows}, minmax(0,1fr))`;
    container.style.gridTemplateColumns = `repeat(${columns}, minmax(0,1fr))`;
        

    for(let i = 0; i< rows*columns;i++){    
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        squareDiv.style.backgroundColor="red";

        container.appendChild(squareDiv);       

    }

}
createGrid(16,16);


window.onload = function() {
    createGrid();
  };


