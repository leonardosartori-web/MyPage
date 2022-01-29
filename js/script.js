function createButtonsDiv(data) {
    var div = document.createElement("div");
    var platforms = ["Spotify", "Deezer", "Youtube", "Apple", "Download"];
    for (const x of data) {
        var ddiv = document.createElement("p");
        var h = document.createElement("h4");
        h.setAttribute("class", "major");
        h.textContent = x.Nome;
        ddiv.appendChild(h);
        var ul = document.createElement("ul");
        ul.setAttribute("class", "icons");
        for (const platform of platforms) {
            var li = document.createElement("li");
            var a = document.createElement("a");
            if (platform !== "Download")
                a.setAttribute("href", x[platform]);
            else a.setAttribute("href", "sheets/" + x.Nome + ".pdf");
            a.setAttribute("class", "icon");
            if (platform == "Deezer") {
                var sspan = document.createElement("span");
                sspan.setAttribute("class", "iconify");
                sspan.setAttribute("data-icon", "fa-brands:deezer");
                a.appendChild(sspan);
            }
            else {
                if (platform !== "Download")
                    a.classList.add("brands");
                else a.classList.add("solid");
                a.classList.add("fa-" + String(platform).toLowerCase());
            }
            li.appendChild(a);
            ul.appendChild(li);
            ddiv.appendChild(ul);
        }
        div.appendChild(ddiv);
    }
    return div;
}

var data = [{Nome: "Notturno",
    Spotify: "https://open.spotify.com/track/21UR9VB2bBsLeRKZBTVxMQ",
    Deezer: "https://www.deezer.com/track/1342731772",
    Youtube: "https://www.youtube.com/watch?v=Tk6-6wRcN24",
    Apple: "https://music.apple.com/us/album/notturno-single/1563580318"
},
    {Nome: "Falling Snow",
        Spotify: "https://open.spotify.com/track/70UbxfwWbeiglv4hbKcDz7",
        Deezer: "https://www.deezer.com/track/1601797862",
        Youtube: "https://www.youtube.com/watch?v=0qwJr_veC90",
        Apple: "https://music.apple.com/it/album/falling-snow/1602017689"
    }];

document.getElementById("work").appendChild(createButtonsDiv(data));

function sendEmail() {

}