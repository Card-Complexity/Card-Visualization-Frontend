---
layout: none
baseurl: /index
---

 {%- include header.html -%}
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card Sorting Animation</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="card-container"></div>
    <script src="script.js"></script>
</body>
</html>

<style>
    body {
    font-family: Arial, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
}

#card-container {
    display: flex;
    position: relative;
}

.card {
    width: 50px;
    height: 80px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    position: absolute;
    transition: transform 0.3s ease-in-out;
}

/* Custom styles for different card suits */
.card[data-suit="H"] {
    color: red;
}

.card[data-suit="D"] {
    color: red;
}

.card[data-suit="C"] {
    color: black;
}

.card[data-suit="S"] {
    color: black;
}

<style>

<style>
body {
    font-family: Arial, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
}

#card-container {
    display: flex;
    position: relative;
}

.card {
    width: 60px;
    height: 100px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    position: absolute;
    transition: transform 0.3s ease-in-out;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Style the card values for better visibility */
.card::before {
    content: attr(data-card-value);
    font-size: 14px;
    font-weight: normal;
}

/* Additional styling for a more card-like appearance */
.card::after {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 5px;
    background: linear-gradient(to bottom, #eee, #ccc);
    z-index: -1;
}
<style>