const container = document.getElementById('squares-container');



for (let i = 0; i < 256; i ++) {
    const squares = document.createElement('div');
    squares.setAttribute('id' ,'item2');
    container.appendChild(squares)
}

addEventListener('mouseover', changeBackground);{

}

function changeBackground() {
    
    document.getElementById('item2').style.backgroundColor = "blue";
}


function backToNormal() {
    document.getElementById('item2').style.backgroundColor = "";
}

/*.addEventListener('mouseover', () => {
    
}) */