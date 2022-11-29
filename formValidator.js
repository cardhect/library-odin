export function formValidate() {
    console.log('form validating commense.....');
    const titleInput = document.getElementById('title');

    titleInput.addEventListener("input", (Event) => {
        if (titleInput.validity.typeMistach) {
            titleInput.setCustomValidity("I am expecting an e-mail address!");
            titleInput.reportValidity();
        } else {
            titleInput.setCustomValidity("");
        }
      
        
    })
}
