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
            const imgzoom = document.createElement("img");
            imgzoom.setAttribute("src",imgpath);
            imgzoom.setAttribute("class","zoomed_view_img num"+imgpath[7]);
            const divzoom = document.createElement("div");
            divzoom.setAttribute("class","zoomed_view_div num"+imgpath[7]);
            divzoom.setAttribute("style","visibility:hidden;");
            divzoom.setAttribute("ondblclick","hideZoom("+imgpath[7]+")"); //flemme de faire des evt
            divzoom.appendChild(imgzoom);
            document.body.appendChild(divzoom);
        }
    });
});