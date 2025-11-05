function loadPage(page) {
    fetch(`${page}.html`)
        .then(res => res.text())
        .then(data => document.getElementById("dashboard").innerHTML = data);
}


loadPage("dashboard");