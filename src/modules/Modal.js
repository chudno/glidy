class Modal {
    constructor(selector, { onOpen = () => {}, onClose = () => {} } = {}) {
        this.modal = document.querySelector(selector);
        if (!this.modal) return;

        this.onOpen = onOpen;
        this.onClose = onClose;

        this.closeBtn = this.modal.querySelector("[modal-button-close]");
        this.inner = this.modal.querySelector(".dialog__inner");

        this.init();
    }

    init() {
        // Крестик
        if (this.closeBtn) {
            this.closeBtn.addEventListener("click", (e) => {
                e.preventDefault();
                this.close();
            });
        }

        // Клик вне блока
        this.modal.addEventListener("click", (e) => {
            if (!this.inner.contains(e.target)) {
                this.close();
            }
        });

        // Закрытие по ESC
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && this.modal.open) {
                this.close();
            }
        });
    }

    open() {
        this.modal.open = true;
        document.documentElement.classList.add("is-lock");
        this.onOpen();
    }

    close() {
        this.modal.open = false;
        document.documentElement.classList.remove("is-lock");
        this.onClose();
    }
}

export default Modal;