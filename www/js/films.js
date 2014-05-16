var filmdb;

<!----------------------------------- first time running -------------------------------------------------->

var items = new Array();


var films = [

    { genreA:'Action',   genreB:'Adventure', title: 'Harry Potter and the Philosophers Stone', fave: 'Add to watch list'},
    { genreA:'Musical',  genreB:'Thriller',  title: 'Harry Potter and the Chamber of Secrets',  fave: 'Add to watch list'},
    { genreA:'Western',  genreB:'Comedy',    title: 'Harry Potter and the Prisoner of Azkaban',  fave: 'Remove from watch list'},
    { genreA:'Scifi',    genreB:'Musical',   title: 'Harry Potter and the Goblet of Fire', fave: 'Remove from watch list'},
    { genreA:'Thriller', genreB:'Historical',title: 'Harry Potter and the Order of the Phoenix', fave: 'Add to watch list'},
    { genreA:'Horror',   genreB:'Fantasy',   title: 'Harry Potter and the Half-Blood Prince',fave: 'Add to watch list'},
    { genreA:'Western',  genreB:'Action',    title: 'Harry Potter and the Deathly Hallows – Part 1', fave: 'Add to watch list'},
    { genreA:'Horror',   genreB:'Mystery',   title: 'Harry Potter and the Deathly Hallows – Part 2', fave: 'Add to watch list'},
	{ genreA:'Action',   genreB:'Historical',   title: 'Gladiator', fave: 'Add to watch list'},
	{ genreA:'Scifi',    genreB:'Fantasy',   title: 'Avatar', fave: 'Add to watch list'},
	{ genreA:'Romance',  genreB:'Historical',   title: 'Titanic', fave: 'Add to watch list'},
	{ genreA:'Scifi',    genreB:'Action',   title: 'The Avengers', fave: 'Add to watch list'},
	{ genreA:'Scifi',    genreB:'Action',   title: 'Iron Man 3', fave: 'Add to watch list'},
	{ genreA:'Scifi',    genreB:'Action',   title: 'Iron Man 2', fave: 'Add to watch list'},
	{ genreA:'Scifi',    zgenreB:'Action',   title: 'Iron Man', fave: 'Add to watch list'},
];



var genre = [
  { value:'Action',	    id:'ac', id2:'act', img:'css/themes/images/gpAction.png' },
  { value:'Adventure',	id:'ad', id2:'adv', img:'css/themes/images/gpAdventure.png' },
  { value:'Comedy', 	id:'co', id2:'com', img:'css/themes/images/gpComedy.png' },
  { value:'Fantasy',	id:'fa', id2:'fan', img:'css/themes/images/gpFantasy.png' },
  { value:'Historical', id:'hi', id2:'his', img:'css/themes/images/gpHistorical.png' },
  { value:'Horror', 	id:'ho', id2:'hor', img:'css/themes/images/gpHorror.png' },
  { value:'Mystery',	id:'my', id2:'mys', img:'css/themes/images/gpMystery.png' },
  { value:'Musical',	id:'mu', id2:'mus', img:'css/themes/images/gpMusical.png' },
  { value:'Romance', 	id:'ro', id2:'rom', img:'css/themes/images/gpRomance.png' },
  { value:'Scifi',      id:'sc', id2:'sci', img:'css/themes/images/gpScifi.png' },
  { value:'Thriller',   id:'th', id2:'thr', img:'css/themes/images/gpThriller.png' },
  { value:'Western',    id:'we', id2:'wes', img:'css/themes/images/gpWestern.png' },
];





