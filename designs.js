//Declearing variables
let gridHeight, gridWidth;
const table = document.querySelector('#pixelCanvas');
const colorPicker = document.querySelector('#colorPicker');


//draw the grid when size of grid is submitted by user
const sizePicker = document.querySelector('#sizePicker');
sizePicker.addEventListener('submit',function (event){
    event.preventDefault();
    makeGrid();
});


function makeGrid() {
    //crearing the previous table
    table.innerHTML = '';


    gridHeight = document.querySelector('#inputHeight').value;
    gridWidth  = document.querySelector('#inputWidth').value;


    for(var i=1;i<=gridHeight;i++){

        //creating table row element
        const row =  document.createElement('tr');

        for(var j=1; j<=gridWidth;j++){

            //create table column element
            const column = document.createElement('td');

            //appending column into row
            row.appendChild(column);

            //changing the box coler in table
            column.addEventListener('click',function (event){
                column.style.backgroundColor = colorPicker.value;
            });

            //on double click making box color none
            column.addEventListener('dblclick',function(event){
                column.style.backgroundColor = '';
            })
        }

        table.appendChild(row);

    }
}
