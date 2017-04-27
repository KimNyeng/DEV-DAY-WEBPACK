const outputParagraph = document.querySelector('#outputParagraph');

const outputRandomInt = () => {
    outputParagraph.textContent = RandomGenerator.randomInteger();
};

const outputRandomRange = () => {
    outputParagraph.textContent = RandomGenerator.randomRange(1,500);
};

buttonRndInt.addEventListener('click',outputRandomInt)
buttonRndRange.addEventListener('click', outputRandomRange);
