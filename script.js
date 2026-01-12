// 內容設定：區分不同世代的記憶視角
const content = {
    young: {
        title: "給未來的你：一張跨越時空的守望卡片",
        text: `在你眼中，這座城市或許一直是如此寧靜、日常。你可能是在這十年內才出生，或者當時還太小，正在溫暖的搖籃裡熟睡。所以，你可能不曾記得 2016 年那個春節前的深夜。\n\n那晚凌晨 3 點 57 分，大地發出了沈重的怒吼。短短幾十秒，許多人的家變成了碎石，台南的街道迴盪著焦急的鳴笛聲。那是一段讓全台灣大人們都流下眼淚的記憶。\n\n我們之所以在這裡留下這些紀錄，並不是要讓你害怕，而是想告訴你一個秘密：「所有的記得，都是為了讓你更安全地長大。」\n\n現在你在這個網站上看到的每一個故事、每一段當時的回憶與紀錄，都是我們從那晚的傷痕中學會的禮物。我們把曾經的遺憾，變成了現在守護你的力量。\n\n當你點開這份記憶，你就不再只是聽故事的人。你將和我們一起，學會敬畏自然，並成為守護這片土地未來的小小力量。`
    },
    adult: {
        title: "給同在時光中前行的你：一份關於記憶的邀請",
        text: "十年的光景，足以讓一座城市重建，也足以讓一段震慟的記憶在日常的瑣碎中逐漸模糊。但對我們而言，2016 年 2 月 6 日凌晨 3 時 57 分的那聲低鳴，從未真正消失。\n\n這份檔案獻給台南，以及依然歷歷在目的你。讓我們一起拾起這些片段，將過去的傷痕，轉化為守護這片土地前行的勇氣。"
    }
};

// 顯示卡片內容的函式
function showContent(type) {
    const selector = document.getElementById('age-selector');
    const display = document.getElementById('card-content');
    
    // 增加淡出動畫效果
    selector.style.opacity = '0';
    setTimeout(() => {
        selector.classList.add('hidden');
        display.classList.remove('hidden');
        display.style.opacity = '0';
        
        // 注入文字
        document.getElementById('card-title').innerText = content[type].title;
        document.getElementById('card-text').innerText = content[type].text;
        
        // 觸發淡入
        setTimeout(() => { display.style.opacity = '1'; }, 50);
    }, 300);
}

// 進入主網站
function enterSite() {
    const overlay = document.getElementById('overlay');
    overlay.style.transition = 'opacity 0.8s ease';
    overlay.style.opacity = '0';
    
    setTimeout(() => {
        overlay.classList.add('hidden');
        document.getElementById('main-site').classList.remove('hidden');
        document.body.style.overflow = 'auto'; // 恢復頁面滾動
    }, 800);
}
document.addEventListener('DOMContentLoaded', () => {
    // 1. 生成 117 顆星辰 (象徵 0206 罹難者)
    const container = document.getElementById('stars-container');
    if (container) {
        for (let i = 0; i < 117; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            
            const size = Math.random() * 2 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            
            // 隨機閃爍時間
            star.style.setProperty('--duration', `${Math.random() * 3 + 2}s`);
            container.appendChild(star);
        }
    }

    // 2. 輪播邏輯
    let slides = document.querySelectorAll('.slide');
    let current = 0;
    if (slides.length > 0) {
        setInterval(() => {
            slides[current].classList.remove('active');
            current = (current + 1) % slides.length;
            slides[current].classList.add('active');
        }, 5000);
    }
});
