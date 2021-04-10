var randomPosition = 6;
var columns = 50;
var rows = 50;
var snakeBody = [];
var colorClass = 'snakeBodyColor';
var initialClass = 'grid-item';


function snake() {
    loadBoard();
    loadSnakeBody();
    snakeControl();
};

function loadBoard(){

    let gridItem = '';
    for (let i = 0; i < (columns*rows); i++) {
        gridItem += `
        <div class="grid-item" id=${i}></div>
        `
    }
    let board = `
    <div class="grid">
    ${gridItem}
    </div>
    `
    let content  = document.querySelector('.content').innerHTML += board;
}

function loadSnakeBody() {
    for (let i = 0; i < 3; i++) {
        let nodeBoard = document.querySelector(`[id='${randomPosition + i}']`);
    snakeBody.unshift(nodeBoard);
    nodeBoard.classList.add(colorClass);
    }
    
}

function snakeControl(){

    let controls = ['a', 'w', 's', 'd'];
    let nextNode = '';
    let actualId = '';

    document.addEventListener('keypress', (e) => {
        controls.forEach(key => {
            if(key === e.key) {
                switch (key) {
                    case 'd':
                        nextNode = document.querySelector(`[id='${(parseInt(snakeBody[0].id) + 1)}']`);
                        updateBoard(nextNode);
                        break;

                    case 'a':
                        nextNode = document.querySelector(`[id='${(parseInt(snakeBody[0].id) - 1)}']`);
                        updateBoard(nextNode);
                        break;

                    case 'w':
                        actualId = parseInt(snakeBody[0].id);
                        nextNode = document.querySelector(`[id='${(actualId - columns)}']`);
                        updateBoard(nextNode);
                        break;
                        
                    case 's':
                        actualId = parseInt(snakeBody[0].id);
                        nextNode = document.querySelector(`[id='${(actualId + columns)}']`);
                        updateBoard(nextNode);
                        break;

                    default:
                        //nothing
                        break;
                }
            }
        });
    });
}

function updateBoard(nextNode) {
    nextNode.className = snakeBody[0].className;
    snakeBody.unshift(nextNode);
    let lastSnakePart = snakeBody[snakeBody.length - 1];
    lastSnakePart.className = initialClass;
    snakeBody.pop();
}

export {snake};