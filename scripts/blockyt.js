const shorts_container = document.querySelector("#shorts-container")

const yt_html = `
<div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <h1 style="margin: 50px 0 20px; font-size: 50px; color: #ffffff">Fuck YouTube shorts :D</h1>
    <h2 style="font-size: 30px; color: #ffffff">Trust me, you're not going to find a solution to your problems here.</h2>
    <h2 style="font-size: 30px; color: #ffffff">THEY are the problem. </h2>
</div>
`

const yt_css = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

#shorts-container {
    font-family: 'Poppins', sans-serif;
}
`

if (shorts_container) {
    shorts_container.innerHTML = yt_html

    const yt_css_elm = document.createElement('style');
    yt_css_elm.textContent = yt_css;
    document.head.appendChild(yt_css_elm)
}