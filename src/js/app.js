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
        d3HelloworldRemove(secretHelloworld);
    } else {
        secretButton.textContent = '버튼 누른 후 ~';


        d3HelloworldRemove(secretHelloworld);
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
function d3HelloworldRemove(select) {
    d3HelloworldSelect(select).select("h2").remove();
}

function d3HelloworldSelect(select) {
    return d3.select(select);
}

function d3HelloworldInsert(select, update) {
    let helloworld = d3HelloworldSelect(select);
    update(helloworld);
}

function updateSecretParagraph() {
    if (showSecret) {
        secretParagraph.style.display = 'block';
    } else {
        secretParagraph.style.display = 'none';
    }
}