function populateBoard(size) {
    const container = document.querySelector('#squares-container');
    container.style.gridTemplateColumns = 'repeat(16, 1fr)'
    container.style.gridTemplateRows = 'repeat(16, 1fr)'

    for (let i = 0; i < 256; i ++) {
        const squares = document.createElement('div');
        squares.style.backgroundColor = "white";
        squares.style.border = '1px solid black'
        squares.addEventListener('mouseover', changeBackground)
        container.appendChild(squares)
    }

}

populateBoard(16)

function changeBackground() {  
    this.style.backgroundColor = "black";
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