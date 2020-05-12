<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>section1</title>
    <script src ="section1.js"></script>
</head>
<body>
    <p id="test"></p>
    <script>
        const name = 'Ajay'
        console.log(`Hi ${name}, Welcome to this page`);
        document.getElementById('test').innerHTML = `Hi ${name}, Welcome to this page`;
    </script>
</body>
</html>