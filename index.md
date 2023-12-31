---
layout: none
---

<style>
    .main {
        background: #272525;
    }

    .layout {
        margin-left: 100px;
        margin-bottom: 200px;
        margin-right: 100px;
        margin-top: 30px;
        width: auto;
        height: auto;
        background: #ede2dc;
    }

    .title {
        color: #ede2dc;
        font-size: 30px;
        margin-top: 30px;
        margin-left: 10px;
        font-family: "Courier New", Courier, monospace;

    }

    .sortBtn { 
        background-color: red;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 30px;
        margin-bottom: 30px;
        margin-left: 10px;
    }

    .regBtn { 
        background-color: red;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 30px;
        margin-bottom: 30px;
        margin-left: 10px;
    }

    .sortStepBtn {
        background-color: red;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 30px;
        margin-bottom: 30px;
        margin-left: 10px;
    }
    
    .dealBtn:hover {
        background-color: darkred;
    }
    

    .cardContainer { 
        border: 1px solid black;
    }

    .cardContainer img {
        width: 130px; 
        height: auto; 
        margin: 5px;
    }

    /* animation for cards */
    @keyframes bounceEffect {
        0% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
        100% { transform: translateY(0); }
    }
    
    .overlay {
        position: relative;
    }
    
    .overlay::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: rgba(234, 28, 28, 0.5);
        transition: opacity 1s ease-in-out;
        z-index: 1;
    }
    
    .overlay::after {
        opacity: 1;
    }
    
    .overlay {
        animation: fadeOut 1s forwards;
    }
    
    @keyframes fadeOut {
        0% { opacity: 1; }
        100% { opacity: 0; }
    }

    /* end of animation for cards */
    

</style>



<body class="main">
    <div class="title"> Watch how each sort method works! Click on a sort method to start:</div>
    <div class="layout">
        <div>
            <button class="sortBtn" data-sort="bubble">Bubble Sort</button>
            <button class="sortBtn" data-sort="merge">Merge Sort</button>
            <button class="sortBtn" data-sort="insertion">Insertion Sort</button>
            <button class="sortBtn" data-sort="selection">Selection Sort</button>
            <button class="regBtn" id="regBtn">Integer Sorts</button>
        </div>
        <div class="cardContainer"></div>
    </div>
</body>



<script>
    
    //on button click go to cardtest.html
    const regBtn = document.querySelector("#regBtn");
    regBtn.addEventListener("click", () => {
        window.location.href = "{{site.baseurl}}/cardtest.html";
    }); 
    
    const dealBtnClick = document.querySelector(".dealBtn");
    const cardContainer = document.querySelector(".cardContainer");
    const sortButtons = document.querySelectorAll(".sortBtn");
    const deckURL = `https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
    let deckID;

    let data = [];
    let cards = [];
    let sortType = '';
    let swapData = [];

    const cardImages = {
        1: 'https://deckofcardsapi.com/static/img/AS.png', 
        2: 'https://deckofcardsapi.com/static/img/2S.png',
        3: 'https://deckofcardsapi.com/static/img/3S.png',
        4: 'https://deckofcardsapi.com/static/img/4S.png',
        5: 'https://deckofcardsapi.com/static/img/5S.png',
        6: 'https://deckofcardsapi.com/static/img/6S.png',
        7: 'https://deckofcardsapi.com/static/img/7S.png',
        8: 'https://deckofcardsapi.com/static/img/8S.png',
        9: 'https://deckofcardsapi.com/static/img/9S.png',
        10: 'https://deckofcardsapi.com/static/img/0S.png',
        11: 'https://deckofcardsapi.com/static/img/JS.png',
        12: 'https://deckofcardsapi.com/static/img/QS.png',
        13: 'https://deckofcardsapi.com/static/img/KS.png',

    };

    let beforeSorting = [];

    function renderCards(beforeSortingArray) {
        cardContainer.innerHTML = '';
    
        beforeSortingArray.forEach(cardValue => {
            if (cardImages.hasOwnProperty(cardValue)) {
                const imageSrc = cardImages[cardValue];
                const cardImage = document.createElement('img');
                cardImage.src = imageSrc;
                cardImage.alt = `Card - ${cardValue}`;
                cardImage.classList.add('card');
            
                cardContainer.appendChild(cardImage);
            } else {
                console.error(`Card value ${cardValue} not found in cardImages.`);
            }
        });
    }

    const sortKeyMapping = {
        bubble: 'B',
        selection: 'S',
        merge: 'M',
        insertion: 'I',
    };


    function createSortStepButton() {
        const sortStepButton = document.createElement('button');
        sortStepButton.textContent = 'Sort Step';
        sortStepButton.classList.add('sortStepBtn'); 
    
        const layoutDiv = document.querySelector('.layout');
        layoutDiv.appendChild(sortStepButton);

        sortStepButton.addEventListener('click', () => {
            if (currentStep < swapData.length) {
                const swap = swapData[currentStep];
                swapCards(swap.Original, swap.Final); // - 1 to adjust to array index
                currentStep++;
            } else {
                sortStepButton.disabled = true;
                console.log('End of position swaps');
            }
          });
    }

    let currentStep = 0;

    function swapCards(originalIndex, finalIndex) {
        const cardImages = document.querySelectorAll('.cardContainer img');
        console.log(cardImages);

        const trueOgIndex = originalIndex + 1;
        let trueFIndex = finalIndex + 1;

        if (trueFIndex === 13) {
            trueFIndex --;
        };

        // swap the src attribute of the cards to visually change their positions
        console.log(trueFIndex);
        console.log(cardImages[trueFIndex]);
        console.log("");
        const tempSrc = cardImages[trueOgIndex].src;
        cardImages[trueOgIndex].src = cardImages[trueFIndex].src;
        cardImages[trueFIndex].src = tempSrc;

        cardImages[trueOgIndex].style.animation = "bounceEffect 0.5s";
        cardImages[trueFIndex].style.animation = "bounceEffect 0.5s";
    
    }

    sortButtons.forEach(button => {
        button.addEventListener("click", () => {
            sortType = button.dataset.sort;
            sortCards(sortType);
            createSortStepButton();

        });
    });

    function getSortKey(sortType) {
        return sortKeyMapping[sortType];
        console.log(sortKeyMapping[sortType]); 
    }

    let beforeSortingArray = null;

    function sortCards(sortType) {
        const sortURL = `http://localhost:8085/api/sorts/${sortType}Cards`;
        console.log(sortURL);

        fetch(sortURL, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(),
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network error');
            })
            .then(responseData => {
                console.log(`Received sorted data using ${sortType} sort:`, data);
                data = responseData;
                console.log(data);

                swapData = responseData.slice(0, -1);
                console.log("swap data: ");
                console.log(swapData);

                // loop through the response object to find the object containing the beforeSorting property
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key) && responseData[key].hasOwnProperty('BeforeSorting')) {
                        // extract the BeforeSorting array and parse it to an actual array
                        beforeSortingArray = JSON.parse(responseData[key].BeforeSorting);
                        break; 
                    }
                }
                renderCards(beforeSortingArray);
                console.log(beforeSortingArray);
                
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

</script>