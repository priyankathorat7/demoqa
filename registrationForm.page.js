class RegistrationFormPage {
  constructor(page) {
    this.page = page;
    this.selectors = {
      firstName: '#firstName',
      lastName: '#lastName',
      email: '#userEmail',
      gender: (gender) => `//label[text()='${gender}']`,
      phone: '#userNumber',
      dobInput: '#dateOfBirthInput',
      subjectInput: '#subjectsInput',
      hobbies: (hobby) => `//label[text()='${hobby}']`,
      uploadPicture: '#uploadPicture',
      address: '#currentAddress',
      state: '#state',
      stateOption: '#react-select-3-option-0',
      city: '#city',
      cityOption: '#react-select-4-option-0',
      submitBtn: '#submit',
      modalTitle: '#example-modal-sizes-title-lg',
      tableRows: 'table tbody tr',
      closeBtn: '#closeLargeModal',
    };
  }

  async removeAds() {
    await this.page.evaluate(() => {
      document.querySelector('footer')?.remove();
      document.querySelector('#fixedban')?.remove();
    });
  }

  async fillForm(data) {
    await this.page.fill(this.selectors.firstName, data.firstName);
    await this.page.fill(this.selectors.lastName, data.lastName);
    await this.page.fill(this.selectors.email, data.email);
    await this.page.click(this.selectors.gender(data.gender));
    await this.page.fill(this.selectors.phone, data.phone);
    await this.page.click(this.selectors.dobInput);
    await this.page.keyboard.press('Control+A');
    await this.page.keyboard.press('Backspace');
    await this.page.type(this.selectors.dobInput, '20 Apr 1990');
    await this.page.keyboard.press('Enter');

    await this.page.type(this.selectors.subjectInput, 'Maths');
    await this.page.waitForTimeout(100);
    await this.page.keyboard.press('Enter');

    await this.page.click(this.selectors.hobbies('Sports'));
    await this.page.click(this.selectors.hobbies('Reading'));

    await this.page.setInputFiles(this.selectors.uploadPicture, 'test-data/test-image.jpeg');

    await this.page.fill(this.selectors.address, data.address);
    await this.page.click(this.selectors.state);
    await this.page.click(this.selectors.stateOption);
    await this.page.click(this.selectors.city);
    await this.page.click(this.selectors.cityOption);
    await this.page.waitForTimeout(100);
    await this.page.click(this.selectors.submitBtn);
  }

  async validateModal(data) {
    await this.page.waitForSelector(this.selectors.modalTitle);
    const title = await this.page.textContent(this.selectors.modalTitle);
    
    if (title !== 'Thanks for submitting the form') 
      throw new Error('Modal title incorrect');
  }
}

module.exports = { RegistrationFormPage };
