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


// I actually got the below idea from helping Ryan. They both do the same thing. Not sure what it best practice.

// function addToCollection(title, artist, yearPublished) {
//     const record = {
//       title: title,
//       artist: artist,
//       yearPublished: yearPublished
//     };
  
    
//     collection.push(record);
  
    
//     return record;
//   }
//.................................................................................................................................................................................


console.log(addToCollection('Badfish', 'Sublime', 1991));
console.log(addToCollection('One', 'Metallica', 1988));
console.log(addToCollection('Hotel California', 'Eagles', 1976));
console.log(addToCollection('Yellow Ledbetter', 'Pearl Jam', 2000));
console.log(addToCollection('Sex on fire', 'Kings of leon', 2008));
console.log(addToCollection('My body', 'Young the Giant', 2010));
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

const newArr = [];

function findByArtist(artist) { // sets a function that takes the property 'artist'
    for (let i = 0; i < collection.length; i++) { //for loop the starts at 0 and adds 1 every itteration
        if (collection[i].artist === artist) { // compares collection array at index [i] coupled with 'artist' property in the object to the 'artist' input from the function
            newArr.push(artist); // if true then the .push will add that artist  to the newArr
            
            
        } 
            
        }
        return newArr;// if no artist is matched then the array is returned empty
    }

    //side note. I hade the return statement one { up and was not getting the results i wanted. 3 hours in i figured out it needed to be one { down

    
   

findByArtist('jon');
findByArtist('Sublime');
findByArtist('Metallica');
findByArtist('Eagles');
console.log(newArr);



