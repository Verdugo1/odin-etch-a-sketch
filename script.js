const createSquares = (length) =>{
    let squares = {};
    let i;
    for (let c = 0; c < length**2; c++) {
        i = c+1
        let square = document.createElement(`div`);
        square.id = i
        square.classList.add(`sqr`)
        square.classList.add(`x${i}`)
        if (i <=length) {
            square.classList.add(`y${i}`)
        } 
        else {
            square.classList.add(`y${i%length}`)
        }

        squares[`sqr${i}`] = square;       
    };
    return squares;
};


const addSquares = (length) =>{
    squares = createSquares(length);
    container = document.querySelector("#container")
    for (let row = 0; row < length; row++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add(`row${row+1}`);
        for (let col = 0; col < length; col++) {
            const square = squares[`sqr${row*length+col+1}`];
            rowDiv.appendChild(square);
        }
        container.appendChild(rowDiv);
    };
    const sqrs = document.querySelectorAll('.sqr');
    sqrs.forEach(sqr => {
    sqr.addEventListener('mouseover', () => {
    sqr.classList.add('permanent');
  });
});
};

addSquares(16);
const newSize = () => {
    container = document.querySelector("#container")
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    size = parseInt(prompt("Enter the new size: "))
    addSquares(size);
}
