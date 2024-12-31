<script>
    export let data;
</script>

<a href="/clubs">Back</a>
<h1>{data.club.name}</h1>

<div class="container">
    <p>Ort: {data.club.ort}</p>
    <form method="POST" action="?/delete">
        <input name="id" type="hidden" value={data.club._id}>
        <button class="btn btn-danger">Delete Club</button>
    </form>
</div>

<style>
    .container {
        margin: 20px 0;
    }
    .btn {
        background-color: red;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }
</style>