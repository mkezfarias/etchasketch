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
    input.setAttribute('type','text');
    input.setAttribute('id','input');
    input.setAttribute('type','type');
    input.addEventListener("input", update);
    function update() {
    document.getElementById('container').innerHTML = ''
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
        node.setAttribute('class', 'gridboxchild')
        node.style.backgroundColor = 'white'
        node.style.boxShadow = '0px 0px 0px 1px black inset';
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
 const buttons = document.querySelectorAll("div");
 buttons.forEach((button) => {
     button.addEventListener('click', () => {
         console.log(button);
       //  node.style.backgroundColor = `${getRandomColor()}`
        });
     });
 }
     */