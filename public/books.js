const libraryBooks = [
    {
        "title": "Pride and prejudice",
        "url": "https://www.gutenberg.org/cache/epub/1342/pg1342-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/1342/images/cover.jpg"
    },
    {
        "title": "Alice\u2019s Adventures in Wonderland",
        "url": "https://www.gutenberg.org/cache/epub/11/pg11-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/11/images/cover.jpg"
    },
    {
        "title": "Frankenstein",
        "url": "https://www.gutenberg.org/cache/epub/84/pg84-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/84/images/cover.jpg"
    },
    {
        "title": "Dracula",
        "url": "https://www.gutenberg.org/cache/epub/345/pg345-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/345/images/cover.jpg"
    },
    {
        "title": "The Adventures of Tom Sawyer",
        "url": "https://www.gutenberg.org/cache/epub/74/pg74-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/74/images/cover.jpg"
    },
    {
        "title": "Adventures of Huckleberry Finn",
        "url": "https://www.gutenberg.org/cache/epub/76/pg76-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/76/images/cover.jpg"
    },
    {
        "title": "Mo",
        "url": "https://www.gutenberg.org/cache/epub/2701/pg2701-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/2701/images/cover.jpg"
    },
    {
        "title": "Unknown Title",
        "url": "https://www.gutenberg.org/cache/epub/1661/pg1661-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/1661/images/cover.jpg"
    },
    {
        "title": "The Picture of Dorian Gray",
        "url": "https://www.gutenberg.org/cache/epub/174/pg174-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/174/images/cover.jpg"
    },
    {
        "title": "The Wonderful Wizard of Oz",
        "url": "https://www.gutenberg.org/cache/epub/55/pg55-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/55/images/cover.jpg"
    },
    {
        "title": "The Time Machine",
        "url": "https://www.gutenberg.org/cache/epub/35/pg35-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/35/images/cover.jpg"
    },
    {
        "title": "The War of the Worlds",
        "url": "https://www.gutenberg.org/cache/epub/36/pg36-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/36/images/cover.jpg"
    },
    {
        "title": "The  eBook of The Invisible Man,",
        "url": "https://www.gutenberg.org/cache/epub/5230/pg5230-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/5230/images/cover.jpg"
    },
    {
        "title": "The Island of Doctor Moreau",
        "url": "https://www.gutenberg.org/cache/epub/159/pg159-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/159/images/cover.jpg"
    },
    {
        "title": "The  eBook of The Secret Garden,",
        "url": "https://www.gutenberg.org/cache/epub/113/pg113-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/113/images/cover.jpg"
    },
    {
        "title": "The  eBook of Little Women,",
        "url": "https://www.gutenberg.org/cache/epub/514/pg514-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/514/images/cover.jpg"
    },
    {
        "title": "The Scarlet Letter",
        "url": "https://www.gutenberg.org/cache/epub/25344/pg25344-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/25344/images/cover.jpg"
    },
    {
        "title": "The  eBook of The Call of the Wild,",
        "url": "https://www.gutenberg.org/cache/epub/215/pg215-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/215/images/cover.jpg"
    },
    {
        "title": "White Fang",
        "url": "https://www.gutenberg.org/cache/epub/910/pg910-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/910/images/cover.jpg"
    },
    {
        "title": "The  eBook of The Jungle Book,",
        "url": "https://www.gutenberg.org/cache/epub/236/pg236-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/236/images/cover.jpg"
    },
    {
        "title": "Kim",
        "url": "https://www.gutenberg.org/cache/epub/2226/pg2226-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/2226/images/cover.jpg"
    },
    {
        "title": "A Tale of Two Cities",
        "url": "https://www.gutenberg.org/cache/epub/98/pg98-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/98/images/cover.jpg"
    },
    {
        "title": "Great Expectations",
        "url": "https://www.gutenberg.org/cache/epub/1400/pg1400-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/1400/images/cover.jpg"
    },
    {
        "title": "Oliver Twist",
        "url": "https://www.gutenberg.org/cache/epub/730/pg730-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/730/images/cover.jpg"
    },
    {
        "title": "David Copperfield",
        "url": "https://www.gutenberg.org/cache/epub/766/pg766-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/766/images/cover.jpg"
    },
    {
        "title": "The  eBook of A Christmas Carol,",
        "url": "https://www.gutenberg.org/cache/epub/46/pg46-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/46/images/cover.jpg"
    },
    {
        "title": "Jane Eyre",
        "url": "https://www.gutenberg.org/cache/epub/1260/pg1260-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/1260/images/cover.jpg"
    },
    {
        "title": "Wuthering Heights",
        "url": "https://www.gutenberg.org/cache/epub/768/pg768-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/768/images/cover.jpg"
    },
    {
        "title": "The  eBook of Sense and Sensibility,",
        "url": "https://www.gutenberg.org/cache/epub/161/pg161-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/161/images/cover.jpg"
    },
    {
        "title": "Emma",
        "url": "https://www.gutenberg.org/cache/epub/158/pg158-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/158/images/cover.jpg"
    },
    {
        "title": "The  eBook of Persuasion",
        "url": "https://www.gutenberg.org/cache/epub/105/pg105-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/105/images/cover.jpg"
    },
    {
        "title": "Northanger Abbey",
        "url": "https://www.gutenberg.org/cache/epub/121/pg121-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/121/images/cover.jpg"
    },
    {
        "title": "The Count of Monte Cristo",
        "url": "https://www.gutenberg.org/cache/epub/1184/pg1184-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/1184/images/cover.jpg"
    },
    {
        "title": "The Three Musketeers",
        "url": "https://www.gutenberg.org/cache/epub/1257/pg1257-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/1257/images/cover.jpg"
    },
    {
        "title": "The Man in the Iron Mask",
        "url": "https://www.gutenberg.org/cache/epub/2759/pg2759-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/2759/images/cover.jpg"
    },
    {
        "title": "The  eBook of Les Mis\u00e9rables,",
        "url": "https://www.gutenberg.org/cache/epub/135/pg135-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/135/images/cover.jpg"
    },
    {
        "title": "The  eBook of Notre-Dame de Paris,",
        "url": "https://www.gutenberg.org/cache/epub/2610/pg2610-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/2610/images/cover.jpg"
    },
    {
        "title": "Twenty Thousand Leagues under the Sea",
        "url": "https://www.gutenberg.org/cache/epub/164/pg164-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/164/images/cover.jpg"
    },
    {
        "title": "The  eBook of Around the World in Eighty Days,",
        "url": "https://www.gutenberg.org/cache/epub/103/pg103-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/103/images/cover.jpg"
    },
    {
        "title": "Unknown Title",
        "url": "https://www.gutenberg.org/cache/epub/18857/pg18857-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/18857/images/cover.jpg"
    },
    {
        "title": "The  eBook of The Mysterious Island,",
        "url": "https://www.gutenberg.org/cache/epub/1268/pg1268-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/1268/images/cover.jpg"
    },
    {
        "title": "The  eBook of The Odyssey,",
        "url": "https://www.gutenberg.org/cache/epub/1727/pg1727-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/1727/images/cover.jpg"
    },
    {
        "title": "Unknown Title",
        "url": "https://www.gutenberg.org/cache/epub/22382/pg22382-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/22382/images/cover.jpg"
    },
    {
        "title": "Dante's Divine Comedy",
        "url": "https://www.gutenberg.org/cache/epub/8800/pg8800-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/8800/images/cover.jpg"
    },
    {
        "title": "The Republic",
        "url": "https://www.gutenberg.org/cache/epub/1497/pg1497-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/1497/images/cover.jpg"
    },
    {
        "title": "Meditations",
        "url": "https://www.gutenberg.org/cache/epub/2680/pg2680-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/2680/images/cover.jpg"
    },
    {
        "title": "The  eBook of The Art of War,",
        "url": "https://www.gutenberg.org/cache/epub/17405/pg17405-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/17405/images/cover.jpg"
    },
    {
        "title": "The Prince",
        "url": "https://www.gutenberg.org/cache/epub/1232/pg1232-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/1232/images/cover.jpg"
    },
    {
        "title": "The  eBook of The Communist Manifesto",
        "url": "https://www.gutenberg.org/cache/epub/61/pg61-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/61/images/cover.jpg"
    },
    {
        "title": "Walden",
        "url": "https://www.gutenberg.org/cache/epub/205/pg205-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/205/images/cover.jpg"
    },
    {
        "title": "The  eBook of On the Duty of Civil Disobedience,",
        "url": "https://www.gutenberg.org/cache/epub/71/pg71-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/71/images/cover.jpg"
    },
    {
        "title": "Unknown Title",
        "url": "https://www.gutenberg.org/cache/epub/20203/pg20203-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/20203/images/cover.jpg"
    },
    {
        "title": "Narrative of the Life of Frederick Douglass",
        "url": "https://www.gutenberg.org/cache/epub/23/pg23-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/23/images/cover.jpg"
    },
    {
        "title": "The  eBook of The Souls of Black Folk,",
        "url": "https://www.gutenberg.org/cache/epub/408/pg408-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/408/images/cover.jpg"
    },
    {
        "title": "The Yellow Wallpaper",
        "url": "https://www.gutenberg.org/cache/epub/1952/pg1952-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/1952/images/cover.jpg"
    },
    {
        "title": "Metamorphosis",
        "url": "https://www.gutenberg.org/cache/epub/5200/pg5200-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/5200/images/cover.jpg"
    },
    {
        "title": "The Trial",
        "url": "https://www.gutenberg.org/cache/epub/7849/pg7849-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/7849/images/cover.jpg"
    },
    {
        "title": "Thus Spake Zarathustra,",
        "url": "https://www.gutenberg.org/cache/epub/1998/pg1998-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/1998/images/cover.jpg"
    },
    {
        "title": "Unknown Title",
        "url": "https://www.gutenberg.org/cache/epub/4363/pg4363-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/4363/images/cover.jpg"
    },
    {
        "title": "The  eBook of The Brothers Karamazov",
        "url": "https://www.gutenberg.org/cache/epub/28054/pg28054-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/28054/images/cover.jpg"
    },
    {
        "title": "Crime and Punishment",
        "url": "https://www.gutenberg.org/cache/epub/2554/pg2554-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/2554/images/cover.jpg"
    },
    {
        "title": "Notes from the Underground",
        "url": "https://www.gutenberg.org/cache/epub/600/pg600-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/600/images/cover.jpg"
    },
    {
        "title": "The  eBook of War and Peace,",
        "url": "https://www.gutenberg.org/cache/epub/2600/pg2600-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/2600/images/cover.jpg"
    },
    {
        "title": "Anna Karenina",
        "url": "https://www.gutenberg.org/cache/epub/1399/pg1399-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/1399/images/cover.jpg"
    },
    {
        "title": "The  eBook of The Kreutzer Sonata and Other Stories,",
        "url": "https://www.gutenberg.org/cache/epub/689/pg689-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/689/images/cover.jpg"
    },
    {
        "title": "The  eBook of Fathers and Children,",
        "url": "https://www.gutenberg.org/cache/epub/30723/pg30723-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/30723/images/cover.jpg"
    },
    {
        "title": "The  eBook of The Idiot,",
        "url": "https://www.gutenberg.org/cache/epub/2638/pg2638-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/2638/images/cover.jpg"
    },
    {
        "title": "The Importance of Being Earnest",
        "url": "https://www.gutenberg.org/cache/epub/844/pg844-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/844/images/cover.jpg"
    },
    {
        "title": "The  eBook of The Canterville Ghost,",
        "url": "https://www.gutenberg.org/cache/epub/14522/pg14522-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/14522/images/cover.jpg"
    },
    {
        "title": "The Strange Case Of Dr. Jekyll And Mr. Hyde",
        "url": "https://www.gutenberg.org/cache/epub/43/pg43-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/43/images/cover.jpg"
    },
    {
        "title": "Treasure Island",
        "url": "https://www.gutenberg.org/cache/epub/120/pg120-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/120/images/cover.jpg"
    },
    {
        "title": "Kidnapped",
        "url": "https://www.gutenberg.org/cache/epub/421/pg421-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/421/images/cover.jpg"
    },
    {
        "title": "Unknown Title",
        "url": "https://www.gutenberg.org/cache/epub/27681/pg27681-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/27681/images/cover.jpg"
    },
    {
        "title": "The Life and Adventures of Robinson Crusoe",
        "url": "https://www.gutenberg.org/cache/epub/521/pg521-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/521/images/cover.jpg"
    },
    {
        "title": "Unknown Title",
        "url": "https://www.gutenberg.org/cache/epub/829/pg829-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/829/images/cover.jpg"
    },
    {
        "title": "The  eBook of The Pilgrim's Progress,",
        "url": "https://www.gutenberg.org/cache/epub/131/pg131-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/131/images/cover.jpg"
    },
    {
        "title": "The  eBook of Don Quixote,",
        "url": "https://www.gutenberg.org/cache/epub/996/pg996-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/996/images/cover.jpg"
    },
    {
        "title": "The  eBook of The Canterbury Tales, and Other Poems,",
        "url": "https://www.gutenberg.org/cache/epub/2383/pg2383-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/2383/images/cover.jpg"
    },
    {
        "title": "Paradise Lost",
        "url": "https://www.gutenberg.org/cache/epub/26/pg26-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/26/images/cover.jpg"
    },
    {
        "title": "Unknown Title",
        "url": "https://www.gutenberg.org/cache/epub/6150/pg6150-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/6150/images/cover.jpg"
    },
    {
        "title": "The  eBook of AESOP'S FABLES,",
        "url": "https://www.gutenberg.org/cache/epub/11339/pg11339-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/11339/images/cover.jpg"
    },
    {
        "title": "The Jungle",
        "url": "https://www.gutenberg.org/cache/epub/140/pg140-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/140/images/cover.jpg"
    },
    {
        "title": "he  eBook of The Awakening and Selected Short Stories,",
        "url": "https://www.gutenberg.org/cache/epub/160/pg160-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/160/images/cover.jpg"
    },
    {
        "title": "The Red Badge of Courage",
        "url": "https://www.gutenberg.org/cache/epub/73/pg73-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/73/images/cover.jpg"
    },
    {
        "title": "The House of the Seven Gables",
        "url": "https://www.gutenberg.org/cache/epub/77/pg77-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/77/images/cover.jpg"
    },
    {
        "title": "Peter Pan",
        "url": "https://www.gutenberg.org/cache/epub/16/pg16-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/16/images/cover.jpg"
    },
    {
        "title": "The  eBook of Heart of Darkness,",
        "url": "https://www.gutenberg.org/cache/epub/219/pg219-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/219/images/cover.jpg"
    },
    {
        "title": "The  Book of The Secret Agent,",
        "url": "https://www.gutenberg.org/cache/epub/974/pg974-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/974/images/cover.jpg"
    },
    {
        "title": "A Doll's House",
        "url": "https://www.gutenberg.org/cache/epub/2542/pg2542-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/2542/images/cover.jpg"
    },
    {
        "title": "Unknown Title",
        "url": "https://www.gutenberg.org/cache/epub/19942/pg19942-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/19942/images/cover.jpg"
    },
    {
        "title": "The Moonstone",
        "url": "https://www.gutenberg.org/cache/epub/155/pg155-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/155/images/cover.jpg"
    },
    {
        "title": "Unknown Title",
        "url": "https://www.gutenberg.org/cache/epub/1837/pg1837-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/1837/images/cover.jpg"
    },
    {
        "title": "The Woman in White",
        "url": "https://www.gutenberg.org/cache/epub/583/pg583-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/583/images/cover.jpg"
    },
    {
        "title": "Gitanjali",
        "url": "https://www.gutenberg.org/cache/epub/7164/pg7164-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/7164/images/cover.jpg"
    },
    {
        "title": "Bhagavad-Gita (The Song Celestial)",
        "url": "https://www.gutenberg.org/cache/epub/23491/pg23491-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/23491/images/cover.jpg"
    },
    {
        "title": "The Upanishads",
        "url": "https://www.gutenberg.org/cache/epub/3248/pg3248-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/3248/images/cover.jpg"
    },
    {
        "title": "The Ramayana and Mahabharata",
        "url": "https://www.gutenberg.org/cache/epub/24869/pg24869-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/24869/images/cover.jpg"
    },
    {
        "title": "The Ramayana of Valmiki",
        "url": "https://www.gutenberg.org/cache/epub/51154/pg51154-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/51154/images/cover.jpg"
    },
    {
        "title": "Stories from Tagore",
        "url": "https://www.gutenberg.org/cache/epub/33525/pg33525-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/33525/images/cover.jpg"
    },
    {
        "title": "My Reminiscences",
        "url": "https://www.gutenberg.org/cache/epub/33526/pg33526-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/33526/images/cover.jpg"
    },
    {
        "title": "Nationalism",
        "url": "https://www.gutenberg.org/cache/epub/33096/pg33096-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/33096/images/cover.jpg"
    },
    {
        "title": "Creative Unity",
        "url": "https://www.gutenberg.org/cache/epub/22230/pg22230-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/22230/images/cover.jpg"
    },
    {
        "title": "The Golden Threshold",
        "url": "https://www.gutenberg.org/cache/epub/1046/pg1046-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/1046/images/cover.jpg"
    },
    {
        "title": "Karma-Yoga",
        "url": "https://www.gutenberg.org/cache/epub/14240/pg14240-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/14240/images/cover.jpg"
    },
    {
        "title": "Bhakti-Yoga",
        "url": "https://www.gutenberg.org/cache/epub/7136/pg7136-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/7136/images/cover.jpg"
    },
    {
        "title": "The Lost Million",
        "url": "https://www.gutenberg.org/cache/epub/41454/pg41454-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/41454/images/cover.jpg"
    },
    {
        "title": "An Indian Study of Love and Death",
        "url": "https://www.gutenberg.org/cache/epub/3689/pg3689-images.html",
        "cover": "https://www.gutenberg.org/cache/epub/3689/images/cover.jpg"
    },
    {
        "title": "Godan (Hindi) - Munshi Premchand",
        "url": "https://archive.org/embed/premchand-godan",
        "cover": "https://archive.org/services/img/premchand-godan"
    },
    {
        "title": "Nirmala (Hindi) - Munshi Premchand",
        "url": "https://archive.org/embed/premchand-nirmala",
        "cover": "https://archive.org/services/img/premchand-nirmala"
    },
    {
        "title": "Gaban (Hindi) - Munshi Premchand",
        "url": "https://archive.org/embed/GabanByPremchand",
        "cover": "https://archive.org/services/img/GabanByPremchand"
    },
    {
        "title": "Ramcharitmanas (Hindi) - Tulsidas",
        "url": "https://archive.org/embed/Ramcharitmanas_201610",
        "cover": "https://archive.org/services/img/Ramcharitmanas_201610"
    },
    {
        "title": "Karmabhoomi (Hindi) - Munshi Premchand",
        "url": "https://archive.org/embed/karmabhoomi-premchand",
        "cover": "https://archive.org/services/img/karmabhoomi-premchand"
    }
];
