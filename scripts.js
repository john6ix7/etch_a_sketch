let color = "black";

function populateBoard(size) {
    const container = document.querySelector('#squares-container');
    let board = container.querySelectorAll('div');
    board.forEach(div=> div.remove());
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let amount = size * size;;
    for (let i = 0; i < amount; i ++) {
        const squares = document.createElement('div');
        squares.style.backgroundColor = "white";
        squares.addEventListener('mouseover', changeBackground)
        container.appendChild(squares)
    }

}

populateBoard(16);

function changeSize(input) {
    if(input >= 2 && input <= 100){
        populateBoard(input);
    } else {
        alert("Too many squares")
    }
} 

function changeBackground() {  
    if(color == 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}

function changeColor(choice) {
    color = choice;
}

function resetBoard(){
    const container = document.querySelector('#squares-container');
    let board = container.querySelectorAll('div');
    board.forEach(div=> div.style.backgroundColor = 'white');
}


/*document.querySelectorAll('#item').forEach(function(item) {
    item.addEventListener('mouseover', function() {
        changeBackground();
    })
  }) /*

/*container.addEventListener('mouseout', () =>{
    backToNormal()
}) */


/*.addEventListener('mouseover', () => {
    
}) */