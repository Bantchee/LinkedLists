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
    
    const size = () => {
        const rec = (x) => {
            if(x === null) {
                return 0;
            }
            else {
                return 1 + rec(x.nextNode);
            }
        };

        return rec(head());
    };

    const tail = () => {
        let pointer = head();
        while(pointer.nextNode != null) {
            pointer = pointer.nextNode;
        }
        return pointer;
    };

    const at = index => {
        try {
            let pointer = head();
            while(index != 0) {
                index--;
                pointer = pointer.nextNode;
            }
            return pointer;
        } 
        catch(err) {
            console.log('Index out of range');
        }
    };

    const pop = () => {
        let pointer = head();
        while(pointer.nextNode.nextNode != null) {
            pointer = pointer.nextNode;
        }
        let lastNode = pointer.nextNode; 
        pointer.nextNode = null;
        return lastNode;

    };

    const contains = value => {
        let pointer = head();
        while(pointer.value() != value && pointer.nextNode != null) {
            pointer = pointer.nextNode;
        }

        return (pointer.value() == value);
    };

    const find = value => {
        let pointer = head();
        let count = 0;
        while(pointer.value() != value && pointer.nextNode != null) {
            pointer = pointer.nextNode;
            count++;
        }

        return (pointer.value() == value) ? count : null;
    }

    const toString = () => {
        const genStr = (x) => {
            if(x == null) {
                return `null`;
            } else {
                return `${x.value()} -> `.concat(genStr(x.nextNode));
            }
        }
        let str = genStr(head());

        return str;
    };

    return {
        head,
        append,
        prepend,
        size,
        tail,
        at,
        pop,
        contains,
        find,
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
console.log(l.size());
console.log(l.tail().value());
console.log(l.at(2).value());
console.log(l.pop());
console.log("LinkedList after pop: ", l.toString());
console.log("Return true if 0 in LinkedList: ", l.contains(0));
console.log("Return true if 3 in LinkedList: ", l.contains(3));
console.log("Return true if 14 in LinkedList: ", l.contains(14));
console.log("Return index 1: ", l.find(0));
console.log("Return index 4: ", l.find(3));
console.log("Return index null: ", l.find(14));