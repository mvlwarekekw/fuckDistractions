const html = `
<div style="display: flex; flex-direction: column; align-items: center; justify-content: center;" class="fuck-distractions">
    <h1 style="margin: 50px 0 20px; font-size: 50px; color: #666666">Fuck distractions :D</h1>
    <h2 style="font-size: 30px; color: #666666">Trust me, you're not going to find a solution to your problems here.</h2>
    <h2 style="font-size: 30px; color: #666666">THEY are the problem. </h2>
    <h3 style="margin: 30px 0; font-size: 25px; color: #666666">Look at this seal instead :)</h3>
    <a href="https://github.com/mvlwarekekw"><img src="https://mvlware.xyz/seal.png" alt="seal aka furball" style="border-radius: 100%; width: 45vh; height: 45vh;"/></a>
</div>
`

const body = document.querySelector("body")
body.innerHTML = html

window.setTimeout(() => {
    if (window.location.href.includes("youtube.com/shorts")) {
        window.location.href = "https://youtube.com"
    } else if (window.location.href.includes("instagram.com")) {
        window.location.href = "https://github.com"
    } else if (window.location.href.includes("tiktok.com")) {
        window.location.href = "https://github.com"
    }
}, 1500)