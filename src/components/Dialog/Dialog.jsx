import "./Dialog.scss"
import Icon from "@/components/Icon/Icon.jsx"
import Button from "@/components/Button/Button.jsx"

const formData = [
  { name: "first_name", placeholder: "First Name", type: "text" },
  { name: "last_name", placeholder: "Last Name", type: "text" },
  { name: "job_title", placeholder: "Job title", type: "text" },
  { name: "company", placeholder: "Company", type: "text" },
  { name: "work_email", placeholder: "Work email", type: "email" },
  { name: "telegram", placeholder: "Telegram", type: "text" },
  { name: "phone_number", placeholder: "Phone number", type: "tel" },
  { name: "company_website", placeholder: "Company website", type: "url" },
  { name: "volume", placeholder: "Volume", type: "text" },
]

const Dialog = () => {
  return (
    <dialog className="dialog" modal={''}>
      <div className="dialog__backdrop"></div>
      <div className="dialog__inner">
        <button className="dialog__close-dialog" type={'button'} modal-button-close={''}>
          <Icon name="close" />
        </button>
        <div className={'dialog__form-wrapper'}>
          <h3 className="dialog__title">Contact Us</h3>
          <form className="dialog__main">
            <div className="dialog__main-body">
              {formData.map((field, index) => (
                  <div className={'dialog__control'} key={index}>
                    <input
                        className="dialog__input"
                        placeholder={field.placeholder}
                        type={field.type}
                        name={field.name}
                    />
                    {field.name === 'first_name' &&
                        (<div className="dialog__error is-hidden" data-error-for="firstName">
                          Обязательное поле
                        </div>)
                    }
                  </div>
              ))}
            </div>
            <div className="dialog__main-footer">
            <textarea
                className="dialog__textarea"
                placeholder="Comment"
                name="comment"
            ></textarea>
              <Button
                  type={'submit'}
                  className="dialog__send"
                  label="Send"
              />
            </div>
          </form>
        </div>

      {/* Контент, который появляется после успешной отправки */}
        <div className={'dialog__success is-hidden'}>
          <h3 className="dialog__success-title">Success
            Application submitted successfully
          </h3>
          <div className="dialog__success-description">
              <p>
                We’ll be in touch with you soon
              </p>
          </div>
          <Button
              type={'button'}
              className="dialog__btn-close"
              label="Close"
              extraAttrs={{'modal-button-close': ''}}
          />
        </div>
      </div>
    </dialog>
  )
}

export default Dialog
