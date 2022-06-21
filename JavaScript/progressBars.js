 const progressBarValue = '.health-bar-value';
 const progressBarFill = '.health-bar-fill';
 const progressBar = '.health-bar';

class ProgressBar {
    constructor(element, initialValue = 0) {
        this.valueElem = element.querySelector(progressBarValue);
        this.fillElem = element.querySelector(progressBarFill);

        this.setValue(initialValue);
    }
    setValue(newValue) {
        if (newValue < 0) {
            newValue = 0;
        }
        if (newValue > 100) {
            newValue = 100;
        }

        this.value = newValue;
        this.update();
    }

    update() {
        const percentage = this.value + '%';

        this.fillElem.style.width = percentage;
        this.valueElem.textContent = percentage;
    }
}
const healthBar = new ProgressBar(document.querySelector(progressBar), 75);
/*healthBar.setValue(50)*/
