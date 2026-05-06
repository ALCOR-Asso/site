function showZoom(i) {
    document.querySelectorAll(".zoomed_view_div.num"+String(i))[0].setAttribute("style","visibility:visible;");
}

function hideZoom(i) {
    document.querySelectorAll(".zoomed_view_div.num"+String(i))[0].setAttribute("style","visibility:hidden;");
}


document.querySelectorAll(".img-galerie").forEach(div => {
    div.childNodes.forEach(elt => {
        if (elt.nodeName == "IMG") {
            const imgpath = elt.getAttribute("src");
            const number = imgpath.substring(7,9).replace(/[.]|_|[a-z]/gi,"")
            const imgzoom = document.createElement("img");
            imgzoom.setAttribute("src",imgpath);
            imgzoom.setAttribute("class","zoomed_view_img num"+number);
            const divzoom = document.createElement("div");
            divzoom.setAttribute("class","zoomed_view_div num"+number);
            divzoom.setAttribute("style","visibility:hidden;");
            divzoom.setAttribute("ondblclick","hideZoom("+number+")"); //flemme de faire des evt
            divzoom.appendChild(imgzoom);
            document.body.appendChild(divzoom);
        }
    });
});