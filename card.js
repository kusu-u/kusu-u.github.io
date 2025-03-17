document.addEventListener("DOMContentLoaded", function() {
    const content = document.getElementById("js-content");
    const template = document.getElementById("js-card");

    // 動的に挿入するデータ
    const cardsData = [
        {
            imgSrc: "images/image.png",
            title: "カードタイトル",
            filePath: "docs/foo"
        },
        {
            imgSrc: "images/image.png",
            title: "カードタイトル",
            filePath: "docs/foo"
        },
        {
            imgSrc: "images/image.png",
            title: "カードタイトル",
            filePath: "docs/foo"
        },
        // 他のカードデータも追加可能
    ];

    // カードを生成して挿入
    cardsData.forEach(data => {
        const clone = template.content.cloneNode(true); // テンプレートのクローン
        const card = clone.querySelector(".card");

        // データをカードに設定
        card.querySelector(".card-image").src = data.imgSrc;
        card.querySelector(".card-title").innerText = data.title;

        // クリックイベントの追加
        card.onclick = function() {
            openFile(data.filePath);
        };

        // カードをコンテンツに追加
        content.appendChild(clone);
    });
});
