// --- 1. ДЕРЕКТЕР (DATA) ---
const modalData = [
    { title: "Үй асханасы", text: "Бәрі кішкентай бөлмеден және үлкен мақсаттан басталды. Біз нағыз дәмнің үйден басталатынына сендік.", img: "mini.jpg" },
    { title: "Арманды жүзеге асыру", text: "2023 жылы алғашқы кірпіш қаланды. Біздің жобамыз қағаздан нақтылыққа айналды.", img: "cons.jpg" },
    { title: "Жергілікті өнімдер", text: "Біз тек жергілікті фермерлермен жұмыс істейміз. Әр тағамда туған жердің дәмі бар.", img: "product.avif" }
];

// --- 2. ФУНКЦИЯЛАР (FUNCTIONS) ---

// Модальды терезені ашу
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "flex"; // Терезені көрсету
        document.body.style.overflow = "hidden"; // Фонды айналдыруды тоқтату
    }
}

// Модальды терезені жабу
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none"; // Терезені жасыру
        document.body.style.overflow = "auto"; // Айналдыруды қайта қосу
    }
}

// Терезеден тыс жерді (қара фонды) басқанда жабу
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

    const menuData = [
        // Starters (Мұнда 15 тағамның бәрі болуы керек)
        { cat: 'starters', name: 'Escargots de Bourgogne', price: '4800₸', desc: 'Сарымсақ майындағы Бургундия ұлулары' },
    { cat: 'starters', name: 'Soupe à l\'Oignon', price: '3500₸', desc: 'Грюйер ірімшігімен классикалық пияз сорпасы' },
    { cat: 'starters', name: 'Foie Gras de Canard', price: '8900₸', desc: 'Үйрек фуа-грасы және інжір конфитюрі' },
    { cat: 'starters', name: 'Tartare de Saumon', price: '5200₸', desc: 'Авокадо қосылған албырт тартары' },
    { cat: 'starters', name: 'Quiche Lorraine', price: '3200₸', desc: 'Бекон және қаймақ қосылған дәстүрлі киш' },
    { cat: 'starters', name: 'Camembert au Four', price: '4500₸', desc: 'Розмаринмен пісірілген жұмсақ Камамбер' },
    { cat: 'starters', name: 'Carpaccio de Boeuf', price: '5800₸', desc: 'Пармезан және зәйтүн майымен сиыр еті' },
    { cat: 'starters', name: 'Salade Niçoise', price: '4100₸', desc: 'Тунец және анчоус қосылған Ницца салаты' },
    { cat: 'starters', name: 'Terrine de Campagne', price: '3700₸', desc: 'Ауылдық стильдегі ет паштеті' },
    { cat: 'starters', name: 'Huîtres Fraîches', price: '9500₸', desc: 'Жас устрицалар (6 дана)' },
    { cat: 'starters', name: 'Cuisses de Grenouilles', price: '6500₸', desc: 'Сарымсақпен қуырылған бақа аяқтары' },
    { cat: 'starters', name: 'Pâté en Croûte', price: '4900₸', desc: 'Қамырда пісірілген ет паштеті' },
    { cat: 'starters', name: 'Vichyssoise', price: '3100₸', desc: 'Салқын пирей-сорпасы' },
    { cat: 'starters', name: 'Moules Marinières', price: '5500₸', desc: 'Ақ шараптағы мидиялар' },
    { cat: 'starters', name: 'Champignons Farcis', price: '3400₸', desc: 'Ірімшікпен толтырылған саңырауқұлақтар' },

    // --- НЕГІЗГІ ТАҒАМДАР (MAIN) - 15 позиция ---
    { cat: 'main', name: 'Confit de Canard', price: '7200₸', desc: 'Картоппен ұсынылатын үйрек конфиі' },
    { cat: 'main', name: 'Boeuf Bourguignon', price: '8500₸', desc: 'Қызыл шарапта бұқтырылған сиыр еті' },
    { cat: 'main', name: 'Ratatouille Niçoise', price: '4200₸', desc: 'Прованс шөптерімен көкеніс рагуі' },
    { cat: 'main', name: 'Sole Meunière', price: '11500₸', desc: 'Сары май соусындағы теңіз тілі балығы' },
    { cat: 'main', name: 'Steak au Poivre', price: '9800₸', desc: 'Бұрыш соусындағы сиыр филесі' },
    { cat: 'main', name: 'Coq au Vin', price: '6800₸', desc: 'Шарап пен саңырауқұлақ қосылған тауық' },
    { cat: 'main', name: 'Blanquette de Veau', price: '7400₸', desc: 'Ақ соустағы бұзау еті' },
    { cat: 'main', name: 'Cassoulet', price: '6500₸', desc: 'Шұжық пен ет қосылған үрмебұршақ' },
    { cat: 'main', name: 'Magret de Canard', price: '8900₸', desc: 'Бал соусындағы үйрек төс еті' },
    { cat: 'main', name: 'Bouillabaisse', price: '12000₸', desc: 'Марсельдік теңіз өнімдері сорпасы' },
    { cat: 'main', name: 'Gigot d\'Agneau', price: '9200₸', desc: 'Пеште піскен қозы аяғы' },
    { cat: 'main', name: 'Truite Grenobloise', price: '7800₸', desc: 'Лимон және каперспен бақтақ балығы' },
    { cat: 'main', name: 'Pot-au-Feu', price: '7100₸', desc: 'Көкөністермен пісірілген сиыр еті' },
    { cat: 'main', name: 'Lapin à la Moutarde', price: '7600₸', desc: 'Қыша соусындағы қоян еті' },
    { cat: 'main', name: 'Hachis Parmentier', price: '5900₸', desc: 'Французша ет пен картоп бәліші' },

    // --- ДЕСЕРТТЕР (DESSERTS) - 15 позиция ---
    { cat: 'desserts', name: 'Crème Brûlée', price: '2800₸', desc: 'Классикалық ванильді крем-брюле' },
    { cat: 'desserts', name: 'Tarte Tatin', price: '3100₸', desc: 'Төңкерілген жылы алма бәліші' },
    { cat: 'desserts', name: 'Profiteroles', price: '3400₸', desc: 'Шоколадпен толтырылған профитролилер' },
    { cat: 'desserts', name: 'Éclair au Chocolat', price: '2200₸', desc: 'Бельгия шоколадымен эклер' },
    { cat: 'desserts', name: 'Mille-Feuille', price: '3600₸', desc: 'Ванильді кремі бар "мың қабат" десерті' },
    { cat: 'desserts', name: 'Mousse au Chocolat', price: '2900₸', desc: 'Әуес шоколадты мусс' },
    { cat: 'desserts', name: 'Macarons Assortis', price: '4500₸', desc: '6 түрлі дәмдегі макарондар' },
    { cat: 'desserts', name: 'Soufflé au Grand Marnier', price: '4200₸', desc: 'Апельсин ликері қосылған суфле' },
    { cat: 'desserts', name: 'Crêpes Suzette', price: '3800₸', desc: 'Апельсин соусындағы құймақтар' },
    { cat: 'desserts', name: 'Paris-Brest', price: '3900₸', desc: 'Пралине кремі бар шеңбер десерт' },
    { cat: 'desserts', name: 'Fondant au Chocolat', price: '3300₸', desc: 'Сұйық ортасы бар шоколадты фондан' },
    { cat: 'desserts', name: 'Ile Flottante', price: '2700₸', desc: "Қалқымалы арал" - 'безе және крем'},
    { cat: 'desserts', name: 'Baba au Rhum', price: '3500₸', desc: 'Ром шәрбатына малынған бәліш' },
    { cat: 'desserts', name: 'Clafoutis aux Cerises', price: '3100₸', desc: 'Шие қосылған француз бәліші' },
    { cat: 'desserts', name: 'Madeleines', price: '1800₸', desc: '4 дана балғын Мадлен печеньесі' },

    // --- СУСЫНДАР (DRINKS) - 15 позиция ---
    { cat: 'drinks', name: 'Bordeaux Rouge', price: '3500₸', desc: 'Бордо қызыл шарабы (бокал)' },
    { cat: 'drinks', name: 'Chablis Blanc', price: '3800₸', desc: 'Шабли ақ шарабы (бокал)' },
    { cat: 'drinks', name: 'Champagne Brut', price: '15000₸', desc: 'Нағыз француз шампаны (бөтелке)' },
    { cat: 'drinks', name: 'Café au Lait', price: '1500₸', desc: 'Сүт қосылған француз кофесі' },
    { cat: 'drinks', name: 'Evian / Badoit', price: '2200₸', desc: 'Минералды су (750мл)' },
    { cat: 'drinks', name: 'Orangina', price: '1200₸', desc: 'Классикалық апельсин сусыны' },
    { cat: 'drinks', name: 'Citronnade Maison', price: '1800₸', desc: 'Үйде дайындалған лимонад' },
    { cat: 'drinks', name: 'Thé Mariage Frères', price: '1600₸', desc: 'Премиум француз шайы' },
    { cat: 'drinks', name: 'Cognac VSOP', price: '4500₸', desc: 'Француз коньягі (50мл)' },
    { cat: 'drinks', name: 'Kir Royale', price: '4200₸', desc: 'Шампан мен қарақат ликері' },
    { cat: 'drinks', name: 'Pastis de Marseille', price: '2800₸', desc: 'Анисті дәстүрлі сусын' },
    { cat: 'drinks', name: 'Chardonnay', price: '3200₸', desc: 'Шардоне ақ шарабы' },
    { cat: 'drinks', name: 'Hot Chocolate', price: '2100₸', desc: 'Қою француз шоколады' },
    { cat: 'drinks', name: 'Espresso', price: '1000₸', desc: 'Қара кофе' },
    { cat: 'drinks', name: 'Diabolo Menthe', price: '1500₸', desc: 'Жалбыз шәрбаты мен лимонад' }
];

// 1. Мәліметтер қоры (HTML-дегі <h4> мәтінімен ДӘЛМЕ-ДӘЛ келуі тиіс)
const ingredientData = {
    "Фермерлік ет": {
        img: "meat.jpg",
        desc: "Біздің ет өнімдері тікелей жергілікті фермерлерден алынады. Бұл — табиғи дәм мен жоғары сапаның кепілі."
    },
    "Табиғи дәмдеуіштер": {
        img: "spices.webp",
        desc: "Әлемнің түкпір-түкпірінен жиналған табиғи дәмдеуіштер тағамның ерекше хош иісі мен терең дәмін ашады."
    },
    "Үй наны": {
        img: "bread.jpg",
        desc: "Өз пешімізде піскен, сырты қытырлақ, іші жұмсақ нан. Біз тек жоғары сортты ұн мен дәстүрлі ашытқыны қолданамыз."
    },
    "Балғын көкөністер": {
        img: "vega.jpg",
        desc: "Күн сайын таңертең жеткізілетін балғын көкөністер. Ешқандай консервантсыз, тек табиғи дәрумендер."
    }
};

// 2. Скрипт элементтерді табуы үшін DOMContentLoaded ішіне жазамыз
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('modalOverlay');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const closeModal = document.getElementById('closeModal');
    const items = document.querySelectorAll('.ingredient-item');

    console.log("Табылған ингредиенттер саны:", items.length); // Консольде 4 деп шығу керек

    items.forEach(item => {
        item.addEventListener('click', () => {
            const h4 = item.querySelector('h4');
            if (!h4) return;

            const title = h4.innerText.trim(); // "Фермерлік ет"
            const data = ingredientData[title];

            if (data) {
                // Мәліметтерді терезеге салу
                modalImg.src = data.img;
                modalTitle.innerText = title;
                modalDesc.innerText = data.desc;

                // Терезені ашу
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden'; // Скроллды тоқтату
            } else {
                console.error("Мәлімет табылмады. Мына жазуды тексер:", title);
            }
        });
    });

    // Жабу функциясы
    const closeBox = () => {
        overlay.classList.remove('active');
        document.body.style.overflow = ''; 
    };

    if (closeModal) closeModal.onclick = closeBox;
    window.onclick = (e) => { if (e.target === overlay) closeBox(); };
});

    // --- 3. МӘЗІР ФУНКЦИЯЛАРЫ ---
    window.renderMenu = function(category) {
        const grid = document.getElementById('menu-grid');
        if (!grid) return;
        grid.innerHTML = '';
        menuData.filter(item => item.cat === category).forEach(item => {
            grid.innerHTML += `
                <div class="menu-item-card">
                    <div class="item-title"><span>★ ${item.name}</span><span>${item.price}</span></div>
                    <p class="item-desc">${item.desc}</p>
                </div>`;
        });
    };

    window.filterMenu = function(cat, event) {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        if (event?.currentTarget) event.currentTarget.classList.add('active');
        renderMenu(cat);
    };

    if (document.getElementById('menu-grid')) renderMenu('starters');

    // --- 4. БРОНДАУ ЖӘНЕ ТЕЛЕГРАМ ---
    const reserveForm = document.querySelector('.reserve-form');
    const guestSelect = document.getElementById('guestSelect');
    const totalPriceText = document.getElementById('totalPriceText');


    if (guestSelect && totalPriceText) {
        guestSelect.addEventListener('change', () => {
            totalPriceText.innerText = (parseInt(guestSelect.value) * 2500).toLocaleString() + " ₸";
        });
    }

    if (reserveForm) {
        reserveForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Жаңа тексерілген токен:
            const botToken = '8581670420:AAErYyvBRLQGOWYPc6ROxwvuNGlnR8pAKXo';
            const chatId = '7457456650';


            const data = {
                name: document.getElementById('name')?.value || '—',
                phone: document.getElementById('phone')?.value || '—',
                date: document.getElementById('reserveDate')?.value || '—',
                time: document.getElementById('reserveTime')?.value || '—',
                guests: guestSelect?.value || '1',
                total: totalPriceText?.innerText || '0 ₸',
                card: document.getElementById('cardNumber')?.value || '—'
            };

            const message = `🍽 *ЖАҢА БРОНЬ*\n👤: ${data.name}\n📞: ${data.phone}\n📅: ${data.date} | ⏰: ${data.time}\n👥: ${data.guests} адам\n💰: ${data.total}\n💳: ${data.card}`;


            try {
                const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'Markdown' })
                });


                if (response.ok) {
                    alert("Сәтті! Ботқа хабарлама жіберілді.");
                    window.location.href = "index.html";
                } else {
                    alert("Қате: Токен немесе Chat ID дұрыс емес.");
                }
            } catch (err) {
                alert("Желілік қате орын алды.");
            }
        });
    }

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    if (!form) {
        console.warn('Форма .contact-form не найдена на странице');
        return; // прекращаем, если формы нет
    }

    const phoneInput = form.querySelector('input[type="tel"]');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, ''); // только цифры
            if (value.length > 11) value = value.slice(0, 11); // ограничение длины
            e.target.value = value;
        });
    }

    const telegramBotToken = '8324021010:AAH1ojTcGI0oQwtJ0NVbxS60jci8bhSyRA8';
    const telegramChatId = '7457456650';

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const nameInput = form.querySelector('input[type="text"]');
        const messageInput = form.querySelector('textarea');
        const ratingInputChecked = form.querySelector('input[name="rating"]:checked');

        const name = nameInput ? nameInput.value.trim() : '';
        const phone = phoneInput ? phoneInput.value.trim() : '';
        const message = messageInput ? messageInput.value.trim() : '';

        // Проверка номера телефона
        if (phone.length < 10) {
            alert('Телефон нөмірі дұрыс емес. 10-11 сан енгізіңіз.');
            return;
        }

        // Проверка рейтинга
        if (!ratingInputChecked) {
            alert('Өтінеміз, рейтингті таңдаңыз!');
            return;
        }

        const rating = ratingInputChecked.value;

        const btn = form.querySelector('.btn-send');
        if (!btn) {
            alert('Кнопка отправки не найдена.');
            return;
        }

        btn.innerText = 'Жіберілуде...';
        btn.disabled = true;

        const text = `✨ Новая заявка с сайта ✨\n\nИмя: ${name}\nТелефон: ${phone}\nРейтинг: ${rating}\nСообщение: ${message}`;

        try {
            const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: telegramChatId,
                    text: text
                })
            });

            if (!response.ok) {
                throw new Error(`Ошибка сервера: ${response.statusText}`);
            }

            alert('Жіберілді ✅');
            form.reset();
        } catch (error) {
            console.error(error);
            alert('Ошибка при отправке. Попробуйте позже.');
        } finally {
            btn.innerText = 'Жіберу';
            btn.disabled = false;
        }
    });
});

