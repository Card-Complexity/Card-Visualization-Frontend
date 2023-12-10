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
<style>
