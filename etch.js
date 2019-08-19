window.onload = function() {
    const markup = `
    <div class="container" id="container"></div> `
    document.body.innerHTML += markup
    //var button = document.createElement('button');
    var input = document.createElement('input');
    var div = document.getElementById('container');
    var div0 = document.getElementById('div0');
    div0.appendChild(input);
    //div0.appendChild(button);
    input.setAttribute('type','text');
    input.setAttribute('id','input');
    input.setAttribute('type','type');
    input.addEventListener("input", update);
    input.innerHTML = 'reset grid'
    //button.addEventListener("onclick", update2);
    //button.setAttribute('type', 'button');
  
    function update() {
    document.getElementById('container').innerHTML = ''
        var x = input.value
        var y
        if (x !== undefined && y === undefined) {
            layoutGrid(x);
            fillGrid(x);
            console.log('updated')
            }
        else if (x !== undefined && y === undefined) { 
            var y = prompt('create a grid: ente number of sqares per axis');
            layoutGrid(y);
            fillGrid(y);
            }        
    }
    }


function update2() {
    document.getElementById('container').innerHTML = ''
    event.preventDefault();
    var y = prompt('create a grid: ente number of sqares per axis');
    event.preventDefault();

    layoutGrid(y);
    fillGrid(y);
    }

const layoutGrid = (x) => {
    let inputB = document.querySelector('input');
    let inputValue = inputB.value;
    const container = document.getElementById('container')
    container.style.gridTemplateColumns = `repeat(${x}, 1fr)`
    container.style.gridTemplateRows = `repeat(${x}, 1fr)`
    container.style.display = 'grid'
    container.style.height = '550px'
    container.style.width = '550px' 
}

const fillGrid = (x) => {
    let input = document.querySelector('input');
    let inputValue = input.value;
    let gridSize = x*x //inputValue*inputValue
    var i; 
    var container = document.getElementById('container')
    for (i=0; i<gridSize; i++) {
        var node = document.createElement('div');
        node.setAttribute('id', `gridbox${i}`)
        node.style.backgroundColor = 'white'
        node.style.boxShadow = '0px 0px 0px 1px black inset';
        node.addEventListener("mouseover",getRandomColor)
        node.classList.add("gridBox");

        container.appendChild(node)
    }
}


function getRandomColor(e){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i<6;i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    e.target.style.backgroundColor = color;
 }




  /*
 const buttons = document.querySelectorAll("div");
 buttons.forEach((button) => {
     button.addEventListener('click', () => {
         console.log(button);
       //  node.style.backgroundColor = `${getRandomColor()}`
        });
     });
 }
     */