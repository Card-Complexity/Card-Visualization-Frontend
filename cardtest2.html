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

    }

    /* css styles for the table */
    .tableContainer {
        margin-top: 20px;
    }

    .analyticsTable {
        margin-left: 100px;
        width: 80%;
        height: auto;
        border-collapse: collapse;
    }

    .analyticsTable th,
    .analyticsTable td {
        border: 1px solid #272525;
        padding: 8px;
        text-align: left;
    }


    .analyticsTable th {
        background-color: #ede2dc;
        font-weight: bold;
    }


    .analyticsTable tbody {
        background-color: #ede2dc;
    }


    .analyticsTable tbody tr:hover {
        background-color: #ede2dc;
    }
    /* end of table styling */

    .dealBtn {
        background-color: red;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 30px;
        margin-left: 10px;
        margin-bottom: 30px;
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

</style>



<body class="main">
    <div class="title"> Watch how each sort method works!</div>
    <div class="layout">
        <button class="dealBtn">Deal out the cards</button>
        <div class="cardContainer"></div>
        <div>
            <button class="sortBtn" data-sort="bubble">Bubble Sort</button>
            <button class="sortBtn" data-sort="merge">Merge Sort</button>
            <button class="sortBtn" data-sort="insertion">Insertion Sort</button>
            <button class="sortBtn" data-sort="selection">Selection Sort</button>
        </div>
    </div>
</body>



<script>
    const dealBtnClick = document.querySelector(".dealBtn");
    const cardContainer = document.querySelector(".cardContainer");
    const sortButtons = document.querySelectorAll(".sortBtn");
    const deckURL = `https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
    let deckID;

    let cards = [];

    async function getDeck(){
        const response = await fetch(deckURL);
        const deckDetails = await response.json();

        console.log(deckDetails.deck_id);
        deckID = deckDetails.deck_id;
    }
    getDeck();

    
    function displayAnalyticsData(data) {
        const tableContainer = document.createElement('div');
        tableContainer.classList.add('tableContainer');

        const table = document.createElement('table');
        table.classList.add('analyticsTable');

        const tableHeader = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const headers = ['Metric', 'Value'];
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        tableHeader.appendChild(headerRow);
        table.appendChild(tableHeader);

    // create table body with analytics data
        const tableBody = document.createElement('tbody');
        for (const [key, value] of Object.entries(data)) {
            const row = document.createElement('tr');
            const metricCell = document.createElement('td');
            metricCell.textContent = key;
            const valueCell = document.createElement('td');
            valueCell.textContent = value;
            row.appendChild(metricCell);
            row.appendChild(valueCell);
            tableBody.appendChild(row);
        }
        table.appendChild(tableBody);

        tableContainer.appendChild(table);
        document.body.appendChild(tableContainer);
    };


    dealBtnClick.onclick = async function(){
        for (let i = 0; i < 10; i++) {
            const cardURL = `https://www.deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`;
            const response = await fetch(cardURL);
            const card = await response.json();

            console.log(card.cards[0]);

            const cardDetails = card.cards[0];
            cards.push(cardDetails.value);
            console.log(cards)
            cardContainer.innerHTML += `<img src="${cardDetails.image}">`;
        }
    };


        sortButtons.forEach(button => {
            button.addEventListener("click", () => {
                const sortType = button.dataset.sort;
                sortCards(sortType);

            
            });
        });


  function sortCards(sortType) {
        const sortURL = `http://localhost:8085/api/sorts/${sortType}`;
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
            .then(data => {
                console.log(`Received sorted data using ${sortType} sort:`, data);
                displayAnalyticsData(data);

            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

</script>