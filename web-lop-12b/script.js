/* ========================================
   LẤY CÁC PHẦN TỬ
======================================== */

const navItems =
    document.querySelectorAll(".nav-item");

const pages =
    document.querySelectorAll(".page");

const goButtons =
    document.querySelectorAll("[data-go]");

const navigation =
    document.getElementById("navigation");

const menuButton =
    document.getElementById("menuButton");

const themeButton =
    document.getElementById("themeButton");

const mouseLight =
    document.getElementById("mouseLight");


/* ========================================
   CHUYỂN TRANG
======================================== */

function showPage(pageId) {

    pages.forEach(page => {

        page.classList.remove("active");

    });


    const targetPage =
        document.getElementById(pageId);


    if (!targetPage) {
        return;
    }


    targetPage.classList.add("active");


    navItems.forEach(item => {

        item.classList.remove("active");


        if (
            item.dataset.section === pageId
        ) {

            item.classList.add("active");

        }

    });


    navigation.classList.remove("show");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ========================================
   MENU
======================================== */

navItems.forEach(item => {

    item.addEventListener(
        "click",
        () => {

            showPage(
                item.dataset.section
            );

        }
    );

});


/* ========================================
   CÁC NÚT DATA-GO
======================================== */

goButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            showPage(
                button.dataset.go
            );

        }
    );

});


/* ========================================
   MENU MOBILE
======================================== */

menuButton.addEventListener(
    "click",
    () => {

        navigation.classList.toggle(
            "show"
        );

    }
);


/* ========================================
   TKB SÁNG / CHIỀU
======================================== */

const scheduleTabs =
    document.querySelectorAll(
        ".schedule-tab"
    );

const schedulePanels =
    document.querySelectorAll(
        ".schedule-panel"
    );


scheduleTabs.forEach(tab => {

    tab.addEventListener(
        "click",
        () => {

            const target =
                tab.dataset.tab;


            scheduleTabs.forEach(item => {

                item.classList.remove(
                    "active"
                );

            });


            schedulePanels.forEach(panel => {

                panel.classList.remove(
                    "active"
                );

            });


            tab.classList.add(
                "active"
            );


            const targetPanel =
                document.getElementById(
                    target
                );


            if (targetPanel) {

                targetPanel.classList.add(
                    "active"
                );

            }

        }
    );

});


/* ========================================
   MODAL
======================================== */

const modal =
    document.getElementById("modal");

const modalTitle =
    document.getElementById("modalTitle");

const modalText =
    document.getElementById("modalText");

const modalClose =
    document.getElementById("modalClose");

const modalOK =
    document.getElementById("modalOK");


const modalButtons =
    document.querySelectorAll(
        ".read-button, .photo"
    );


function openModal(title, text) {

    modalTitle.textContent =
        title;

    modalText.textContent =
        text;

    modal.classList.add(
        "show"
    );

}


function closeModal() {

    modal.classList.remove(
        "show"
    );

}


modalButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            openModal(
                button.dataset.title,
                button.dataset.text
            );

        }
    );

});


modalClose.addEventListener(
    "click",
    closeModal
);


modalOK.addEventListener(
    "click",
    closeModal
);


modal.addEventListener(
    "click",
    event => {

        if (
            event.target === modal
        ) {

            closeModal();

        }

    }
);


/* ========================================
   PHÍM ESC ĐÓNG POPUP
======================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeModal();

        }

    }
);


/* ========================================
   TẠO HẠT SÁNG
======================================== */

const particlesContainer =
    document.getElementById(
        "particles"
    );


for (
    let i = 0;
    i < 45;
    i++
) {

    const particle =
        document.createElement(
            "div"
        );


    particle.classList.add(
        "particle"
    );


    particle.style.left =
        Math.random() * 100 + "%";


    particle.style.animationDuration =
        (
            8 +
            Math.random() * 12
        ) + "s";


    particle.style.animationDelay =
        (
            -Math.random() * 10
        ) + "s";


    const size =
        1 +
        Math.random() * 3;


    particle.style.width =
        size + "px";

    particle.style.height =
        size + "px";


    particlesContainer.appendChild(
        particle
    );

}


/* ========================================
   ÁNH SÁNG THEO CHUỘT
======================================== */

document.addEventListener(
    "mousemove",
    event => {

        mouseLight.style.left =
            event.clientX + "px";


        mouseLight.style.top =
            event.clientY + "px";

    }
);


/* ========================================
   NÚT BẬT / TẮT GLOW
======================================== */

let glowEnabled = true;


themeButton.addEventListener(
    "click",
    () => {

        glowEnabled =
            !glowEnabled;


        document.body.classList.toggle(
            "no-glow",
            !glowEnabled
        );


        themeButton.textContent =
            glowEnabled
                ? "◐"
                : "☀";

    }
);


/* ========================================
   KHỞI ĐỘNG
======================================== */

showPage("home");