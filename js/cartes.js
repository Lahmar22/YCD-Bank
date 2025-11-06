export function visibleMoney() {
    const toggleBtn = document.getElementById('btnVisible');
    const money1 = document.getElementById('money1');
    let isHidden = true;

    toggleBtn.addEventListener('click', () => {
        isHidden = !isHidden;
        money1.textContent = isHidden ? '****' : '10000 MAD';
    });
}



