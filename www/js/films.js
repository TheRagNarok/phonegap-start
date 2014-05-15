var filmdb;

<!----------------------------------- first time running -------------------------------------------------->

var items = new Array();


var films = [
    { genreA:'Mystery',  genreB:'Adventure', title: 'Todo list page', year: '2014', fave: 'Remove from watch list' },
    { genreA:'Romance',  genreB:'Comedy',    title: 'Search page', year: '2014',fave: 'Remove from watch list' },
    { genreA:'Action',   genreB:'Adventure', title: 'Harry Potter and the Philosophers Stone', year: '2001', fave: 'z'},
    { genreA:'Musical',  genreB:'Thriller',  title: 'Harry Potter and the Chamber of Secrets', year: '2002', fave: 'on watch'},
    { genreA:'Western',  genreB:'Comedy',    title: 'Harry Potter and the Prisoner of Azkaban', year: '2004',fave: 'Remove from watch list'},
    { genreA:'Scifi',    genreB:'Musical',   title: 'Harry Potter and the Goblet of Fire', year: '2005', fave: 'Remove from watch list'},
    { genreA:'Thriller', genreB:'Historical',title: 'Harry Potter and the Order of the Phoenix', year: '2007', fave: 'z'},
    { genreA:'Horror',   genreB:'Fantasy',   title: 'Harry Potter and the Half-Blood Prince', year: '2009', fave: 'on watch'},
    { genreA:'Western',  genreB:'Action',    title: 'Harry Potter and the Deathly Hallows – Part 1', year: '2010', fave: 'on watch'},
    { genreA:'Horror',   genreB:'Mystery',   title: 'Harry Potter and the Deathly Hallows – Part 2', year: '2011', fave: 'z'}
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





