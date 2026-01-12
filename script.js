const content = {
    young: {
        title: "給未來的你：一張跨越時空的守望卡片",
        text: "在你眼中，這座城市或許一直是如此寧靜、日常。你可能是在這十年內才出生，或者當時還太小，正在溫暖的搖籃裡熟睡。所以，你可能不曾記得 2016 年那個春節前的深夜。",
        text: "那晚凌晨 3 點 57 分，大地發出了沈重的怒吼。短短幾十秒，許多人的家變成了碎石，台南的街道迴盪著焦急的鳴笛聲。那是一段讓全台灣大人們都流下眼淚的記憶。"
    },
    adult: {
        title: "給同在時光中前行的你",
        text: "十年的光景，足以讓一座城市重建，也足以讓一段震慟的記憶逐漸模糊。但對我們而言，2016 年那聲低鳴從未消失。這份檔案獻給台南，以及依然歷歷在目的你。"
    }
};

function showContent(type) {
    document.getElementById('age-selector').classList.add('hidden');
    const display = document.getElementById('card-content');
    display.classList.remove('hidden');
    
    document.getElementById('card-title').innerText = content[type].title;
    document.getElementById('card-text').innerText = content[type].text;
}

function enterSite() {
    document.getElementById('overlay').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('overlay').classList.add('hidden');
        document.getElementById('main-site').classList.remove('hidden');
        document.body.style.overflow = 'auto'; // 恢復滾動
    }, 500);
}
