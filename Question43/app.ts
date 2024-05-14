// *Question 43:* Unchanged Magicians: Preserve the original magician names while creating a new "great" list.

// *Explain & TIP:* Creating a copy of an array before modifying it allows you to maintain the original data. This exercise demonstrates array copying and manipulation.
let magicians: string[] = ["Alice", "David", "Chris"];

function make_great(magicians: string[]): string[] {
    let greatmagicians = [];
    magicians.forEach(magician => {
        greatmagicians.push(`${magician} the Great`);
    });
    return greatmagicians;
}

 make_great(magicians); // Creates a new modified array
