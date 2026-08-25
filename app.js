* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    color: #333;
}

header {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 7%;
}

.logo {
    font-size: 28px;
    font-weight: bold;
}

nav {
    display: flex;
    gap: 35px;
}

nav a {
    text-decoration: none;
    color: #333;
}

.hero {
    min-height: 550px;
    background: #f5efe7;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 50px 10%;
}

.hero-box {
    background: #fff3e3;
    padding: 45px;
    max-width: 500px;
}

.hero-box h1 {
    color: #b88e2f;
    font-size: 45px;
    margin: 15px 0;
}

.hero-box button {
    background: #b88e2f;
    color: white;
    border: none;
    padding: 15px 30px;
    margin-top: 20px;
}

h2 {
    text-align: center;
    margin: 50px 0 10px;
}

.browse-text {
    text-align: center;
}

.categories {
    display: flex;
    gap: 25px;
    justify-content: center;
    margin: 40px 7%;
}

.categories img {
    width: 300px;
    height: 300px;
    object-fit: cover;
}

.categories h3 {
    text-align: center;
    margin-top: 10px;
}

footer {
    text-align: center;
    padding: 40px;
    margin-top: 50px;
    background: #f5f5f5;
}
