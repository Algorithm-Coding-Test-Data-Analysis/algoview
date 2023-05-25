// O, X 선택
let suePlayer = '';
let sueComputer = '';

window.onload = function () {
    let oButton = document.querySelector('.sue-main-o');
    let xButton = document.querySelector('.sue-main-x');

    let sueHomeScreen = document.querySelector('#sue-home-screen');
    let sueGameScreen = document.querySelector('#sue-game-screen');

    oButton.addEventListener('click', function() {
        suePlayer = 'O';
        sueComputer = 'X';

        sueHomeScreen.style.display = 'none';
        sueGameScreen.style.display = 'block';

        sueStartGame();
    })

    xButton.addEventListener('click', function() {
        suePlayer = 'X';
        sueComputer = 'O';

        sueHomeScreen.style.display = 'none';
        sueGameScreen.style.display = 'block';

        sueStartGame();
    })
}

// 게임 화면
const sueCells = document.querySelectorAll('.sue-cell');
let sueStartCells = ["", "", "", "", "", "", "", "", ""];
let sueCurrentPlayer = "O"; // O를 선택하면 항상 게임 먼저 시작하기 
let sueRunning = false;
let sueGameEnded = false;

const sueTurn = document.querySelector('.sue-turn p');

function sueStartGame() {
    sueStartCells = ["", "", "", "", "", "", "", "", ""];
    sueCurrentPlayer = "O";
    sueRunning = true;
    sueGameEnded = false;

    sueCells.forEach(cell => {
        cell.addEventListener('click', cellClickHandler);
    });

    // 누구 차례인지 표시
    if (sueCurrentPlayer === suePlayer){
        sueTurn.innerHTML = 'Player\'s turn';
    } else if (sueCurrentPlayer === sueComputer) {
        sueTurn.innerHTML = 'Computer\'s turn';
        setTimeout(sueMakeComputerMove, 1000);
    }
    
    // 누가 O이고, 누가 X인지 점수 위에 표시
    if (!isLabelsSet) {
        playerLabelElement.innerHTML = `${playerLabelElement.innerHTML}(${suePlayer})`;
        computerLabelElement.innerHTML = `${computerLabelElement.innerHTML}(${sueComputer})`;
        isLabelsSet = true;
      }
}

const playerLabelElement = document.querySelector('.sue-player span:first-child');
const computerLabelElement = document.querySelector('.sue-computer span:first-child');
let isLabelsSet = false;

// 셀 선택시 
function cellClickHandler() {
    if (!sueRunning || sueGameEnded) return;
    //게임이 아직 진행중인지 이미 끝났는지 체크

    const cell = this;
    const index = parseInt(cell.dataset.cellIndex);

    if (sueStartCells[index] === "") {
        sueStartCells[index] = suePlayer;
        cell.textContent = suePlayer;

        const winner = sueGameWin();
        if (winner) {
          sueEndGame(winner);
          return;
        }

        sueCurrentPlayer = sueComputer; // 게임 선수 교체

        // 누구 차례인지 표시
        if (sueCurrentPlayer === suePlayer){
            sueTurn.innerHTML = 'Player\'s turn';
        } else {
            sueTurn.innerHTML = 'Computer\'s turn';
        }
        
        setTimeout(sueMakeComputerMove, 600); // 컴퓨터 차례에 자동으로 플레이하기
    }
}

// 컴퓨터 자동으로 플레이하게 하기
const sueMakeComputerMove = () => {
    if (!sueRunning || sueGameEnded) return;

    const emptyCells = Array.from(sueCells).filter(cell => cell.textContent === ""); 
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const cell = emptyCells[randomIndex];

    if (cell) {
        cell.textContent = sueComputer;
        sueStartCells[parseInt(cell.dataset.cellIndex)] = sueComputer;

        const winner = sueGameWin(); // 이긴 사람 확인하기
        if (winner) {
            sueEndGame(winner);
            return;
        }

        sueCurrentPlayer = suePlayer; // 플레이어 차례로 교체

        // 누구 차례인지 표시
          if (sueCurrentPlayer === suePlayer){
            sueTurn.innerHTML = 'Player\'s turn';
        } else {
            sueTurn.innerHTML = 'Computer\'s turn';
        }
    }
}

// 이긴 사람 확인하기
const sueGameWin = () => {
    const sueWinConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // 가로
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // 세로
        [0, 4, 8], [2, 4, 6] // 대각선
    ];

    let sueIsTie = true;

    // 게임에서 이겼을 경우
    for (const condition of sueWinConditions) {
        const [a, b, c] = condition;
        if (
            sueStartCells[a] !== "" &&
            sueStartCells[a] === sueStartCells[b] &&
            sueStartCells[a] === sueStartCells[c]
        ) {
            return sueStartCells[a]; // 이긴 플레이어 반환
        }
    }

    // 아무도 게임에서 이기지 않았을 경우
    for (const cell of sueStartCells) {
        if (cell === "") {
            sueIsTie = false;
            break;
        }
    }

    // 만약 모든 셀이 채워져 있으면 비긴 것으로 처리
    if (sueIsTie) {
        return "tie";
    }
    return ""; // 아무도 게임에서 이기지 않았을 경우
};

//게임 종료 후 처리
let suePlayerScore = 0;
let sueComputerScore = 0;
let sueTieScore = 0;

function sueEndGame(winner) {
    sueGameEnded = true;
    sueCells.forEach(cell => {
      cell.removeEventListener('click', cellClickHandler);
    });
  
    if (winner === suePlayer) {
      sueShowModal("Congrats, You won!");
      suePlayerScore++;
    } else if (winner === sueComputer) {
      sueShowModal("The computer wins.");
      sueComputerScore++;
    } else {
      sueShowModal("It's a tie!");
      sueTieScore++;
    }

    updateScoreDisplay();
  }
  
  // 게임 score 표시하기 
  function updateScoreDisplay() {
    const playerScoreElement = document.querySelector('.sue-player span:nth-child(2)');
    const tieScoreElement = document.querySelector('.sue-tie span:nth-child(2)');
    const pcScoreElement = document.querySelector('.sue-computer span:nth-child(2)');

    playerScoreElement.textContent = suePlayerScore;
    tieScoreElement.textContent = sueTieScore;
    pcScoreElement.textContent = sueComputerScore;
  }

// 게임 결과 메시지 모달 창
const sueModal = document.getElementById('sueModal');
    // 승부 결과 메시지와 함께 모달 창 띄우기
function sueShowModal(message) {
    const modalText = document.getElementById('sueModalText');

    modalText.textContent = message;
    sueModal.style.display = 'block';
}

    // 모달창 숨기기
function hideModal() {
    sueModal.style.display = 'none';
}

    // 게임 끝난 후 이 상태로 쭉 진행할 것인지, 처음부터 다시 시작할 것인지 선택하기
const sueContinueBtn = document.getElementById('sueContinueBtn');
const sueResetBtn = document.getElementById('sueResetBtn');

// continue 버튼 누를 때 
sueContinueBtn.addEventListener('click', function() {
    hideModal();

    // 게임 셀 비우기
    sueCells.forEach(cell => {
        cell.textContent = "";
    })

    //새로운 게임 시작
    sueStartGame();
})

// reset 버튼 누를 때
sueResetBtn.addEventListener('click', function() {
    hideModal();

    suePlayerScore = 0;
    sueTieScore = 0;
    sueComputerScore = 0;

    updateScoreDisplay();

    // 게임 셀 비우기
    sueCells.forEach(cell => {
        cell.textContent = "";
    })

    //새로운 게임 시작
    sueStartGame();
})

// 이전으로 돌아가서 다시 O, X 중 선택하기
const sueGoBackSideBtn = document.getElementsByClassName('.sue-go-back');

sueGoBackSideBtn.addEventListener('click', function() {
    sueHomeScreen.style.display = 'block';
    sueGameScreen.style.display = 'none';
});
