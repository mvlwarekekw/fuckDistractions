const css_tiktok = `
#main-content-video_detail {
    display: none !important;
}

#main-content-homepage_hot {
    display: none !important;
}
`

const style_tiktok = document.createElement('style');
style_tiktok.textContent = css_tiktok;
document.head.appendChild(style_tiktok)
