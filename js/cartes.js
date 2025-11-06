export function visibleMoney() {
    const toggleBtn = document.getElementById('btnVisible');
    const money1 = document.getElementById('money1');
    let isHidden = true;

    toggleBtn.addEventListener('click', () => {
        isHidden = !isHidden;
        money1.textContent = isHidden ? '****' : '10000 MAD';
    });
}
export function visibleMoney2() {
    const toggleBtn2 = document.getElementById('btnVisible2');
    const money2 = document.getElementById('money2');
    let isHidden2 = true;

    toggleBtn2.addEventListener('click', () => {
        isHidden2 = !isHidden2;
        money2.textContent = isHidden2 ? '****' : '10000 MAD';
    });
}



