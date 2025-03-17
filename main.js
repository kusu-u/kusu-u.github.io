import { cardsData } from "./cardsData.js";

document.addEventListener("DOMContentLoaded", function() {
    const isGitHubPages = window.location.href.includes("github.io");
    const content = document.getElementById("js-content");
    const template = document.getElementById("js-card");

    // カードを生成して挿入
    cardsData.forEach(data => {
        const clone = template.content.cloneNode(true); // テンプレートのクローン
        const card = clone.querySelector(".card");

        // データをカードに設定
        card.querySelector(".card-image").src = data.imgSrc;
        card.querySelector(".card-title").innerText = data.title;

        // GitHubPagesではjekyllで拡張子無しでmdを開くため削除する
        let filePath = data.filePath;
        if(false == isGitHubPages) {
            filePath.split(".").slice(0, -1).join(".");
        }

        // クリックイベントの追加
        card.onclick = function() {
            window.open(filePath, '_blank');
        };

        // カードをコンテンツに追加
        content.appendChild(clone);
    });
});
