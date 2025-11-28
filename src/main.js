import OverlayMenu from "@/modules/OverlayMenu.js";
import Modal from "@/modules/Modal.js";

new OverlayMenu();

const modal = new Modal(".dialog");

document.querySelectorAll("[modal-button-open]").forEach(btn => {
    btn.addEventListener("click", () => modal.open());
});

const modalEl = document.querySelector(".dialog");
const form = modalEl.querySelector("form");
const formWrapper = modalEl.querySelector(".dialog__form-wrapper");
const successBlock = modalEl.querySelector(".dialog__success");
const closeBtn = modalEl.querySelector(".dialog__btn-close");

closeBtn.addEventListener("click", () => modal.close());

const firstNameInput = form.querySelector("input[name='first_name']");
const firstNameError = modalEl.querySelector("[data-error-for='firstName']");

// 🔹 1. Убираем ошибку при вводе
firstNameInput.addEventListener("input", () => {
    if (firstNameInput.value.trim() !== "") {
        firstNameInput.classList.remove("is-error");
        firstNameError.classList.add("is-hidden");
    }
});

const API_URL = import.meta.env.VITE_API_URL;
const SITE_KEY = '6Lf0QBosAAAAABP8ORsjcSgeeGKg3ko5u2EkSUfQ';

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // 🔹 2. Проверяем только после клика на Send
    if (firstNameInput.value.trim() === "") {
        firstNameInput.classList.add("is-error");
        firstNameError.classList.remove("is-hidden");
        return;
    }

    // ❗ Берём токен от Google reCAPTCHA v3
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

        formWrapper.classList.add("is-hidden");
        successBlock.classList.remove("is-hidden");
    } catch (err) {
        console.error("Send error", err);
    }
});
