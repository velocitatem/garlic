class Garlic {

    static clove(element) {
        // if the element is a text node
        if (element.nodeType === 3) {
            // convert the text to base64
            element.textContent = btoa(element.textContent);
        }
        // if the element has children
        if (element.childNodes) {
            // loop through the children
            for (let i = 0; i < element.childNodes.length; i++) {
                // recursively call the function on the child
                Garlic.clove(element.childNodes[i]);
            }
        }
        // return the element
        return element;
    }

    static addSalt(salt) {
        // set a static variable to the salt
        this.salt = "_yummy_" + salt;
        document.salt = salt;
    }

    static encode(string) {
        return btoa(string+(this.salt || ""));
    }
    static decodeBase64(root) {
        for (let i = 0; i < root.childNodes.length; i++) {
            const child = root.childNodes[i];
            if (child.childNodes.length === 1 && child.childNodes[0].nodeType === 3) {
                const decoded = atob(child.childNodes[0].nodeValue).split("_yummy_")[0];
                child.innerHTML = decoded;
                console.log(child);
            } else {
                this.decodeBase64(child);
            }
        }
    }


    static peal(document, id) {
        document.addEventListener("DOMContentLoaded", function() {
            Garlic.decodeBase64(document.getElementById(id));
        });
    }
}



export default Garlic;
