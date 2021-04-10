function loadScore() {
    let scoreBar = `
    <div class="divScoreBar">
            <span class="scoreCounter">
                score: 1234
            </span>
        </div>
    `;
    let content  = document.querySelector('.content').innerHTML += scoreBar;
}

export {loadScore};