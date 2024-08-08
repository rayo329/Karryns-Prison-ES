const ENEMY_NAMES_GENERIC_SP = [
	"Ren", "Jorge", "Jack", "Dan", "Christian", "Alex", "Early", "Costa",
	"Henning", "Thomas", "Bern", "Nikita", "Egor", "Max", "Robert", "Wojtek", "Boris", "Oleg", "Jayden", "Kyle", "Cameron",
	"Shaun", "Hayden", "Town", "Satoshi", "Kei", "Jimmy", "Deck", "Bob", "Barry", "Brock", "Angus",
	"Lucas", "Felipe", "Andre", "Carr", "Luis", "Lewie", "Ramon", "Hugo", "Jean", "Ash", 
	"Saul", "Dog", "Ben", "Nicolas", "Victor", "Sebastian", "Seb", "Noah", "Peter", "Jason", "Ham", 
	"Konstantin", "Kim", "Junho", "Park", "Sung", "Dong", "Ming", "Yang", "Zen", "Zhao", "Peng", "Chan", "Asif",
	"Asmat", "Amer", "Solomon", "Nassim", "Jean-Paul", "Jose", "Guelo", "Young", "Yazen", "Lee", "Kai",
	"Syahmi", "Omar", "Elijah", "Blake", "Cesar", "Kasper", "Frej", "Hugo", "Penny", "Zhen", "Pasha",
	"Isaiah", "Miles", "Takashi", "Geo", "Satoshi", "Keita", "Hentaro", "Taro", 
	"Lance", "Stone", "Bullet", "Yamazaki", "Miyazaki", "Terri", "Park", "Found", "Shadow", "Clone", "Band", "Armstrong",
	"Ali", "Yonder", "Yellow", "Vlock", "Hammer", "Pest", "Quentin", "Hara", "Yi", "Sun", "Xeno", "Zest", "Ump", "Hide",

	
	"Purps", "Victor", "Solstorm", "Hercules", "Cerayn", //March Patreons
	"Fizrik", "Blaze", "Lenny", "Buoy", "Cloudz", "Wawi", "Marcos", //March Discord Bonus
	"Fizrik", "Kuroda", "Rimuru", "Apsabo", //March Twitter Bonus
	"Rotgut", "Edward Dimey", "Mac Greedy", "Dan Sturdy", "Bob Larkin", "Mefo", "Chris Picout", //July Patreons
	"Wolfrath", "Daimiander", "Dave", "Demitri", "Yarrick", "Xavier", "Ray", "Strider", "Akuma", "Zarton", "Cain", "Christophe" //July Patreons
];


const ENEMY_NAMES_THUG_SP = [
	"Rumble", "Crane", "Tommy", "Juan", "JR", "Diogo", "Johnson", "Carl", "Larry", "Johnny", "Khalid", "Kenji", "Tank", "Dick", 
	"Mouse", "Horse", "Lin", "Wood", "Niko", "Marco", "Michael", "Junior", "Dam", "Violet", "West", "Chicken", "Nico", "Pierce",
	"Trevor", "Lopez", "Joey", "Franklin", "Frankie", "Toast", "Santa",

	"Marcos", "Kavika", "Heksar", "Biggs", "Aidan", "Wedge", "Anton", "Adriel Diaz", "Meepsta Bone" //April Patreons
];


const ENEMY_NAMES_GOBLIN_SP = [
	"Drink", "Prot", "Kielk", "Gozz", "Ralb", "Lil-Sruigs", "Wryhic", "Duct", "Tag", "Beezz-Criz", "Urx-Tuiz",
	"Odd-Sloq", "Sric", "Tomreek", "Green-Brong", "Ung", "Sluld", "Pleq", "Trex", "Ziok", "Zuir", "Frogs", 
	"Uklirm", "Zuizz", "Clubtiong", "Ig-Ugs", "Srilb-Srilb", "Yzdozz", "Iron-Omort", "Fikt", "Wrets-Wrulb",
	
	"Zeek-Beek", "Grem-lin", "Gob", "Little-Big-Bum" //May Patreons
];


const ENEMY_NAMES_NERD_SP = [
	"Carl", "Glasses", "Kielk", "Timmy", "Jimmy", "Karl", "Nigel", "Ray", "Donk", "Verbal", "Kanye",
	"Sheldon", "Grandius", "Senn", "Cronk", "Hifumi", "Genchi", "Hikafu", "Azkhal", "Wendel", 
	"Alexander", "Rhinon", "Tyler", "Noir", "Kebler", "Folk", "Dweeb", "Melvin", "Wehraboo", "Ryuke", 
	"Rein", //August Patreons
	
	"Atomic Garry", "Ben Dover", "John Davis", "Chris Crepeau", "Nick McNerdy", 
	"Gee Willy", "Karl Mummyd" //August Patreons
];


const ENEMY_NAMES_ROGUE_SP = [
	"Raynold", "Whisper", "Kavika", "Wade", "Yeet", "Jacques", "Jahnny", "Connor", 
	"Silence", "Hanzo", "Jexx", "Nakamura", "Yuta", "Valand", "Danzo", "Wilson", 
	"Hiden", "Morit", "Monka", "Kirin", "Pierro", //October Patreons
	
	"Sneaky", "Back Stabbeth", "Grabby", "Seikuro", "Kenny", 
	"Yuu Taiga", "Binzhen Lee", "Johnny Quick", "Ben Dover", "Sneaky" //October Patreons
	
];


const ENEMY_NAMES_HOMELESS_SP = [
	"Staubhold", "Blink", "Zass", "Gary", "Smelly", "Aloysius", "Rajing", "Rich",
	"Bruce", "Roger", "Harang", "Boggs", "Yu", "Demitri", "Mortimer", "Donovan",
	"Hanssen", "Somkiet", "Blanch", "Greg", "Mason", "Tyrone", "Bob", "James",
	"Nathan", "Jibada", "Ejvind", "Robert", "Mustafa", "Rick", "Bobandy", "Kang",
	"Goon", "Jimmi", "Yong", "Donald", "David", "Strider", "Luis", "Quark",
	"Wasuri", "Ronald", "Raven", "Edmin", "Elbert", "Hank", "Han", "Gregor",
	"Kars", "Books", "Mangbug", "Mxy", "Scruffy", //November Subscribers
	
	"Stinky", "Lazlo", "Dirty Mike", "Oscar", "Hung Lo", "Wilhelm", "Stick", "Harry Dick",
	"Lester", "Kris", "Jacky", "Gary", "Bevys", "Nasty Nate", "Janitor" //November Subscribers
];


const ENEMY_NAMES_LIZARDMAN_SP = [
	"Iggy", "Potoh", "Skydra", "Brygg", "Nimwald", "Frerichs", "Ken", "Gwarr", 
	"Snapjaw", "Bruford", "Reznor", "Luscious", "Gabeero", "Lyzel", "Stanley", "Snape", 
	"Scales", "Shnake", "Ralf", "Jacha", "Rick", "Zirran", "Zaggy", "Kabo", 
	"Thunka", "L'Zard", "Komodo", "Zake", "Amigo", "Nix", "Scytalis", "Dan", 
	"Kroc", "Zard", "Argon", "Wisrain", "Vakaz", "Sally", "Ulgrog", "Sobek", 
	"Zalfos", "Albin", "Aeon", "Dolan", "Nelgar", "Hawk", "Skrssh", "Gunther", 
	"Squergal", "Katsuki", "Hemipenes", "Helrunna", "Pepe", "Chakax", "Zikcar", "Sarzar", 
	"Sheep", "Maynard", "Girthzio", //July Patreons
	
	"Bengor", "Slippy", "Jakozski", "Sir Serpento", "Spine Tail", "Zig Zig", "Shasha", "Prayut", 
	"Ome Likyu", "Krocodile", "Lizard Wizard", "Sexasaur", "Chun Ai", "Biol Lante", "Sixsheep", 
	"Boa Rectum", "Lifts Tail", "Jaree-Ra", "Luckzor", "Jeffrey", "Witval", "Horatio"
	//July Patreons
];


const ENEMY_NAMES_ORC_SP = [
	"Yang", "Gronk", "Mikey", "Telly", "Quack", "Allard", "Hargy", "Raggy", "Buckbuck", "Bibingka", "Derek",
	"Spoutnik", "Titan", "Sigwald", "Poodle", "Pipo", "Dandelion", "Brutus", "Mork", "Rhorog", "Bruh", "Rotad",
	"Bog", "Dante", "Chonk", "Skrukk", "Wolfgang", "Alexios", "Grognak", "Kangbo", "Gorok", "Marcus", "Rai",
	"Luurdik", "Marcos", "Gob", "Mikhail", "Pog", "Strolch", "Graphene", "Dhorakil", "Gonad", "Higgard", "Jabroni",
	"Laika", "Jimothy", "Khalify", "Gregory", "Mankirk", "Mxy", "Gunther", "Marxen", "Atlas", "Castle", "Liang",
	"Bremak", "Gragnok", "Arrngrim", "Zugzug", "Beater", "Albin", "Undead", "Smarts", //June Patron
	
	"Sweet Pork", "Chunk", "Netor'arork", "Brung Tuk", "Snug Snug", "Max Mast", "Big Carrot", "Kok Koii", "Grognar", "Sheep", "Bengor",
	"Witval", "Big Cucum", "Watermelon", "Bruise Yu", "Donall", "Ovelhinha", "Ben Hart", "Bourbon", "Jeffrey", "Miyaki Kou", "Sixsheep" //June Patron
];


const ENEMY_NAMES_WEREWOLF_SP = [
	"Itchy", "Scratchy", "Meats", "Vegan", "Vegas", "Fenris", "Jacob", "Lucian", "Bane", "Good Boy", 

	"Poddy", "Edon", "Geralt", "Tommy", "Mutango", "Guguk", "Tatsuya", "Peaches", 
	"Shumuts", "Dante", "Jerry", "Helsing", "Arnoldo", "Fenrir", "Raplord",
	"Chis", "Fang", "Stave", "Burny", "Bruce", "Gaspard", "Fluffy", "Rex", "Dan", "Reese", "Bobert",
	"Koko", "Doggo", "Shirou", "Knotty", "Ray", "Snuffles", "Zion", "Clark", "Jeff", "Frosty",
	"Arthur", "Spot", "Moon", "Rai", "Thumper", "Berrick", "Sirius", "Hiro", "Stregus", "Palomar",
	"Spike", "Kenchi", "Juno", "Pochi", "Howler", "Noctis", "Yuuya", "Pellsonn", "Clark", "Surrkra",
	"Furosan", "Kethor", "Chocho", "Tabi", "Pupster", "Fang", "Phineas", "Vel", "Bobsi", "Martias", "Stalls",
	//February SubStar

	"Stud", "Fenrir", "Manwolf", "El Jefe", "Irascus", "Lupine III", "Fido", "Dexter", "Hairy Barry", 
	"Uaf", "Alfie", "Wolfgang", "Claw", "Harry Hams", "Ulfendin", "Bunny Jackie", "Arizona"
	//February SubStar
];


const ENEMY_NAMES_YETI_SP = [
	"Icky", "Tiny", "Baby", "Primus", "Tank", "Ester", "Warchest", "Rhodes", "Betty", "Sweaty", "Spaghetti",
	"Blue", "White", "King",
	
	"Jack", "Dylan", "Dylan", "Lunk", "Dorian", "Sheriff", "Keefa", "Riley", "Tim", "Sullivan",
	"Arnoldo", "Bobo", "Enrico", "Fluffy", "Bumbo", "Kronk", "Kang", "Yama", "Monke", "Randel",
	"Jeatter", "Vasa", "Rage", "Kupu", "Bolgor", "Milolo", "Redez", "Manfred", "Renato", "Harambe",
	"Zooke", "Bamba", "Torashi", "Gerodo", "Gerkk", "Steven", "Huiroj", "Fluffnut", "Lucky", "Kong",
	"Gargos", "Chappu", "Abe", "Loriaes", "Darling", "Rhett", "Icey", "Frosty", "Rhairy", "Guy",
	"Skips", "Stones", "Nunuu", "Toof", "Hardo", "Oran", "Neji", "Icehand", "King", "Bee", "Dig", "Valderoth", //March SubStar
	
	"White Furry", "Hairy Terry", "Samsicle", "Furball", "Big Knob", "Nord Fo", "Kemiru",  
	"Gerald", "Stijl", "Big Footus", "Pellius", "Yetta", "Serinul", "Yeet", "Big Taco",
	"Tamale", "Mr. Bongo", "Kong", "Kong" //March SubStar

];


const ENEMY_NAMES_SLIME_SP = [
	"Drop", "Blob", "Blurp", "Slurp", "Sling", "Smooch", "Funnel", "Faker", "Jerry",
	"Bouncy", "Burst", "Orange", "Seesaw", "Drip", "Jelly", "Jello", "Busty", "Balloon",
	"Pieces", "Yesterday", "Mince", "Puri", "Slimy"

];

const ENEMY_NAMES_VISITOR_MALE_SP = [
	"Diego", "Brian", "Donovan", "Maxwell", "Gigelian", "Jack", "Tyrone", "Maximillian",
	"Vincent", "Nugget", "Asura", "Maudril", "Claud", "Clifford", "Beany", "Pliskin",
	"Racson", "Ruchita", "Grace", "Troy", "Alvin", "Kal", "Donald", "Bob",
	"Gaben", "Roland", "Jadon", "Felix", "Clock", "Max", "Yang", "Austin",
	"Johnny", "Gunnar", "Angus", "Seth",
	
	"Gregorio", "Foep", "Leakim", "Fellahen", "Knot Evil", "Hobo Sen", //January 2020 Patrons
	
	
	"Doff", "Mickey", "Arnoldo", "Khorda", "Philsend", "Shmuel", "Ardian", "Davedick",
	"Hardy", "Matyas", "Harry", "Casuga", "Yellow", "Scott", "Taisacan", "Dino",
	"Tyler", "Joel", "Dazo", "Songkran", "Zyphr", "Orrin", 
	
	"Sodyser", "Maximus", "Chad Girth", "David Lazie", "Hamzah", "Lebedev", "Jay" //January 2021 Patrons
];


const ENEMY_NAMES_VISITOR_FEMALE_SP = [
	"Kelly", "Lilly", "Rita", "Corina", "Nolana", "Beatrice", "Daphne", "Soria", 
	"Airi", "Fran", "Selina", "Mei", "Loka", "Lisana", "Kira", "Jenna", 
	"Zefiris", "Lilith", "Vespa", "Aoi", "Maya", "Miku", "Misha", "Reimu",

	"Sally Shwartz", "Sanaria Arendae", "Ai Mao", "Saskias", //January 2020 Patrons
	
	
	"Lola", "Shanna", "Ebiora", "Tee", "Bayo",
	
	"Iyume Ryva", "Serin El", "May Green" //January 2021 Patrons
];

const ENEMY_NAMES_VISITOR_UNISEX_SP = [
	"Quinn", "Dethuink", "Hina", "Quinn", "Bort", "Rin", "Ray", "Shino", "Luka",

	"Gwenn Weiss", //January 2020 Patrons
	
	"Bang" //January 2021 Patrons
];



//Prefix

//-15% all stats
const ENEMY_PREFIX_BAD_SP = ["Crappy", "Frail", "Sickly", "Slow", "Short", "Small", "Fat", "Dumb", "Thin", "Dull", "Puny", "Weak", "Terrible", "Perverted", "Cowardly", "Lame", "Poor", "Garbage", "Thick", "Stunted"];

const ENEMY_PREFIX_DRUNK_SP = ["Wasted", "Drunk", "Smashed", "Drunk", "Shitfaced", "Drunk"];

//-15% all stats, -1 ejaculation stock
const ENEMY_PREFIX_HUNGRY_SP = ["Hungry", "Thin"];

//-25% all stats, -1 ejaculation stock
const ENEMY_PREFIX_STARVING_SP = ["Starving", "Ravenous"];

//-25% Strength, -15% Stamina
const ENEMY_PREFIX_WEAK_SP = ["Weak", "Puny", "Feeble", "Soft", "Short", "Frail"];

//-25% Dexterity, -10% Energy
const ENEMY_PREFIX_INEPT_SP = ["Clumsy", "Inept", "Impotent", "Unskilled", "Small", "Short", "Tiny", "Fat", "Stunted"];
//-25% Agility
const ENEMY_PREFIX_SLOW_SP = ["Slow", "Fat", "Lethargic", "Chill", "Relaxed", "Aloof", "Sleepy", "Chubby"];
//-25% Endurance, -10% Stamina, -15% Energy, -1 ejaculation stock
const ENEMY_PREFIX_SENSITIVE_SP = ["Sensitive", "Tender", "Excited", "Quick-shot", "Aroused", "Hasty", "Edging", "Fast"];

//+15% All Stats, +25% Stamina, +15% Ejaculation Volume
const ENEMY_PREFIX_GOOD_SP = ["Strong", "Skillful", "Cunning", "Fit", "Virile", "Handsome", "Manly", "Girly", "Experienced", "Big", "Horny", "Aroused", "Bad", "Hard", "Hot", "Fiery", "Mean", "Tanned", "Shady", "Brainy", "Smart"];

//+30% All Stats, +35% Stamina, +50% Energy, +25% Ejaculation Volume, +1 ejaculation stock
const ENEMY_PREFIX_ELITE_SP = ["Elite", "Terrible", "Wicked", "Perverted", "Peerless", "Greatest", "Intense", "Royal", "Super", "Dominant", "Absolute", "Infamous", "Almighty"];

//+30% Strength, +15% Stamina
const ENEMY_PREFIX_STRONG_SP = ["Strong", "Brawny", "Rugged", "Fit", "Muscular", "Beefy", "Burly"];
//+30% Dexterity, +10% Energy
const ENEMY_PREFIX_DEXTEROUS_SP = ["Dexterous", "Cunning", "Handsome", "Lithe", "Skillful", "Deft", "Handy", "Tanned", "Experienced"];
//+30% Agility
const ENEMY_PREFIX_AGILE_SP = ["Agile", "Fast", "Quick", "Light", "Nimble", "Short", "Hasty"];

//+30% Endurance, +35% Stamina, +25% Energy, +25% Ejaculation Volume, +1 ejaculation stock
const ENEMY_PREFIX_ENDURING_SP = ["Enduring", "Rugged", "Sturdy", "Tough", "Experienced", "Big", "Fit", "Virile", "Manly"];

//-25% Dexterity, -25% Endurance, +50% Energy
//With passives: -50% Charm, +50% Ejaculation Volume, +1 ejaculation stock
const ENEMY_PREFIX_VIRGIN_SP = ["Virgin"];

//+10% Strength, +10% Dexterity, +10% Agility, -50% Charm, Starts the battle with the Horny state
const ENEMY_PREFIX_HORNY_SP = ["Horny", "Perverted", "Excited", "Aroused", "Hard", "Horny", "Horny"];

//+25% Strength, +25% Dexterity, +25% Endurance, -25% Agility, +35% Stamina, +50% Energy, +50% Ejaculation Volume, +1 ejaculation stock
const ENEMY_PREFIX_BIG_SP = ["Big", "Huge", "Giant", "Thick", "Towering"];

//Starts the battle with the Angry state
const ENEMY_PREFIX_ANGRY_SP = ["Angry", "Mad", "Furious", "Upset", "Annoyed", "Rude", "Angry"];

//Metal
const ENEMY_PREFIX_METAL_SP = ["Metal"];

//+Talk lvl
const ENEMY_PREFIX_TALK_SP = ["Asshole", "Chatty", "Jerk", "Talkative", "Noisy", "Loud"];

//+Sight lvl
const ENEMY_PREFIX_SIGHT_SP = ["Quiet", "Intense", "Perverted", "Watchful", "Gawking", "Gazeful", "Nosy"];

//+Maso lvl, +25% Stamina, +25% Energy, +25% Def, -25% Atk
const ENEMY_PREFIX_MASO_SP = ["Masochistic", "Masochistic", "Submissive"];

//+Sado lvl, +10% Strength, +10% Dexterity, +10% Agility, +25% Atk, -25% Def
const ENEMY_PREFIX_SADO_SP = ["Sadistic", "Cruel", "Sadistic"];

//No effect
const ENEMY_PREFIX_NEUTRAL_SP = ["Quiet", "Nice", "Normal", "Regular", "Nondescript", "Generic", "Average", "Tall", "Asshole", "Artistic", "Bisexual", "Bald", "Balding", "Smelly", "Bland", "Boring", "Underachieving", "Woke", "Weird", "Strange"];
