const { Producto, Categoria } = require("./models/index.js");
function addBooks({ nombre, precio, descripcion, disponible, genre1 }) {

  Promise.all([

    Producto.create({

      nombre,

      precio,

      descripcion,

      disponible

    }),

    Categoria.findOrCreate({ where: { nombre: genre1 } })

  ])

    .then(([newBook, genre1]) => {

      newBook.setCategoria(genre1[0]);

    })

    .catch(console.log);

}

const libros = [

  (libro1 = {

    nombre: "The Lord of the Rings",

    precio: 15,

    descripcion: `"An extraordinary work -- pure excitement." -- New York Times Book Review

  

      One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them

      

      In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins.

      

      From Sauron's fastness in the Dark Tower of Mordor, his power spread far and wide. Sauron gathered all the Great Rings, but always he searched for the One Ring that would complete his dominion.

      

      When Bilbo reached his eleventy-first birthday he disappeared, bequeathing to his young cousin Frodo the Ruling Ring and a perilous quest: to journey across Middle-earth, deep into the shadow of the Dark Lord, and destroy the Ring by casting it into the Cracks of Doom.

      

      The Lord of the Rings tells of the great quest undertaken by Frodo and the Fellowship of the Ring: Gandalf the Wizard; the hobbits Merry, Pippin, and Sam; Gimli the Dwarf; Legolas the Elf; Boromir of Gondor; and a tall, mysterious stranger called Strider.`,

    disponible: true,

    genre1: "Fantasy"

  }),

  (libro2 = {

    nombre: "Libro sin Nombre",

    precio: 12,

    descripcion: `Lorem ipsum dolor sit amet consectetur adipiscing elit neque, vitae non fames ornare phasellus bibendum a primis, pharetra quam sapien hendrerit curae senectus venenatis. Diam lobortis nibh condimentum iaculis integer vel pretium semper sapien, curae primis platea suscipit accumsan ligula molestie quisque, interdum torquent eleifend feugiat ultrices mollis turpis parturient. Proin lectus primis arcu pharetra natoque bibendum quam est blandit ligula semper, class praesent suspendisse mus facilisi curae risus ultricies posuere.

​

      Nibh malesuada phasellus eros elementum suscipit feugiat ullamcorper, per neque molestie fusce lectus mauris tellus quam, tortor magnis sapien mus leo morbi. Donec proin hendrerit morbi penatibus cum tellus auctor pellentesque, sem nisi cubilia odio nibh duis sollicitudin iaculis ultrices, egestas habitant sagittis dignissim lacinia mattis consequat. Faucibus cras ornare tempor nunc aliquam accumsan felis viverra inceptos, congue curabitur etiam eu ultrices id fermentum fusce, aliquet hendrerit sagittis pharetra lacinia ligula neque laoreet.`,

    disponible: true,

    genre1: "Science"

  }),

  (libro3 = {

    nombre: "Harry Potter and the Goblet of Fire: The Illustrated Edition",

    precio: 28,

    descripcion: `The fourth book in the beloved Harry Potter series, now illustrated in glorious full color by award-winning artist Jim Kay.

​

      Harry Potter wants to get away from the pernicious Dursleys and go to the International Quidditch Cup with Hermione, Ron, and the Weasleys. He wants to dream about Cho Chang, his crush (and maybe do more than dream). He wants to find out about the mysterious event involving two other rival schools of magic, and a competition that hasn't happened for a hundred years. He wants to be a normal, fourteen-year-old wizard. Unfortunately for Harry Potter, he's not normal - even by wizarding standards. And in this case, different can be deadly.

      

      With dazzling illustrations from Jim Kay, this new fully illustrated edition of the complete and unabridged text of Harry Potter and the Goblet of Fire is sure to delight fans and first-time readers alike.`,

    disponible: true,

    genre1: "Adventure"

  }),

  (libro4 = {

    nombre: "Home Truths",

    precio: 10,

    descripcion: `A strong marriage can cope with the unexpected. But can it survive the unimaginable?

​

      American nanny Eleanor was never meant to meet Alex. But when she walks into his London police station to report a stalker, everything changes for them both. He’s convinced he can protect her from anything and anyone. She hopes her darkest days are behind her.`,

    disponible: true,

    genre1: "Psychological Fiction"

  }),

  (libro5 = {

    nombre: "The Way of Kings: Book One of The Stormlight Archive",

    precio: 14,

    descripcion: `Widely acclaimed for his work completing Robert Jordan's Wheel of Time saga, Brandon Sanderson now begins a grand cycle of his own, one every bit as ambitious and immersive.

​

      Roshar is a world of stone and storms. Uncanny tempests of incredible power sweep across the rocky terrain so frequently that they have shaped ecology and civilization alike. Animals hide in shells, trees pull in branches, and grass retracts into the soilless ground. Cities are built only where the topography offers shelter.

      

      It has been centuries since the fall of the 10 consecrated orders known as the Knights Radiant, but their Shardblades and Shardplate remain: mystical swords and suits of armor that transform ordinary men into near-invincible warriors. Wars were fought for them, and won by them. One such war rages on the Shattered Plains. There, Kaladin has been reduced to slavery. In a war that makes no sense, where 10 armies fight separately against a single foe, he struggles to save his men and to fathom the leaders who consider them expendable.

      

      Brightlord Dalinar Kholin commands one of those other armies. Like his brother, the late king, he is fascinated by an ancient text called The Way of Kings. Troubled by visions of ancient times and the Knights Radiant, he has begun to doubt his own sanity.

      

      Across the ocean, an untried young woman named Shallan seeks to train under an eminent scholar and notorious heretic, Dalinar's niece, Jasnah. Though she genuinely loves learning, Shallan's motives are less than pure. As she plans a daring theft, her research for Jasnah hints at secrets of the Knights Radiant and the true cause of the war.`,

    disponible: true,

    genre1: "High Fantasy"

  }),

  (libro6 = {

    nombre: "The Guardians: A Novel",

    precio: 17,

    descripcion: `In this instant #1 New York Times bestseller, John Grisham delivers a classic legal thriller—with a twist.

​

      “Terrific…affecting…Grisham has done it again.”—Maureen Corrigan, The Washington Post

      

      “A suspenseful thriller mixed with powerful themes.”—Associated Press

      

      

      In the small Florida town of Seabrook, a young lawyer named Keith Russo was shot dead at his desk as he worked late one night. The killer left no clues. There were no witnesses, no one with a motive. But the police soon came to suspect Quincy Miller, a young black man who was once a client of Russo’s. 

      

      Quincy was tried, convicted, and sent to prison for life. For twenty-two years he languished in prison, maintaining his innocence.  But no one was listening.  He had no lawyer, no advocate on the outside. In desperation, he writes a letter to Guardian Ministries, a small nonprofit run by Cullen Post, a lawyer who is also an Episcopal minister.

      

      Guardian accepts only a few innocence cases at a time.  Cullen Post travels the country fighting wrongful convictions and taking on clients forgotten by the system. With Quincy Miller, though, he gets far more than he bargained for. Powerful, ruthless people murdered Keith Russo, and they do not want Quincy Miller exonerated.

      

      They killed one lawyer twenty-two years ago, and they will kill another without a second thought.`,

    disponible: true,

    genre1: "Mystery"

  }),

  (libro7 = {

    nombre: "Thin Air (Jessica Shaw Book 1)",

    precio: 15,

    descripcion: `A Washington Post, Wall Street Journal, and Amazon Charts bestseller.

​

      “Lisa Gray explodes onto the literary stage with this taut, edge-of-the-seat thriller, and her headstrong protagonist, Jessica Shaw, reminiscent of Lee Child’s Jack Reacher, delivers a serious punch.” —Robert Dugoni, New York Times bestselling author

      

      Private investigator Jessica Shaw is used to getting anonymous tips. But after receiving a photo of a three-year-old kidnapped from Los Angeles twenty-five years ago, Jessica is stunned to recognize the little girl as herself.

      

      Eager for answers, Jessica heads to LA’s dark underbelly. When she learns that her biological mother was killed the night she was abducted, Jessica’s determined to solve a case the police have forgotten. Meanwhile, veteran LAPD detective Jason Pryce is in the midst of a gruesome investigation into a murdered college student moonlighting as a prostitute. A chance encounter leads to them crossing paths, but Jessica soon realizes that Pryce is hiding something about her father’s checkered history and her mother’s death.

      

      To solve her mother’s murder and her own disappearance, Jessica must dig into the past and find the secrets buried there. But the air gets thinner as she crawls closer to the truth, and it’s getting harder and harder to breathe.`,

    disponible: true,

    genre1: "Mystery"

  })

];
libros.map(e => addBooks(e));