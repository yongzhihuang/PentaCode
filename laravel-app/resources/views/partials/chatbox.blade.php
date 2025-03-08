<style>
    .chat-box {
        border: solid 2px black;
        padding: 5px;
        width: 500px;
        margin-bottom: 15px;
        min-height: 200px;
    }

    .message-box {
        width: 450px;
        padding: 5px;
    }
</style>

<div class="chat-box">

</div>

<form action="/send" method="POST">
    @csrf
    <input class="message-box" type="text" name="message" placeholder="enter your message" />
    <button>Send</button>
</form>
