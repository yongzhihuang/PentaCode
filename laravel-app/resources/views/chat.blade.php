<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Stock Opinions</h1>
    <div>

        @auth
            Welcome back, {{auth()->user()->name}}
            <form action="/logout" method="POST">
                @csrf
                <button>Log out</button>
            </form>

            @include('partials/chatbox')
        @else
                Login:
                <form action="/login" method="POST">
                    @csrf
                    <input type="text" placeholder="name" name="login-name" />
                    <input type="password" placeholder="password" name="login-password" />
                    <button>Login</button>
                </form>
        @endauth


    </div>
</body>
</html>
