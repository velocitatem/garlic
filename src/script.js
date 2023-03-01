function decodeBase64(root) {
    for (let i = 0; i < root.childNodes.length; i++) {
        const child = root.childNodes[i];
        if (child.childNodes.length === 1 && child.childNodes[0].nodeType === 3) {
            const decoded = atob(child.childNodes[0].nodeValue).split("_yummy_")[0]
            child.innerHTML = decoded;
            console.log(child);
        } else {
            decodeBase64(child);
        }
    }
}
// when document is ready, decode the base64
document.addEventListener("DOMContentLoaded", function(event) {
    decodeBase64(document.getElementById("root"));
});
