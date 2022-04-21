<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Kutip</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins" rel="stylesheet">
    <script src="{{ asset('js/app.js') }}" defer></script>
</head>
<body>
    <div id="home-root" data-user={{ $user }}></div>
</body>
</html>