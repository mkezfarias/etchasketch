window.onload = function() {
    const markup = `
    <div class="container" id="container"></div> `
    document.body.innerHTML += markup
    var button = document.createElement('button');
    var input = document.createElement('input');
    var form = document.createElement('form');
    var div = document.getElementById('container');
    var div0 = document.getElementById('div0');
    div0.appendChild(form);
    form.appendChild(input);
    //form.appendChild(button);
    input.setAttribute('type','text');
    input.setAttribute('id','input');
    //input.setAttribute('oninput',update());
    input.setAttribute('type','type');
    input.addEventListener("input", update);
    function update() {
        //var input2 = document.getElementById('input');
        var x = input.value
        if (x >= 1) {
            layoutGrid(x);
            fillGrid(x);
            console.log('updated')
            }
        else { layoutGrid(100)
               fillGrid(100)
            }
            
    }

    //button.setAttribute('id','button');
    // button.setAttribute('onclick',update())    
    //button.innerHTML= 'update'
}

const layoutGrid = (x) => {
    let inputB = document.querySelector('input');
    let inputValue = inputB.value;
    const container = document.getElementById('container')
    container.style.gridTemplateColumns = `repeat(${x}, 1fr)`
    container.style.gridTemplateRows = `repeat(${x}, 1fr)`
    container.style.display = 'grid'
    container.style.height = '500px'
    container.style.width = '500px' 
    fillGrid(x);
}

const fillGrid = (x) => {
    let input = document.querySelector('input');
    let inputValue = input.value;
    let gridSize = x**2 //inputValue*inputValue
    var i; 
    for (i=0; i<=gridSize; i++) {
        var container = document.getElementById('container')
        var node = document.createElement('div');
        node.setAttribute('id', `gridbox${i}`)
        node.style.backgroundColor = `${getRandomColor()}`;
        container.appendChild(node)
      //  let gridBoxes = `<div class='grid-element' id="box${i}"
      //                        style="background-color: ;
      //                               border: 1px black solid;></div>`
      container.appendChild(node) 
    }

}
function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i<6;i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
 }






 /*
addBoxes();
createGrid();
layoutGrid();
*/