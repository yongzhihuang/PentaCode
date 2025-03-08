<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Stock Opinions</h1>
    <div>
            <p>Make new account</p>

            <form action="/register" method="POST">
                @csrf
                <input type="text" placeholder="name" name="name" />
                <input type="password" placeholder="password" name="password" />
                <input type="email" placeholder="email" name="email" />
                <button>Sign Up</button>
            </form>
    </div>
</body>
</html>
