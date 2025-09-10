const size = Number(prompt("Enter Size of Game Board (3-10):"));
const body = document.getElementsByTagName('body')[0];
const buttons = document.getElementsByTagName('div')[0];
const tb = document.getElementsByTagName('table')[0];
tb.style.opacity = "1";
tb.style.borderCollapse = "collapse";
for (let i = 0; i < size; i++) {
    let tr = document.createElement("tr");
    tr.style.height = "70px";
    tr.style.width = `${size * 70}px`;
    for (let j = 0; j < size; j++) {
        let td = document.createElement("td");
        td.style.height = "70px";
        td.style.width = "70px";
        td.style.border = "2px solid #4682b4";
        td.style.backgroundColor = "#87cefa";
        tr.appendChild(td);
    }
    tb.append(tr);
}
