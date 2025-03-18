import { cardsData } from "./cardsData.js";

document.addEventListener("DOMContentLoaded", function() {
    const isGitHubPages = window.location.href.includes("github.io");
    const content = document.getElementById("js-works-grid");
    const template = document.getElementById("js-works-card");

    // カードを生成して挿入
    cardsData.forEach(data => {
        const clone = template.content.cloneNode(true);
        const card = clone.querySelector(".works-card");

        // データをカードに設定
        card.querySelector(".works-card div .image").src = data.imgSrc;
        card.querySelector(".works-card div .title").textContent = data.title;
        card.querySelector(".works-card div .description").textContent = data.description;

        // GitHubPagesではjekyllで拡張子無しでmdを開くため削除する
        let filePath = data.filePath;
        if(isGitHubPages) {
            filePath = filePath.split(".").slice(0, -1).join(".") + "/";
        }

        // クリックイベントの追加
        card.onclick = function() {
            window.open(filePath, "_self");
        };

        // カードをコンテンツに追加
        content.appendChild(clone);
    });
});
