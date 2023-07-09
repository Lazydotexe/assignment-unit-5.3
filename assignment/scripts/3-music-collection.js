console.log('***** Music Collection *****')

const collection = []; //sets 'collection' to an empty array



function addToCollection(title, artist, yearPublished, name = "Add song", diration = 'Add length') { // a function that takes 3 properties; title, artist, yearPublished.
    collection.push({ //this line will 'push' whatever follows to the end of the empty array 'collection'
        "title": title,
        "artist": artist,// these three lines have 3 different properties that will use whatever value you plugged into the function property.
        "yearPublished": yearPublished,
        "tracks": [name, diration]
    });
    return collection[collection.length - 1]; //this line will return the last object you have "pushed" to the array.
}


// I actually got the below idea from helping Ryan. They both do the same thing. Not sure what it best practice.

// function addToCollection(title, artist, yearPublished) {
//     const album = {
//       title: title,
//       artist: artist,
//       yearPublished: yearPublished
//     };
  
    
//     collection.push(album);
  
    
//     return album;
//   }
//.................................................................................................................................................................................


console.log(addToCollection("Jah won't pay the bills", 'Sublime', 1991, "Badfish", "3:05"));
console.log(addToCollection('...And Justice for All', 'Metallica', 1988, "One", "7:26"));
console.log(addToCollection('Hotel California', 'Eagles', 1976, 'Hotel California', '6:31'));
console.log(addToCollection('Ten', 'Pearl Jam', 2000, 'Yellow Ledbetter', '5:03'));
console.log(addToCollection('Only by the Night', 'Kings of leon', 2008, 'Sex on fire', '3:23'));
console.log(addToCollection('Young the Giant', 'Young the Giant', 2010, 'My Body', '4:04'));
console.log(addToCollection('Metallica', 'Metallica', 1991, 'My Friend Misery', '6:49'));
console.log(collection);


//.................................................................................................................................................................................


function showCollection(arr) { //function 'showCollection' that takes one perameter.
    for (let i = 0; i < arr.length; i++) { //if loop that starts at 0 and then increases by one while its less then arr.length
    console.log(`${arr[i].title} by ${arr[i].artist}, published in ${arr[i].yearPublished}`); //this uses the i in the for loop and console logs each property that makes up the [i] index 
    console.log(`1.${arr[i].tracks[0]}: ${arr[i].tracks[1]}`)
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

    //side note. I had the return statement one { up and was not getting the results i wanted. 3 hours in i figured out it needed to be one { down

    
   

// findByArtist('jon');
// findByArtist('Sublime');
// findByArtist('Metallica');
// findByArtist('Eagles');
// console.log(newArr);

//.................................................................................................................................................................................



let newAlbum = [];

function search(artist, year, trackName) {
  newAlbum = [];
   
  
    for (let i = 0; i < collection.length; i++) {
      if (trackName === collection[i].tracks[0]) {
        newAlbum.push(collection[i].tracks[0]); 
        return newAlbum;
      } else if (artist === collection[i].artist && year === collection[i].yearPublished) {
        newAlbum.push(collection[i].title);
        newAlbum.push(collection[i].yearPublished);
      } else if (!artist && !year && !trackName) {
        newAlbum.push(collection[i].title);
        newAlbum.push(collection[i].yearPublished);
      }
    }
  
    return newAlbum;
  }
 

console.log(search('Pearl Jam', 2000, 'Yellow Ledbetter'));
console.log(search('Sublime', 1991,));
console.log(search('Metallica', 1988));

//I THINK this is what the stretch goal was asking for but i'm not sure. 





