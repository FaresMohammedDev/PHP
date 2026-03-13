const members = [
    { name: "فارس محمد (البشمهندس)", class: "W5", roles: ["سفير", "وسيط", "داعم دراسي", "داعم مهني"], image: "img/fares.jpeg" },
    { name: "عمر احمد ابراهيم (بيومي)", class: "S2", roles: ["سفير", "وسيط"], image: "img/bayomy.jpeg" },
    { name: "عمر وليد ابراهيم", class: "J1", roles: ["داعم دراسي"], image: "img/omar.jpeg" },
    { name: "يارا ابراهيم محمد", class: "J1", roles: ["وسيط"], image: "img/yara.jpeg" },
    { name: "عبد الرحمن محمد الدسوقي", class: "J4", roles: ["سفير"], image: "img/dosoky.jpeg" },
    { name: "مريم رضا الكيلاني", class: "J2", roles: ["سفير"], image: "img/mariemR.jpeg" },
    { name: "عبد المنعم محمد عبد المنعم (منعم)", class: "J5", roles: ["وسيط"], image: "img/andelmnam.jpeg" },
    { name: "محمود محمد محمود (التركي)", class: "W3", roles: ["سفير", "داعم مهني"], image: "img/Mahmoud.jpeg" },
    { name: "مريم ممدوح صابر", class: "W1", roles: ["وسيط"], image: "img/mariemM.jpeg" },
    { name: "سيف اشرف جابر", class: "W3", roles: ["داعم مهني"], image: "img/sief.jpeg" },
    { name: "ملك احمد سعد", class: "W6", roles: ["وسيط"], image: "img/malak.jpeg" },
    { name: "علي احمد كمال", class: "W6", roles: ["سفير", "داعم مهني"], image: "img/ali.jpeg" },
    { name: "انس احمد حسن", class: "W3", roles: ["داعم مهني"], image: "img/anas.jpeg" },
    { name: "يوسف السيد احمد", class: "W5", roles: ["سفير", "وسيط"], image: "img/ElJoo.jpeg" },
    { name: "اياد احمد محمد", class: "W6", roles: ["داعم مهني"], image: "img/eyad.jpeg" },
    { name: "ادهم محمد رضوان", class: "W4", roles: ["سفير"], image: "img/adham.jpeg" },
    { name: "مريم محمد فتحي", class: "J4", roles: ["سفير", "داعم دراسي"], image: "img/mariem.jpeg" },
    { name: "سما محمد عبد النبي", class: "J4", roles: ["وسيط"], image: "img/sama.jpeg" },
    { name: "احمد محمد عبد الحليم (غلاب)", class: "W5", roles: ["سفير", "وسيط"], image: "img/ghalab.jpeg" },
    { name: "محمد صابر عبد المجيد", class: "W1", roles: ["سفير"], image: "img/saber.jpeg" },
    { name: "محمد عباس محمد", class: "J4", roles: ["وسيط"], image: "img/abas.jpeg" },
    { name: "مهند محمد السيد (هوندا)", class: "J3", roles: ["وسيط"], image: "img/Honda.jpeg" },
    { name: "يمنى السيد محمد", class: "W3", roles: ["داعم دراسي"], image: "img/yomna.jpeg" },
    { name: "ياسين اسلام السيد", class: "J6", roles: ["سفير"], image: "img/yassen.jpeg" },
    { name: "فرح محمد رضوان", class: "J3", roles: ["سفير", "داعم دراسي"], image: "img/farah.jpeg" },
    { name: "سعاد ابراهيم (سيرو)", class: "W6", roles: ["سفير", "داعم دراسي"], image: "img/sero.jpeg" },
    { name: "ادم احمد محمد", class: "S1", roles: ["داعم دراسي", "سفير"], image: "img/adam.jpeg" },
    { name: "عمار عمر محمود", class: "J5", roles: ["داعم دراسي"], image: "img/ammar.jpeg" },
    { name: "يوسف عبدالرحيم صابر", class: "J5", roles: ["داعم دراسي"], image: "img/youssef.jpeg" },
    { name: "يحيى قطب ابراهيم", class: "W4", roles: ["وسيط", "سفير"], image: "img/yahya.jpeg" },
    { name: "اروى عمر", class: "J5", roles: ["وسيط"], image: "img/arwa.jpeg" },
    { name: "سيف محمد", class: "W3", roles: ["داعم مهني"], image: "img/seif.jpeg" },
    { name: "عمر ياسر الكومي", class: "W4", roles: ["وسيط"], image: "img/komy.jpeg" },
    { name: "عمر محمد محمد", class: "J2", roles: ["سفير"], image: "img/b7r.jpeg" },
    { name: "عمار هاني", class: "S1", roles: ["سفير"], image: "img/maro.jpeg" },
    { name: "سما محمد ذكي", class: "J4", roles: ["سفير"], image: "img/samaZ.jpeg" }
];

const rolesInfo = {
    "سفير": { color: "#ffb703" },
    "وسيط": { color: "#219ebc" },
    "داعم دراسي": { color: "#06d6a0" },
    "داعم مهني": { color: "#ef476f" }
};

let currentRole = null;
let currentFilter = 'all';

function renderHome() {
    currentRole = null; currentFilter = 'all';
    const container = document.getElementById('main-content');
    container.innerHTML = `
        <header class="hero">
            <h1>PHP - Peer Helping Program</h1>
            <p>نحن هنا لدعمك في رحلتك الدراسية والمهنية</p>
        </header>
        <div class="roles-grid">
            ${Object.keys(rolesInfo).map((role, index) => `
                <div class="role-card" onclick="selectRole('${role}')" style="--accent: ${rolesInfo[role].color}; animation-delay: ${index * 0.1}s">
                    <i class="fas ${getRoleIcon(role)} role-icon"></i>
                    <h2 class="role-title">${role}</h2>
                </div>
            `).join('')}
        </div>
    `;
    // Footer is static now in index.html, no need to render it here every time.
    if (!document.getElementById('main-footer').innerHTML) {
        renderFooter();
    }
}

function getRoleIcon(role) {
    switch (role) {
        case 'سفير': return 'fa-globe';
        case 'وسيط': return 'fa-handshake';
        case 'داعم دراسي': return 'fa-book-open';
        case 'داعم مهني': return 'fa-briefcase';
        default: return 'fa-user';
    }
}

function selectRole(role) { currentRole = role; currentFilter = 'all'; renderMembers(); }
function filterMembers(type) { currentFilter = type; renderMembers(); }

function renderMembers() {
    const list = members
        .filter(m => {
            if (!m.roles.includes(currentRole)) return false;
            if (currentFilter === 'all') return true;
            return m.class.startsWith(currentFilter);
        })
        .sort((a, b) => a.name.includes('فارس') ? -1 : (b.name.includes('فارس') ? 1 : 0));

    const container = document.getElementById('main-content');
    container.innerHTML = `
        <div class="view-header">
            <div>
                <button class="back-btn" onclick="renderHome()">
                    <i class="fas fa-arrow-right"></i> الرئيسية
                </button>
            </div>
            <h1 style="color: ${rolesInfo[currentRole].color}; text-shadow: 0 0 20px ${rolesInfo[currentRole].color}40;">${currentRole}</h1>
        </div>
        
        <div class="role-switcher">
            ${Object.keys(rolesInfo).map(role => `
                <button class="role-switch-btn ${currentRole === role ? 'active-role' : ''}" 
                        onclick="selectRole('${role}')" 
                        style="--role-color: ${rolesInfo[role].color}">
                    <i class="fas ${getRoleIcon(role)}"></i> ${role}
                </button>
            `).join('')}
        </div>

        <div class="filters-container">
            <div class="filter-group">
                ${['all', 'J', 'W', 'S'].map(f => `
                    <button class="${currentFilter === f ? 'active' : ''}" onclick="filterMembers('${f}')">
                        ${f === 'all' ? 'الكل' : (f === 'J' ? 'Junior' : (f === 'W' ? 'Wheeler' : 'Senior'))}
                    </button>
                `).join('')}
            </div>
            ${renderSubFilters()}
        </div>
        <div class="members-grid">
            ${list.map((m, index) => `
                <div class="member-card" style="--accent: ${rolesInfo[currentRole].color}; animation-delay: ${index * 0.1}s">
                    <div class="member-image-large">
                        <img src="${m.image}" alt="${m.name}" onerror="this.src='https://via.placeholder.com/600x800/161b22/8b949e?text=${encodeURIComponent(m.name)}'">
                    </div>
                    <div class="member-details-overlay">
                        <div class="member-badge">${m.class}</div>
                        <h3>${m.name}</h3>
                        <p class="role-label">${currentRole}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderSubFilters() {
    if (currentFilter === 'all') return '';
    const cat = ['J', 'W', 'S'].includes(currentFilter) ? currentFilter : currentFilter[0];
    if (!['J', 'W', 'S'].includes(cat)) return '';

    return `<div class="sub-filter-group" style="animation: fadeIn 0.4s ease-out">
        ${[1, 2, 3, 4, 5, 6].map(n => {
        const code = cat + n;
        return `<button class="${currentFilter === code ? 'active-sub' : ''}" onclick="filterMembers('${code}')">${code}</button>`;
    }).join('')}
    </div>`;
}

function renderFooter() {
    document.getElementById('main-footer').innerHTML = `
        <p>Made by <span class="author">Eng. Fares Mohammed</span></p>
        <div class="social-links-small">
            <a href="https://wa.me/201203927960" target="_blank" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
            <a href="https://t.me/faresm8" target="_blank" aria-label="Telegram"><i class="fab fa-telegram"></i></a>
            <a href="https://www.facebook.com/fares.mohammed.819316" target="_blank" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
            <a href="https://www.linkedin.com/in/fares-mohammed-51a8a03a9/" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', renderHome);
