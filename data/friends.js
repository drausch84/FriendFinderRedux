const friendsArray = [
    {
        name:"Dennis Reynolds",
        photo: "dennis-reynolds.jpeg",
        description: "You are narcissistic, which is why Dennis Reynolds is your perfect match.  You both consider yourselves a 5-star 'Golden God'" +
         " incapable of doing wrong. However, you both enjoy a good beer, hunting humans, and are quite aware of 'The Implication'.",
        scores: ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"] 
    },
    {
        name:"Dana Scully",
        photo: "dana-scully.png",
        description: "While you both might have a cynical outer shell, you and Dana Scully have a deeper appreciation for the mysteries in life." +
        " Still, you both consider yourselves logical, organized, and dependent on the tangible.",
        scores: ["2","2","2","2","2","2","2","2","2","2","2","2","2","2","2"] 
    },
    {
        name:"Shaggy Rogers",
        photo: "shaggy-rogers.jpeg",
        description: "When life throws you lemons, you're both looking for the nearest juicer to make lemonade to pair with that lovely 10 ft. tall club sandwich." +
        " Although you both are a fan of the good time, whenver conflict arises, you both tend to cower and hide until the problem resolves itself.",
        scores: ["3","3","3","3","3","3","3","3","3","3","3","3","3","3","3"] 
    },
    {
        name:"Baby Groot",
        photo: "baby-groot.png",
        description: "You are sweet as pie, which is why Baby Groot would be the perfect friend for you.  You both exude an infectious spirit that will win almost anyone " + 
        " over and have a charming smile.  However, conversation isn't exactly a strong suit for either of you, as you both tend to repeat yourselves.",
        scores: ["4","4","4","4","4","4","4","4","4","4","4","4","4","4","4"] 
    },
    {
        name:"Dale Cooper",
        photo: "dale-cooper.jpeg",
        description: "That's a damn good match!  Like Dale Cooper, you see the good in life even when life is its most cruel.  You both enjoy a good cup of coffee (preferably black and HOT) " +
        " and a tasty slice of pie. You both are magnanimous, heroic, and extraordinarily likeable.",
        scores: ["5","5","5","5","5","5","5","5","5","5","5","5","5","5","5"] 
    },
    {
        name:"Jon Snow",
        photo: "jon-snow.jpeg",
        description: "You both are courageous and steadfast, even if others insist you know nothing.  Like Jon Snow, you are an example of integrity: doing the right thing without " + 
        " the need for accolades or iron thrones. You both tend to be a little hot-headed and emotional, but for all the right reasons.",
        scores: ["1","2","3","4","5","1","2","3","4","5","1","2","3","4","1"] 
    },
    {
        name:"Rick Sanchez",
        photo: "rick-sanchez.png",
        description: "You are a highly intelligent and motivated individual.  However, you tend to look down on others who you perceive as less than worthy " +
        " of being in your presence. Like Rick, you are curious and always searching for answers to why things work the way that they do.",
        scores: ["1","1","1","2","2","2","3","3","3","4","4","4","5","5","3"] 
    },
    {
        name:"Carlton Banks",
        photo: "carlton-banks.jpeg",
        description: "Arrogant, selfish, nerdy, obnoxious.  These are terms that many people might associate with you and Carlton. But deep down, you both are very emotional " +
        " and loyal friends.  Your have a wee bit of a superiority complex and you tend to overexaggerate your day-to-day problems." +
        "Despite these faults, you are both socially conscious individuals with a flair for outstanding dance moves.",
        scores: ["1","1","2","2","3","3","4","4","5","5","5","5","4","4","3"] 
    },
    {
        name:"Hermione Granger",
        photo: "hermione-granger.jpeg",
        description: "Much like Hermione, you possess a brilliant academic mind that can often frustrate and annoy your peers yet impress your superiors. Others may initially view " +
        " you as a 'know-it-all' and a syncophant, but with getting to know you, others find that you possess a high level of compassion and loyalty. Even though you aren't " +
        " utterly dismissive of life's mysteries, you tend to approach life in a highly logical manner.",
        scores: ["2","2","2","2","3","3","3","3","4","4","4","4","5","5","2"] 
    },
    {
        name:"Spike",
        photo: "spike-buffy.png",
        description: "Utterly loyal, devoted, and capable of extreme acts of love. You and Spike are both HIGHLY passionate individuals with little control over your emotions, " +
        "which is a blessing and a curse.  You both tend to overreact to situations and are known to have a short fuse. Despite these shortcomings, people gravitate toward you " +
        " and find themselves lucky to call you a friend.",
        scores: ["1","1","3","3","5","5","5","5","1","1","2","2","3","3","2"] 
    },
    {
        name:"Gomez Addams",
        photo: "gomez-addams.png",
        description: "Cara Mia!  Much like Gomez, you are an extemely affectionate and cheerful person. Very social, charitable, and playful, you both are the life of any party!" +
        " Your light-hearted nature is very inviting to others around you who end up surprised that you also have a dark side that's not always present. Your dark edge may frighten some " +
        " but it also gives you an edge that others find fascinating.",
        scores: ["5","5","4","3","4","2","2","1","5","3","3","2","2","1","5"] 
    },
    {
        name:"Roger Smith",
        photo: "roger-the-alien-jpeg",
        description: "Much like Roger, you have a tendency of being selfish and extraordinarily petty.  Maybe not 'fake-a-kidnapping-for-eating-the-last-cookie' petty, but you "+
        " display a remarkable ability to hold a grudge and act irrationally over it.  You also have a tendency to act childish and overcomplicate stressful situations." +
        "Still, your sense of humor, charisma, and partying lifestyle tends to earn you more friends than lose them.",
        scores: ["1","2","1","2","1","2","1","2","1","2","1","2","3","3","1"] 
    },
    {
        name:"Hugo Reyes",
        photo: "hugo-reyes.jpeg",
        description: "You are an introvert yet deeply humanistic with a very personable approach. As is with Hugo, you are fiercely loyal and manage to lift up the spirits of " +
        " everyone around you.  Despite the love you receive from others, you still find yourself anxious at what people truly think of you which can make you a bit paranoid.",
        scores: ["4","4","4","5","5","5","2","2","1","5","5","4","4","4","4"] 
    },
    {
        name:"Daryl Dixon",
        photo: "daryl-dixon.png",
        description: "Rough around the edges, but with a heart of gold; you and Daryl Dixon are complicated people with an enormous amount of depth. Life may not have afforded " +
        " you every advantage, but you are resourceful, determined, and highly-capable. Although you are often soft-spoken, people tend to look to you for leadership and assurance " +
        " that everything will be ok.",
        scores: ["4","4","4","4","3","2","2","1","1","5","5","5","2","4","3"] 
    },
    {
        name:"Samwise Gamgee",
        photo: "samwise-gamgee.jpeg",
        description: "You are the definition of selfless.  You and Samwise are literally willing to go to Hell and back for your friends, fiercely loyal in the face of " +
        " adversity. In spite of your tenacity and accomplishments, you remain humble.  It's this selflessness that also leads to people taking advantage of you, often the " +
        " ones you love the most.  While you don't fit the typical definition of a hero, your kind demeanor and courage has earned you the admiration of others.",
        scores: ["5","5","5","5","5","5","5","5","5","5","3","3","3","2","1"] 
    },
    {
        name:"Walter White",
        photo: "walter-white.png",
        description: "Brilliant, hard-working, and ego-centric.  You and Walter share more than enough in common.  You both long for the praise of others and often find life " +
        " to be unfair, leaving you feeling unfulfilled and frustrated. You are definitely a 'glass-half-empty' personality with a Napoleon complex. While you more often than not " + 
        " exercise restraint, you frequently teeter the line of breaking bad.",
        scores: ["1","1","1","1","1","1","1","1","2","2","2","2","2","3","1"] 
    },
    {
        name:"The Joker",
        photo: "the-joker.jpg",
        description: "You very well might be a psychopath. Displaying unhealthy ENTP personality traits, you tend to be argumentative, delusional, and private. Much like the Clown " +
        " Prince of Crime, you lack empathy and understanding.  However, you have a wicked sense of humor and exceptional fashion-sense.",
        scores: ["1","1","1","1","1","1","1","1","1","1","2","2","2","2","1"] 
    },
    {
        name:"Joy",
        photo: "joy.png",
        description: "You are a radiant burst of energy and excitement!  Boisterous, exuberant, and fiercely optimistic.  You are the sunshine in an otherwise cloudy day for all" +
        " of those around you.  Whereas there is such a thing as being overtly happy on the verge of being obnoxious, you are capable of being sensitive to negative emotions. " +
        " But, what distinguishes you from others is the ability to always look on the positive side and persevere in the midst of conflict or negativity.",
        scores: ["5","5","5","5","5","5","5","5","5","5","5","5","5","5","4"] 
    },
    {
        name:"Barney (The Dinosaur)",
        photo: "barney.png",
        description: "You are a happy person.  A very, very, very, VERY happy person.  And yes, it can be a little annoying. While there might not be death fiction devoted to you, " +
        " your overtly optimistic view of the world has many viewing you as naive and obnoxious. However, what people might be afraid to admit is they truly admire you and seek " +
        " you out for approval and mediation.  You are also receptive and adventurous, which will always open up a world of possibility for you.",
        scores: ["5","5","5","5","5","5","5","5","5","5","5","5","3","3","3"] 
    },
    {
        name:"Homelander",
        photo: "homelander.png",
        description: "This is going to be hard to hear, but you might be a certifiable sociopath, which makes Homelander your perfect friend! Your good looks, charisma, and " +
        " eloquence would have the world believing that you are a wonderful and remarkable person.  But deep down, there is a darkness inside of you that surprises even you. " +
        " Your lack of empathy, megalomania, and aggressive demeanor has made you an unlikeable yet feared individual.",
        scores: ["1","1","1","1","1","1","1","1","1","2","1","1","1","1","1"]  
    },
    {
        name:"Van Wilder",
        photo: "van-wilder.jpeg",
        description: "You are THE life of the party.  If someone doesn't care to know you, it's because they long to BE you.  Your easy-going attitude might be construed as flippant " +
        " to some, but it is inviting to most. Despite your fun-loving attitude, you are also capable of exploring deeper emotions.  You rarely judge others and are deceptively wise.",
        scores: ["5","4","5","4","5","4","5","4","5","4","5","4","1","5","5"] 
    },
    {
        name:"Bender",
        photo: "bender.jpeg",
        description: "Much like Bender Bending Rodriguez, you have a flair for the dramatic and are utterly hedonistic. Without much of a filter, many would describe you as " +
        " being incapable of self-restraint.  You have a sharp sense of wit but can also appear vulgar and crass. Even though you want to believe that you are capable of " +
        " distancing yourself from the feelings of others, you are more empathetic than you'd care to admit.",
        scores: ["4","3","2","1","1","2","4","4","4","2","2","1","2","2","1"] 
    },
    {
        name:"Moe Syzslak",
        photo: "moe-syzslak.jpeg",
        description: "You tend to be an irritable individual who looks at life through a very cynical lens.  Maybe it's the weight of the world....maybe it's the " +
        " constant prank phone calls.  Despite your negative attitude, all you yearn for is to be loved and accepted. Others may call you out for your pessimism, but deep down " +
        " there is a sense of connection and admiration that they feel for you.",
        scores: ["4","3","3","3","3","2","1","1","1","1","1","1","1","1","2"] 
    },
    {
        name:"Garth Algar",
        photo: "garth-algar.jpeg",
        description: "Party on dude!  You have a creative spirit that impresses all those around you, which is why its a shame that you don't share your creative gifts " +
        " more often!  Soft-spoken, shy, and prone to anxiety during stressful situations, you lack the ability to lead but are a loyal and receptive friend.",
        scores: ["5","5","5","5","4","4","3","5","1","5","5","3","2","3","1"] 
    },
    {
        name:"Walter Sobchak",
        photo: "walter-sobchak.png",
        description: "You are someone who truly cares about the rules, much like good ol' Walter!  You might be characterized as rigid and incapable of 'winging it', being heavily reliant " +
        " on rules and structure.  Along with being stubborn, you also tend to be a little bit more aggressive than most situations warrant. You are quick to help a " +
        " friend in need, even if you tend to overcomplicate things.",
        scores: ["2","2","2","3","1","1","4","5","1","2","3","4","1","1","2"] 
    },
    {
        name:"Darth Vader",
        photo: "darth-vader.png",
        description: "You have a stoic demeanor, even if you find the lack of faith from others to be disturbing. Much like the helmet-adorned Sith Lord, you have developed " +
        " a detachment from humanity that can be attributed to past traumas.  You are also wise and consumed by a desire for career ascension and personal conquests.",
        scores: ["1","1","2","2","2","2","3","3","1","1","1","2","1","1","1"] 
    },
    {
        name:"Katniss Everdeen",
        photo: "katniss-everdeen.png",
        description: "Cold, calculated, and blunt to most, you also have a compassionate and vulnerable side to those closet to you.  Much like Katniss, you are resourceful, " +
        " fiery, tough, and independent. You don't feel the need to be constrained by rules or boundaries and are quite adept at thinking on your feet. However, you also tend to be " +
        " socially awkward and teeter toward misanthropy.",
        scores: ["5","5","4","4","3","5","5","5","5","5","5","4","5","5","4"] 
    },
    {
        name:"Dwight Schrute",
        photo: "dwight-schrute.jpeg",
        description: "You demand that others learn their rules! Much like the loveable beet plantation owner, Dwight, you are analytical and demand structure." +
        " You strive to be a leader, but lack many of the qualities to do it competently, which can often lead to less-than-desirable results (both professionally and personally).",
        scores: ["1","5","1","1","2","1","1","1","1","1","1","1","1","3","5"]
    },
    {
        name:"Jake Peralta",
        photo: "jake-peralta.jpeg",
        description: "Things just got supes hoots as your perfect friend is legendary NYPD detective, Jake Peralta! You both are very likeable, if not a bit cocky and immature." +
        " You tend to thumb your nose at authority as you feel that you can do a better job than your superiors. You also tend to have trouble expressing yourself emotionally " +
        " and tend to deflect from certain conversations through humor.",
        scores: ["4","4","2","5","5","3","2","5","5","5","5","5","5","5","4"] 
    },
    {
        name:"Sam Quint",
        photo: "sam-quint.png",
        description: "While you might not be well-versed in sea shanties or have a love of the ocean, you and Quint have quite a bit in common. You are both the very definition " +
        " of a 'working class hero'.  You lead a quaint life, with a disdain for the affluent. This disdain has made you very spiteful and pushy, but you can always be " +
        " mellowed out with good music.",
        scores: ["2","2","5","5","1","3","2","2","2","5","1","5","1","1","1"] 
    }
]

module.exports = friendsArray;