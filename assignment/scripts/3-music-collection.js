console.log('***** Music Collection *****')

const collection = []; //sets 'collection' to an empty array



function addToCollection(title, artist, yearPublished) { // a function that takes 3 properties; title, artist, yearPublished.
    collection.push({ //this line will 'push' whatever follows to the end of the empty array 'collection'
        "title": title,
        "artist": artist,// these three lines have 3 different properties that will use whatever value you plugged into the function property.
        "yearPublished": yearPublished
    });
    return collection[collection.length - 1]; //this line will return the last object you have "pushed" to the array.
}
//.................................................................................................................................................................................


console.log(addToCollection('Badfish', 'sublime', 1991));
console.log(addToCollection('One', 'Metallica', 1988));
console.log(addToCollection('Hotel California', 'Eagles', 1976));
console.log(addToCollection('Yellow Ledbetter', 'Pearl Jam', 2000));
console.log(addToCollection('Sex on fire', 'Kings of leon', 2008));
console.log(collection);


//.................................................................................................................................................................................


function showCollection(arr) { //function 'showCollection' that takes one perameter.
    for (let i = 0; i < arr.length; i++) { //if loop that starts at 0 and then increases by one while its less then arr.length
    console.log(`${arr[i].title} by ${arr[i].artist}, published in ${arr[i].yearPublished}`); //this uses the i in the for loop and console logs each property that makes up the [i] index 
    }
    return console.log(arr.length); //this line will just return the length of whatever property (array) you use
}

showCollection(collection);

//.................................................................................................................................................................................





