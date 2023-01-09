const AUTHOR_INFO_TO_EXPAND = "作者信息（点击展开）"
const AUTHOR_INFO = "作者信息"
const HIDE_TEXT = "已经被点过了ヾ(･ω･`｡)，点击下方“折叠”按钮以恢复！"

document.getElementById("author-info").onclick = function () {
    if (!document.getElementById("author-more-info")) {
        document.getElementById("author-info").innerText = AUTHOR_INFO;
        const div = document.createElement("div");
        div.innerHTML = "<p>设计者：xxx</p> <p>学号：2017xxxxxx</p> <p>班级：2017xxxxxx</p> <p>完成时间：201912</p>";
        div.style.fontFamily = "en-Inkfree \u5e7c\u5706 fantasy";
        div.style.textAlign = "center";
        div.style.border = "dashed 1px green";
        div.id = "author-more-info";
        this.parentNode.appendChild(div);
        const exitingdiv = document.createElement("div");
        exitingdiv.innerText = "↑点此折叠介绍↑";
        exitingdiv.textAlign = "center";
        exitingdiv.id = "hide-info";
        exitingdiv.style.background = "lightgreen";
        exitingdiv.style.border = "solid 1px";
        exitingdiv.style.margin = "1em 0";
        exitingdiv.onclick = () => {
            if (document.getElementById("author-more-info")) {
                document.getElementById("author").removeChild(document.getElementById("author-more-info"));
                document.getElementById("author").removeChild(document.getElementById("hide-info"));
                document.getElementById("author-info").innerText = AUTHOR_INFO_TO_EXPAND;
            }
        };
        exitingdiv.onmouseover = () => {
            exitingdiv.style.background = "darkgreen";
            exitingdiv.style.color = "white";
            exitingdiv.style.cursor = "pointer";
        };
        this.parentNode.appendChild(exitingdiv);
    } else {
        alert(HIDE_TEXT);
    }
};

