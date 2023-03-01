
class Garlic {

    static clove(body) {
        let bodyCopy = {...body};
        if (body.props) {
            if (body.props.children) {
                // check if children is an array
                if (Array.isArray(body.props.children)) {
                    let newList = []
                    for (let i = 0; i < body.props.children.length; i++) {
                        // if child is a string, convert it to base64
                        if (typeof body.props.children[i] === 'string') {
                            newList.push(this.encode(body.props.children[i]));
                        } else {
                            // if child is not a string, apply this function to it
                            newList.push(this.clove(body.props.children[i]));
                        }
                    }
                    bodyCopy = {...bodyCopy, props: {...bodyCopy.props, children: newList}};
                } else {
                    // if child is a string, convert it to base64
                    if (typeof body.props.children === 'string') {
                        bodyCopy = {...body, props: {...body.props, children: this.encode(body.props.children)}};
                    } else {
                        bodyCopy = {...body, props: {...body.props, children: this.clove(body.props.children)}};
                    }
                }
            }
        }
        return bodyCopy;
    }

    static addSalt(salt) {
        // set a static variable to the salt
        this.salt = "_yummy_" + salt;
        document.salt = salt;
    }

    static encode(string) {
        return btoa(string+this.salt);
    }
}

export default Garlic;
/*

  <script>

</script>
*/
