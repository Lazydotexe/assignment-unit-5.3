console.log('***** Music Collection *****')

const collection = [];



function addToCollection(title, artist, yearPublished) {
    collection.push({
        "title": title,
        "artist": artist,
        "yearPublished": yearPublished
    });
}

addToCollection('Badfish', 'sublime', 1990)
addToCollection('One', 'Metallica', 1990)
console.log(collection);


