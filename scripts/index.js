const linkedList = () => {
    let HEAD = null;

    const head = () => {
        return HEAD;
    };

    const append = (value) => {
        if(HEAD == null) {
            HEAD = node(value);
        } 
        else {
            let pointer = HEAD;

            while (pointer.nextNode != null) {
                pointer = pointer.nextNode;
            }
            pointer.nextNode = node(value);
        }
    };

    const prepend = (value) => {
        // Null
        if(HEAD == null) {
            HEAD = node(value);
        }
        // Node
        else {
            let newNode = node(value);
            newNode.nextNode = HEAD;
            HEAD = newNode;
        }
    };

    const toString = () => {
        const genStr = (x) => {
            if(x == null) {
                return `null`;
            } else {
                return `${x.value()} -> `.concat(genStr(x.nextNode));
            }
        }
        let str = genStr(head());

        console.log(str);
    }

    return {
        head,
        append,
        prepend,
        toString,
    };
}

const node = (val = null, nextNode = null) => {
    const value = () => {
        return val;
    };

    return Object.assign(
        {},
        {value},
        {nextNode},
    );
}

// let x = node(0, null);
// let y = node(1, x);
// let z = node(2, y);

// console.log(z.value());
// console.log(z.nextNode.value());
// console.log(z);

let l = linkedList();
for(let i = 0; i < 5; i++) {
    l.append(i);
}
l.prepend(21)

console.log(l.head().value());
console.log(l.head().nextNode.value());
console.log(l.toString());
