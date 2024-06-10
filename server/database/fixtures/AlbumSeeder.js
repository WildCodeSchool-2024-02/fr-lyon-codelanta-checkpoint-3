// const AbstractSeeder = require("./AbstractSeeder");

// class AlbumSeeder extends AbstractSeeder {
//   constructor() {
//     super({ table: "album", truncate: true });
//   }

//   run() {
//     const albums = [
//       { title: "Hey", genre: "pop", image: 1, artist: "apple", track: "A" },
//       {
//         title: "Hello",
//         genre: "metal",
//         image: 2,
//         artist: "orange",
//         track: "B",
//       },
//       {
//         title: "Salut",
//         genre: "electro",
//         image: 3,
//         artist: "lemon",
//         track: "C",
//       },
//       {
//         title: "Bonjour",
//         genre: "dance",
//         image: 4,
//         artist: "grape",
//         track: "D",
//       },
//     ];

//     albums.forEach((album) => {
//       this.insert(album); // insert into album(title, genre, ) values (?, ?, ?)
//     });
//   }
// }

// module.exports = AlbumSeeder;
