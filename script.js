document.addEventListener('DOMContentLoaded', () => {
    const collectedCoinCountElement = document.getElementById('collected-coin-count');
    const autoCoinCountElement = document.getElementById('auto-coin-count');
    const collectButton = document.getElementById('collect-button');
    const maxAutoCoins = 100; // الحد الأقصى للنقاط المجددة

    // استرجاع النقاط المحفوظة من localStorage أو تعيين القيم الافتراضية
    let collectedCoinCount = parseInt(localStorage.getItem('collectedCoinCount')) || 0;
    let autoCoinCount = parseInt(localStorage.getItem('autoCoinCount')) || maxAutoCoins;

    // وظيفة لتحديث عدد النقاط المجمعة
    function updateCollectedCoinDisplay() {
        collectedCoinCountElement.textContent = collectedCoinCount;
    }

    // وظيفة لتحديث عدد النقاط المجددة
    function updateAutoCoinDisplay() {
        autoCoinCountElement.textContent = autoCoinCount;
    }

    // وظيفة لجمع نقطة
    function collectCoin() {
        if (autoCoinCount > 0) {
            collectedCoinCount += 1;
            autoCoinCount -= 1;
            updateCollectedCoinDisplay();
            updateAutoCoinDisplay();
            saveGame(); // حفظ الحالة الحالية للعبة
        }
    }

    // وظيفة لتجديد النقاط تلقائيًا بمقدار واحد كل ثانية
    function refreshCoins() {
        if (autoCoinCount < maxAutoCoins) {
            autoCoinCount += 1;
            updateAutoCoinDisplay();
            saveGame(); // حفظ الحالة الحالية للعبة
        }
    }

    // وظيفة لحفظ الحالة الحالية للعبة إلى localStorage
    function saveGame() {
        localStorage.setItem('collectedCoinCount', collectedCoinCount);
        localStorage.setItem('autoCoinCount', autoCoinCount);
    }

    // إضافة حدث عند الضغط على الزر
    collectButton.addEventListener('click', collectCoin);

    // تجديد النقاط تلقائيًا كل ثانية
    setInterval(refreshCoins, 1000);

    // تحديث العرض عند بدء اللعبة
    updateAutoCoinDisplay();
    updateCollectedCoinDisplay();
});
