const yt_homepage_block = () => {
    const shelves = document.getElementsByClassName("ytd-rich-shelf-renderer")
    if (shelves) {
        console.log(shelves)
        console.log(shelves.length)
        for (let i = 0, len = shelves.length, text = ""; i < len; i++) {
            if (shelves.item(i).hasAttribute("id")){
                if (shelves.item(i).id === "dismissible") {
                    shelves.item(i).innerHTML = ""
                }
            }
        }
    }
}

yt_homepage_block()