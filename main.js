import { cardsData } from "./cardsData.js";

document.addEventListener("DOMContentLoaded", function() {
    const isGitHubPages = window.location.href.includes("github.io");
    const content = document.getElementById("js-content");
    const template = document.getElementById("js-works-card");

    // カードを生成して挿入
    cardsData.forEach(data => {
        const clone = template.content.cloneNode(true);
        const card = clone.querySelector(".works-card");

        // データをカードに設定
        card.querySelector(".works-card-image").src = data.imgSrc;
        card.querySelector(".works-card-title").innerText = data.title;

        // GitHubPagesではjekyllで拡張子無しでmdを開くため削除する
        let filePath = data.filePath;
        if(isGitHubPages) {
            filePath = filePath.split(".").slice(0, -1).join(".") + "/";
        }

        // クリックイベントの追加
        card.onclick = function() {
            window.open(filePath);
        };

        // カードをコンテンツに追加
        content.appendChild(clone);
    });
});
