import { secretButton, secretParagraph, secretHelloworld } from './dom-loader';

var showSecret = true;

secretButton.addEventListener('click', toggleSecretState);

function toggleSecretState() {
    showSecret = !showSecret;
    updateSecretParagraph();
    updateSecretButton();
}

function updateSecretButton() {
    if (showSecret) {
        secretButton.textContent = '버튼 누르기 전 ~';
        d3HelloworldRemove(secretHelloworld, "h2");
    } else {
        secretButton.textContent = '버튼 누른 후 ~';

        d3HelloworldRemove(secretHelloworld, "h2");
        d3HelloworldInsert(secretHelloworld, function (select) {
            select.append("h2")
                .text("Hello, 연구소!")
                .style("text-align", "center")
                .style("line-height", "320px")
                .style("font-size", "100px")
                .style("transform", "rotate(-180deg) scale(0.001, 0.001)")
                .transition()
                .duration(1500)
                .style("transform", null);
        });

    }
}

function d3HelloworldRemove(select, attr) {
    d3HelloworldSelect(select).select(attr).remove();
}

function d3HelloworldSelect(select) {
    return d3.select(select);
}

function d3HelloworldInsert(select, update) {
    update(d3HelloworldSelect(select));
}

function updateSecretParagraph() {
    if (showSecret) {
        secretParagraph.style.display = 'block';
    } else {
        secretParagraph.style.display = 'none';
    }
}

function updateSecretParagraph() {
    if (showSecret) {
        secretParagraph.style.display = 'block';
    } else {
        secretParagraph.style.display = 'none';
    }
}