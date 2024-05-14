// *Question 43:* Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
// *Explain & TIP:* Creating a copy of an array before modifying it allows you to maintain the original data. This exercise demonstrates array copying and manipulation.
var magicians = ["Alice", "David", "Chris"];
function make_great(magicians) {
    var greatagicians = [];
    magicians.forEach(function (magician) {
        greatMagicians.push("".concat(magician, " the Great"));
    });
    return greatMagicians;
}
var greatMagicians = make_great(magicians.slice()); // Creates a new modified array
