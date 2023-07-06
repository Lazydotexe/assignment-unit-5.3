console.log('***** Music Collection *****')

const collection = []; //sets 'collection' to an empty array



function addToCollection(title, artist, yearPublished) { // a function that takes 3 properties; title, artist, yearPublished.
    collection.push({ //this line will 'push' whatever follows to the end of the empty array 'collection'
        "title": title,
        "artist": artist,// these three lines have 3 different properties that will use whatever value you plugged into the function property.
        "yearPublished": yearPublished
    });
    return collection[collection.length - 1] //this line will return the last object you have "pushed" to the array.
}
//.................................................................................................................................................................................
function showCollection(Array) {
    for (let i = 0; i < Array.length; 1++)
    console.log(Array.length);
    console.log()

}








//.................................................................................................................................................................................

addToCollection('Badfish', 'sublime', 1991)
addToCollection('One', 'Metallica', 1988)
addToCollection('Hotel California', 'Eagles', 1976)
addToCollection('Yellow Ledbetter', 'Pearl Jam', 2000)
// let record5 = addToCollection('My body', 'Young the Giant', 2010)
addToCollection('Sex on fire', 'Kings of leon', 2008)
console.log(collection);
// console.log(record5)





