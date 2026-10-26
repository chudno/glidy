import OverlayMenu from "@/modules/OverlayMenu.js";
import Modal from "@/modules/Modal.js";

// Refresh the prerendered year without requiring a new build.
const currentYear = String(new Date().getFullYear());
document.querySelectorAll("[data-current-year]").forEach(element => {
    element.textContent = currentYear;
});

new OverlayMenu();

const modal = new Modal(".dialog");

document.querySelectorAll("[modal-button-open]").forEach(btn => {
    btn.addEventListener("click", () => {
        resetUI();     // ← при каждом открытии сбрасываем интерфейс
        modal.open();
    });
});

const modalEl = document.querySelector(".dialog");
const form = modalEl.querySelector("form");
const formWrapper = modalEl.querySelector(".dialog__form-wrapper");
const successBlock = modalEl.querySelector(".dialog__success");
const closeBtn = modalEl.querySelector(".dialog__btn-close");

closeBtn.addEventListener("click", () => modal.close());

const firstNameInput = form.querySelector("input[name='first_name']");
const firstNameError = modalEl.querySelector("[data-error-for='firstName']");

// 🔹 Убираем ошибку при вводе
firstNameInput.addEventListener("input", () => {
    if (firstNameInput.value.trim() !== "") {
        firstNameInput.classList.remove("is-error");
        firstNameError.classList.add("is-hidden");
    }
});

const API_URL = import.meta.env.VITE_API_URL;
const SITE_KEY = "6Lf0QBosAAAAABP8ORsjcSgeeGKg3ko5u2EkSUfQ";

// 🔥 Функция возврата формы в исходное состояние
function resetUI() {
    // показать форму, скрыть "успех"
    formWrapper.classList.remove("is-hidden");
    successBlock.classList.add("is-hidden");

    // очистить форму
    form.reset();

    // очистить ошибки
    firstNameInput.classList.remove("is-error");
    firstNameError.classList.add("is-hidden");
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (firstNameInput.value.trim() === "") {
        firstNameInput.classList.add("is-error");
        firstNameError.classList.remove("is-hidden");
        return;
    }

    let token = "";
    try {
        token = await grecaptcha.execute(SITE_KEY, { action: "submit" });
    } catch (error) {
        console.error("reCAPTCHA error:", error);
        alert("Captcha error, please try again");
        return;
    }

    const formData = new FormData(form);
    formData.append("recaptcha_token", token);

    try {
        await fetch(API_URL, {
            method: "POST",
            body: formData
        });

        // скрываем форму, показываем success
        formWrapper.classList.add("is-hidden");
        successBlock.classList.remove("is-hidden");

        // очищаем форму после успешной отправки
        form.reset();
    } catch (err) {
        console.error("Send error", err);
    }
});
