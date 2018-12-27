import React from "react"
import {MDCDialog} from '@material/dialog';
import {MDCTextField} from '@material/textfield';

class FormDialog extends React.Component {
  componentDidMount() {
    this.dialog = MDCDialog.attachTo(document.querySelector('.mdc-dialog'))
    this.dialog.listen('MDCDialog:closing', (event) => {
      let values = {}
      let action = false
      let [name_input, photo_input] = [document.querySelector('#pet_name'), document.querySelector('#pet_photo')]
      if(event.detail.action === "yes") {
        action = true
        values = {
          name: name_input.value,
          photo: photo_input.value
        }
      }
      name_input.value = ''
      photo_input.value = ''
      this.props.onClose(action, values)
    })
    new MDCTextField(document.querySelector('#text-field-pet_name'))
    new MDCTextField(document.querySelector('#text-field-pet_photo'))
  }

  componentWillUnmount() {
    this.dialog.destroy()
  }

  componentDidUpdate() {
    if(this.props.open) {
      this.dialog.open()
    } else {
      this.dialog.close()
    }
  }

  render () {
    return (
      <div className="mdc-dialog mdc-dialog--scrollable standard-dilog-form"
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="my-dialog-title"
          aria-describedby="my-dialog-content">
        <div className="mdc-dialog__container">
          <div className="mdc-dialog__surface">
            <h2 className="mdc-dialog__title" id="dialog-title">{this.props.title}</h2>
            <div className="mdc-dialog__content" id="dialog-content">

              <div className="padding-top__medium">
                <div id="text-field-pet_name" className="mdc-text-field mdc-text-field--outlined text-field-rounded">
                  <input type="text" id="pet_name" className="mdc-text-field__input" />
                  <div className="mdc-notched-outline">
                    <div className="mdc-notched-outline__leading" />
                    <div className="mdc-notched-outline__notch">
                      <label htmlFor="pet_name" className="mdc-floating-label">Name</label>
                    </div>
                    <div className="mdc-notched-outline__trailing" />
                  </div>
                </div>
              </div>

              <div className="padding-top__medium">
                <div id="text-field-pet_photo" className="mdc-text-field mdc-text-field--outlined text-field-rounded">
                  <input type="text" id="pet_photo" className="mdc-text-field__input" />
                  <div className="mdc-notched-outline">
                    <div className="mdc-notched-outline__leading" />
                    <div className="mdc-notched-outline__notch">
                      <label htmlFor="pet_photo" className="mdc-floating-label">Photo URL</label>
                    </div>
                    <div className="mdc-notched-outline__trailing" />
                  </div>
                </div>
              </div>
            </div>
            <footer className="mdc-dialog__actions">
              <button type="button" className="mdc-button mdc-dialog__button" data-mdc-dialog-action="no">Cancel</button>
              <button type="button" className="mdc-button mdc-button--raised mdc-dialog__button" data-mdc-dialog-action="yes">Create</button>
            </footer>
          </div>
        </div>
        <div className="mdc-dialog__scrim"></div>
      </div>
    )
  }
}

export default FormDialog