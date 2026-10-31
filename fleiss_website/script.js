// Modal Functions
function showModal(title, text) {
  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-body').innerText = text;
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Build user supplied text as text nodes so it cannot be interpreted as HTML.
function createTextElement(tagName, text, className) {
  const element = document.createElement(tagName);
  element.textContent = text ?? '';
  if (className) element.className = className;
  return element;
}

// Additional cinema catalog entries shared by the Explore pages.
const additionalFilms = [
  ['12 Angry Men', 'Justice & Perspective', 'A jury deliberation shows how careful questioning can challenge assumptions and protect against unjust certainty.'],
  ['2001: A Space Odyssey', 'Technology & Humanity', 'A journey through space and time asks what intelligence, evolution, and humanity might become.'],
  ['Arrival', 'Communication & Time', 'A linguist encounters an unfamiliar language that changes how she understands time, choice, and loss.'],
  ['Amélie', 'Kindness & Connection', 'A shy Parisian quietly changes the lives around her while learning to take part in her own.'],
  ['A Separation', 'Truth & Responsibility', 'A family dispute reveals how duty, class, and competing truths complicate moral judgment.'],
  ['Bicycle Thieves', 'Dignity & Poverty', 'A father and son search for a stolen bicycle in a story about hardship and human dignity.'],
  ['Blade Runner 2049', 'Memory & Identity', 'A replicant investigator follows a mystery that unsettles the boundary between memory and selfhood.'],
  ['The Boy and the Heron', 'Grief & Imagination', 'A grieving boy enters a strange world where imagination and loss intertwine.'],
  ['Casablanca', 'Love & Sacrifice', 'In wartime, personal love collides with responsibility to a wider cause.'],
  ['Cinema Paradiso', 'Memory & Belonging', 'A filmmaker looks back on the cinema and community that shaped his childhood.'],
  ['Coco', 'Family & Remembrance', 'A young musician journeys among the dead and discovers the importance of family memory.'],
  ['The Farewell', 'Family & Cultural Difference', 'A family gathers around a difficult secret, weighing love, honesty, and cultural values.'],
  ['Forrest Gump', 'Fate & History', 'One man moves through decades of change, raising questions about chance, kindness, and history.'],
  ['Get Out', 'Identity & Power', 'A visit to meet a partner’s family becomes a sharp exploration of race, control, and social performance.'],
  ['The Grand Budapest Hotel', 'Friendship & Memory', 'A writer recalls an eccentric hotel concierge and a world transformed by history.'],
  ['Her', 'Love & Technology', 'A lonely writer forms a relationship with an operating system and considers intimacy in a digital age.'],
  ['Ikiru', 'Purpose & Mortality', 'After learning he is seriously ill, a civil servant searches for meaning in the time he has left.'],
  ['In the Mood for Love', 'Longing & Restraint', 'Two neighbors form a quiet bond while navigating loneliness and social expectations.'],
  ['Inside Out', 'Emotion & Change', 'A child’s emotions learn that sadness and joy both matter during a major life transition.'],
  ['Into the Spider-Verse', 'Responsibility & Becoming', 'Miles Morales discovers that heroism can take many forms and that growth is shared.'],
  ['The Iron Giant', 'Choice & Humanity', 'A boy befriends a powerful visitor whose choices define who he becomes.'],
  ['It’s a Wonderful Life', 'Community & Worth', 'A man sees how his ordinary acts have shaped the lives of his community.'],
  ['The Lives of Others', 'Surveillance & Conscience', 'A state surveillance officer begins to question the system and his own role within it.'],
  ['Mad Max: Fury Road', 'Freedom & Solidarity', 'A desperate escape becomes a story of resistance, cooperation, and reclaiming agency.'],
  ['The Matrix', 'Reality & Choice', 'A computer hacker confronts the nature of his world and the cost of choosing to see it clearly.'],
  ['Moonlight', 'Identity & Tenderness', 'Across three stages of life, a young man searches for belonging and a language for himself.'],
  ['My Neighbor Totoro', 'Wonder & Family', 'Two sisters find comfort and wonder in nature while their family faces uncertainty.'],
  ['No Country for Old Men', 'Violence & Fate', 'A pursuit through the American West considers chance, morality, and a changing world.'],
  ['The Pianist', 'Survival & Art', 'A musician struggles to survive wartime occupation while holding on to music and selfhood.'],
  ['Portrait of a Lady on Fire', 'Art & Looking', 'An artist and her subject develop a connection shaped by observation, memory, and freedom.'],
  ['The Princess Mononoke', 'Nature & Conflict', 'A young warrior encounters the complex struggle between industry and the natural world.'],
  ['Rashomon', 'Truth & Memory', 'Conflicting accounts of one event reveal how perspective shapes what people call truth.'],
  ['Rear Window', 'Seeing & Assumption', 'A photographer confined to his apartment turns observation into a question of evidence and ethics.'],
  ['Roma', 'Care & Class', 'A domestic worker’s life and relationships unfold against a changing social landscape.'],
  ['The Seventh Seal', 'Faith & Mortality', 'A knight confronts death and searches for meaning in a world marked by uncertainty.'],
  ['Shoplifters', 'Family & Belonging', 'A makeshift family tests the boundaries between care, law, and social convention.'],
  ['The Social Network', 'Ambition & Isolation', 'The creation of a social platform traces ambition, friendship, and the costs of success.'],
  ['Soul', 'Purpose & Everyday Life', 'A musician’s journey asks whether a meaningful life depends on one grand purpose.'],
  ['The Tree of Life', 'Grief & Wonder', 'A family story connects personal loss with questions about nature, grace, and the universe.'],
  ['The Truman Show', 'Reality & Freedom', 'A man begins to question the carefully controlled world built around him.'],
  ['Up', 'Grief & Adventure', 'An old man sets out on an adventure and learns that love can make room for new connections.'],
  ['WALL·E', 'Care & Stewardship', 'A small robot’s journey reflects on environmental responsibility, consumer culture, and companionship.'],
  ['Whiplash', 'Ambition & Abuse', 'A young drummer confronts the cost of pursuing excellence under a punishing mentor.'],
  ['Wild Strawberries', 'Memory & Regret', 'An elderly professor revisits his past and begins to reconsider how he has lived.'],
  ['The Wizard of Oz', 'Home & Courage', 'A fantastical journey helps a young traveler recognize courage, heart, and belonging.'],
  ['The Worst Person in the World', 'Choice & Uncertainty', 'A young woman navigates love, work, and changing ideas of who she wants to be.'],
  ['Your Name', 'Connection & Identity', 'Two teenagers share a mysterious connection that reshapes their understanding of time and one another.'],
  ['The Handmaiden', 'Deception & Agency', 'A layered story of manipulation develops into a struggle for trust and personal freedom.'],
  ['The Florida Project', 'Childhood & Inequality', 'A child’s imaginative summer unfolds beside the economic hardship faced by her family.'],
  ['The Green Knight', 'Honor & Fear', 'A knight’s symbolic quest tests his ideas about bravery, honor, and mortality.'],
  ['Inception', 'Dreams & Reality', 'A specialist enters layered dreams, where memory, responsibility, and the line between reality and imagination become difficult to separate.'],
  ['The Secret Life of Walter Mitty', 'Imagination & Action', 'A daydreamer steps into the world and discovers confidence through real experience.']
];

const additionalCharacters = [
  ['Atticus Finch', 'To Kill a Mockingbird', 'The Principled Advocate', 'A lawyer tries to act with fairness and empathy in a community shaped by prejudice.'],
  ['Aibileen Clark', 'The Help', 'The Quiet Truth-Teller', 'A domestic worker shares her perspective and helps challenge an unjust social order.'],
  ['Amélie Poulain', 'Amélie', 'The Secret Benefactor', 'A shy observer brings small joys to others while learning to risk connection herself.'],
  ['Andrew Neiman', 'Whiplash', 'The Relentless Apprentice', 'A gifted drummer pursues greatness while confronting the harm caused by relentless pressure.'],
  ['Andy Dufresne', 'The Shawshank Redemption', 'The Quiet Strategist', 'A patient prisoner holds on to hope and works toward a future beyond confinement.'],
  ['Cleo', 'Roma', 'The Caregiver', 'A domestic worker sustains a household while navigating personal grief and social inequality.'],
  ['Belle', 'Beauty and the Beast', 'The Curious Independent', 'A reader values compassion and understanding over appearances and convention.'],
  ['Bilbo Baggins', 'The Hobbit', 'The Unexpected Adventurer', 'A comfort-loving hobbit discovers courage and resourcefulness beyond home.'],
  ['Chihiro', 'Spirited Away', 'The Reluctant Hero', 'A resourceful child grows more confident as she faces uncertainty and cares for others.'],
  ['Clementine Kruczynski', 'Eternal Sunshine of the Spotless Mind', 'The Unconventional Romantic', 'A spontaneous woman explores intimacy, memory, and the messiness of love.'],
  ['Dory', 'Finding Nemo', 'The Optimistic Companion', 'Despite memory challenges, she meets uncertainty with persistence, warmth, and humor.'],
  ['Ellen Ripley', 'Alien', 'The Survivor', 'A practical crew member responds to danger with resolve and clear judgment.'],
  ['Evelyn Wang', 'Everything Everywhere All at Once', 'The Unexpected Hero', 'An overwhelmed mother finds strength in compassion and renewed connection with her family.'],
  ['Furiosa', 'Mad Max: Fury Road', 'The Liberator', 'A determined leader risks everything to help others escape an oppressive system.'],
  ['George Bailey', 'It’s a Wonderful Life', 'The Community Builder', 'A man learns that his ordinary generosity has made a lasting difference to others.'],
  ['Hiccup', 'How to Train Your Dragon', 'The Compassionate Challenger', 'A young outsider questions inherited conflict and builds trust through empathy.'],
  ['Holly Golightly', 'Breakfast at Tiffany’s', 'The Guarded Dreamer', 'A stylish, independent woman hides vulnerability while searching for a place to belong.'],
  ['Hugo Cabret', 'Hugo', 'The Curious Repairer', 'An orphan uses ingenuity and curiosity to uncover a story of invention and belonging.'],
  ['Jo March', 'Little Women', 'The Ambitious Writer', 'A fiercely independent writer balances creative ambition with love for her family.'],
  ['Jordan Belfort', 'The Wolf of Wall Street', 'The Cautionary Charmer', 'A persuasive salesperson illustrates how unchecked greed can hollow out a life.'],
  ['Judy Hopps', 'Zootopia', 'The Determined Idealist', 'A new police officer challenges stereotypes while learning to question her own assumptions.'],
  ['Katniss Everdeen', 'The Hunger Games', 'The Reluctant Symbol', 'A protective survivor becomes a public figure while trying to preserve her humanity.'],
  ['Luca Paguro', 'Luca', 'The Curious Outsider', 'A sea creature discovers friendship and independence while confronting fear of difference.'],
  ['Marge Gunderson', 'Fargo', 'The Grounded Investigator', 'A calm and empathetic police chief solves a violent case with patience and integrity.'],
  ['Marlin', 'Finding Nemo', 'The Anxious Protector', 'A fearful father learns that caring for someone also means allowing them room to grow.'],
  ['Matilda Wormwood', 'Matilda', 'The Resourceful Reader', 'A bright child uses imagination and courage to stand up to unfair authority.'],
  ['Mia Dolan', 'La La Land', 'The Persistent Artist', 'An aspiring actor weighs creative ambition against the uncertainty of a changing life.'],
  ['Miles Morales', 'Spider-Man: Into the Spider-Verse', 'The New Hero', 'A teenager learns that responsibility and courage can belong to anyone.'],
  ['Mulan', 'Mulan', 'The Resourceful Protector', 'A young woman risks convention to protect her family and prove her own capabilities.'],
  ['Nausicaä', 'Nausicaä of the Valley of the Wind', 'The Peaceful Mediator', 'A courageous princess seeks understanding between people and a damaged natural world.'],
  ['Neo', 'The Matrix', 'The Questioning Seeker', 'A hacker confronts an artificial reality and chooses whether to accept a difficult truth.'],
  ['Nina Sayers', 'Black Swan', 'The Perfectionist', 'A dedicated dancer struggles with identity and the destructive demands of perfection.'],
  ['Oskar Schindler', 'Schindler’s List', 'The Moral Opportunist', 'A businessman uses his position and resources to protect people from persecution.'],
  ['Paddington', 'Paddington', 'The Gentle Guest', 'A polite bear meets suspicion with kindness and gradually creates a home in a new community.'],
  ['Paterson', 'Paterson', 'The Attentive Observer', 'A bus driver finds beauty and creative meaning in the patterns of everyday life.'],
  ['Phil Connors', 'Groundhog Day', 'The Reluctant Learner', 'A repeated day pushes a cynical weatherman toward empathy and genuine change.'],
  ['Remy', 'Ratatouille', 'The Unlikely Artist', 'A rat with a talent for cooking pursues creative expression despite others’ expectations.'],
  ['Rick Blaine', 'Casablanca', 'The Cynic with a Conscience', 'A guarded nightclub owner must choose between private desire and helping others.'],
  ['Rocky Balboa', 'Rocky', 'The Underdog', 'A working-class boxer values self-respect and persistence as much as winning.'],
  ['Samwise Gamgee', 'The Lord of the Rings', 'The Loyal Companion', 'A humble friend offers courage and steadfast care through an overwhelming journey.'],
  ['Shrek', 'Shrek', 'The Guarded Outsider', 'An ogre learns to trust friendship and question the labels imposed on him.'],
  ['The Bride', 'Kill Bill', 'The Relentless Survivor', 'A betrayed fighter pursues justice while confronting the consequences of vengeance.'],
  ['Thelma Dickinson', 'Thelma & Louise', 'The Awakening Adventurer', 'A quiet woman discovers independence and resolve during an unexpected journey.'],
  ['Tiana', 'The Princess and the Frog', 'The Dedicated Dreamer', 'A hardworking aspiring restaurateur pursues her goal while learning to make room for others.'],
  ['Truman Burbank', 'The Truman Show', 'The Truth-Seeker', 'A curious man questions his surroundings and seeks an authentic life.'],
  ['Winston Smith', '1984', 'The Private Dissenter', 'A citizen attempts to preserve independent thought under an all-controlling state.'],
  ['Woody', 'Toy Story', 'The Insecure Leader', 'A loyal toy learns to share purpose and friendship when his place in the group changes.'],
  ['Yelena Belova', 'Black Widow', 'The Wry Survivor', 'A trained operative reclaims agency and rebuilds trust with the family she lost.'],
  ['Shizuku Tsukishima', 'Whisper of the Heart', 'The Aspiring Creator', 'A student discovers her own creative ambitions and works to develop her craft.'],
  ['Zuko', 'The Last Airbender', 'The Changing Heir', 'A banished prince gradually questions his upbringing and chooses a more compassionate path.'],
  ['The Little Prince', 'The Little Prince', 'The Wondering Philosopher', 'A curious traveler sees how care and attention give relationships their meaning.'],
  ['Dr. Louise Banks', 'Arrival', 'The Patient Interpreter', 'A linguist uses listening and empathy to bridge a profound divide between worlds.'],
  ['Anton Chigurh', 'No Country for Old Men', 'The Unstoppable Pursuer', 'A methodical killer moves through a violent pursuit, testing how chance and moral choice shape the people he encounters.'],
  ['Carl Fredricksen', 'Up', 'The Grieving Adventurer', 'After loss, Carl’s journey opens him to friendship, responsibility, and new forms of belonging.'],
  ['Dorothy Gale', 'The Wizard of Oz', 'The Courageous Traveler', 'Far from home, Dorothy builds courage through care for her companions and learns what home means to her.'],
  ['Gustave H.', 'The Grand Budapest Hotel', 'The Cultivated Mentor', 'A meticulous concierge offers loyalty and dignity amid a world changing around him.'],
  ['Hogarth Hughes', 'The Iron Giant', 'The Compassionate Friend', 'A curious boy sees a person where others see a weapon, helping the Giant choose who he wants to be.'],
  ['Joe Gardner', 'Soul', 'The Everyday Seeker', 'A musician learns that paying attention to ordinary life can matter as much as pursuing one grand goal.'],
  ['Mark Zuckerberg', 'The Social Network', 'The Ambitious Founder', 'A gifted programmer’s drive to build a social platform strains friendships and exposes the cost of ambition.'],
  ['Miguel Rivera', 'Coco', 'The Family Storyteller', 'A young musician pursues his craft while discovering how memory and family shape identity.'],
  ['WALL·E', 'WALL·E', 'The Patient Caretaker', 'A small robot’s steady curiosity and care help others reconnect with their world.'],
  ['Władysław Szpilman', 'The Pianist', 'The Artist in Hiding', 'A pianist struggles to survive wartime occupation while preserving his connection to music.']
];

function getLetterboxdSlug(title) {
  return title
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function addLetterboxdLink(card, filmTitle) {
  const link = createTextElement('a', 'Letterboxd');
  link.href = `https://letterboxd.com/film/${getLetterboxdSlug(filmTitle)}/`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.className = 'catalog-link';
  link.addEventListener('click', event => event.stopPropagation());
  card.append(link);
}

let activeSpeechButton = null;
let activeQuoteAudio = null;

function addAudioButton(card, text, audioUrl = '') {
  if (!text || card.querySelector('.audio-play-button')) return;
  const button = createTextElement('button', '▶ Play audio', 'btn btn-secondary audio-play-button');
  button.type = 'button';
  button.setAttribute('aria-label', 'Play quote audio');
  if (!audioUrl && (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window))) {
    button.disabled = true;
    button.title = 'Audio playback is not supported by this browser.';
  } else {
    button.addEventListener('click', () => {
      if (activeSpeechButton === button) {
        if (activeQuoteAudio) {
          activeQuoteAudio.pause();
          activeQuoteAudio.currentTime = 0;
          activeQuoteAudio = null;
        } else if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
        }
        button.textContent = '▶ Play audio';
        button.setAttribute('aria-pressed', 'false');
        activeSpeechButton = null;
        return;
      }

      if (activeQuoteAudio) {
        activeQuoteAudio.pause();
        activeQuoteAudio.currentTime = 0;
        activeQuoteAudio = null;
      }
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      if (activeSpeechButton) activeSpeechButton.textContent = '▶ Play audio';
      activeSpeechButton = button;
      button.textContent = '⏹ Stop audio';
      button.setAttribute('aria-pressed', 'true');

      if (audioUrl) {
        const audio = new Audio(audioUrl);
        activeQuoteAudio = audio;
        audio.addEventListener('ended', () => {
          button.textContent = '▶ Play audio';
          button.setAttribute('aria-pressed', 'false');
          if (activeSpeechButton === button) activeSpeechButton = null;
          if (activeQuoteAudio === audio) activeQuoteAudio = null;
        }, { once: true });
        audio.addEventListener('error', () => {
          button.textContent = 'Audio unavailable';
          button.title = 'The MP3 could not be loaded. Check that the audio file is available.';
          button.setAttribute('aria-pressed', 'false');
          if (activeSpeechButton === button) activeSpeechButton = null;
          if (activeQuoteAudio === audio) activeQuoteAudio = null;
        }, { once: true });
        audio.play().catch(() => {
          button.textContent = 'Audio unavailable';
          button.title = 'The MP3 could not be played. Check your device audio output.';
          button.setAttribute('aria-pressed', 'false');
          if (activeSpeechButton === button) activeSpeechButton = null;
          if (activeQuoteAudio === audio) activeQuoteAudio = null;
        });
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.volume = 1;
      utterance.rate = 0.95;
      const englishVoice = window.speechSynthesis.getVoices()
        .find(voice => voice.lang.toLowerCase().startsWith('en'));
      if (englishVoice) utterance.voice = englishVoice;
      utterance.addEventListener('end', () => {
        button.textContent = '▶ Play audio';
        button.setAttribute('aria-pressed', 'false');
        if (activeSpeechButton === button) activeSpeechButton = null;
      }, { once: true });
      utterance.addEventListener('error', () => {
        button.textContent = 'Audio unavailable';
        button.title = 'Check your device volume and browser speech settings, then try again.';
        button.setAttribute('aria-pressed', 'false');
        if (activeSpeechButton === button) activeSpeechButton = null;
      }, { once: true });
      window.speechSynthesis.speak(utterance);
    });
  }
  card.append(button);
}

function addAudioToStaticQuotes() {
  const audioCounts = new Map();
  document.querySelectorAll('.quote-card').forEach(card => {
    const quote = card.querySelector('em')?.textContent.trim();
    const film = card.querySelector('p:last-of-type')?.textContent.trim().replace(/^—\s*/, '') || '';
    if (quote) {
      const filmSlug = getLetterboxdSlug(film);
      const occurrence = audioCounts.get(filmSlug) || 0;
      audioCounts.set(filmSlug, occurrence + 1);
      const suffix = occurrence ? `-${occurrence + 1}` : '';
      addAudioButton(card, quote, `../../assets/audio/${filmSlug}${suffix}.mp3`);
      addClipLink(card, quote, film);
    }
  });
}

function addClipLink(card, quote, film) {
  if (!quote || card.querySelector('.quote-clip-button')) return;
  const link = createTextElement('a', '▷ Watch clip', 'btn btn-secondary quote-clip-button');
  link.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(`${film} ${quote} scene clip`)}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', `Find a clip of this quote from ${film} on YouTube`);
  card.append(link);
}

function normalizeArtworkWords(value) {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function artworkFileMatchesSubject(fileName, subject, filmTitle = '') {
  const fileWords = normalizeArtworkWords(fileName);
  const significantWords = value => normalizeArtworkWords(value)
    .split(' ')
    .filter(word => word.length > 2 && !['the', 'and', 'for', 'from'].includes(word));
  const subjectWords = significantWords(subject);
  const filmWords = significantWords(filmTitle);
  return subjectWords.length > 0
    && subjectWords.every(word => fileWords.includes(word))
    && (!filmTitle || (filmWords.length > 0 && filmWords.every(word => fileWords.includes(word))));
}

// Use artwork only when Wikipedia resolves to the intended film or character.
function addCatalogArtwork(card, subject, kind = 'film', relatedFilm = '') {
  if (card.querySelector('.catalog-artwork')) return;

  const poster = createTextElement('div', '', 'catalog-artwork');
  poster.setAttribute('role', 'img');
  poster.setAttribute('aria-label', `${subject} ${kind === 'character' ? 'picture' : 'poster'}`);
  poster.append(createTextElement('span', subject, 'catalog-artwork-title'));
  card.prepend(poster);

  // Curated, movie-specific character images take precedence over automatic artwork.
  const characterImageOverrides = {
    'John Keating': { url: 'https://static.wikia.nocookie.net/p__/images/6/65/John_Keating.jpg/revision/latest?cb=20191112072841&path-prefix=protagonist' },
    'Chihiro': { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZhg64jNldRq4XGlgIs9gVuFoNW8h6hJ9E_rkKENSx4A&s=10' },
    'Will Hunting': { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSFIuavJKE3buPckMPMzzgqNDS6dr-IwguQNcd2VaOPA&s=10' },
    'Evelyn Wang': { url: 'https://static.wikia.nocookie.net/everythingeverywhere/images/8/80/Evelyn_Wang.jpg/revision/latest?cb=20220512162020' },
    'Andy Dufresne': { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3TbwA3_1-JMw9VsF1RsKamtfnAfqFThe_w3GTCwNpTQ&s=10' },
    'Atticus Finch': { url: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Gregory_Peck_To_Kill_a_Mockingbird_still.jpg', source: 'https://commons.wikimedia.org/wiki/File:Gregory_Peck_To_Kill_a_Mockingbird_still.jpg' },
    'Aibileen Clark': { url: 'https://assets2.cbsnewsstatic.com/hub/i/r/2012/02/23/25d2b245-a644-11e2-a3f0-029118418759/thumbnail/1240x1332/28de24c3e51e2e9a29a0d853c6bcd810/Help_Davis.jpg', source: 'https://www.cbsnews.com/pictures/oscars-2012-the-help/' },
    'Amélie Poulain': { url: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/02/13/16/amelie.jpg?fit=crop&height=900&width=1200', source: 'https://www.independent.co.uk/arts-entertainment/films/news/amelie-sequel-jean-pierre-jeunet-audrey-tautou-paris-france-a8904181.html' },
    'Andrew Neiman': { url: 'https://cdn.mos.cms.futurecdn.net/jVa85JRMVtwh8tPeBSPdCR.jpg', source: 'https://www.cinemablend.com/movies/still-conflicted-about-whiplash-ending' },
    'Cleo': { url: 'https://st1.uvnimg.com/af/d7/e4cf00254a539f79cc7b54af2f2d/roma-382-004r.JPG', source: 'https://www.univision.com/noticias/trending/la-pelicula-roma-es-una-carta-de-amor-a-las-empleadas-domesticas-indigenas-dice-su-protagonista-yalitza-aparicio' },
    'Belle': { url: 'https://m.media-amazon.com/images/M/MV5BMDU2ODVkMTktYTEzNC00YjUyLTkyYmItMmI4MWVlNWUyNTE4XkEyXkFqcGc%40._V1_.jpg', source: 'https://www.imdb.com/title/tt0101414/mediaviewer/rm3789102848/' },
    'Bilbo Baggins': { url: 'https://www.slashfilm.com/img/gallery/the-hobbit-an-unexpected-journey-trailer-2-part-one-of-peter-jacksons-trilogy-is-filled-with-humor-and-action/intro-import.jpg', source: 'https://www.slashfilm.com/523045/the-hobbit-an-unexpected-journey-trailer-2-part-one-of-peter-jacksons-trilogy-is-filled-with-humor-and-action/' },
    'Clementine Kruczynski': { url: 'https://img.buzzfeed.com/buzzfeed-static/static/2022-02/17/14/asset/d13cdc9e560e/sub-buzz-1373-1645107778-20.jpg?crop=1937%3A1712%3B628%2C89', source: 'https://www.buzzfeed.com/racheldunkel/best-movie-characters-with-blue-hair' },
    'Dory': { url: 'https://lumiere-a.akamaihd.net/v1/images/12461_12515_12521_thumb_fn_12489_12522_12540_980c2240.jpeg?region=0%2C0%2C800%2C800', source: 'https://kids.disney.co.jp/character/dory' },
    'Ellen Ripley': { url: 'https://www.slashfilm.com/img/gallery/why-stephen-king-didnt-like-the-ending-of-alien/l-intro-1751991960.jpg', source: 'https://www.slashfilm.com/1906750/stephen-king-alien-ending-feelings/' },
    'Furiosa': { url: 'https://gcp-na-images.contentstack.com/v3/assets/bltea6093859af6183b/blt5e983f1e86b9d993/6987eeca3c1639b260455e5e/frd-02064r.jpg?auto=webp&branch=production&crop=3%3A2&quality=75&width=3840', source: 'https://time.com/3850323/mad-max-fury-road-eve-ensler-feminist/' },
    'George Bailey': { url: 'https://s.wsj.net/public/resources/images/ED-AZ253_GrammS_GR_20191220192018.jpg', source: 'https://www.wsj.com/articles/george-bailey-saw-the-miracle-of-capitalism-11577144861' },
    'Hiccup': { url: 'https://www.everyeye.it/public/immagini/03112010/c_2010_how_to_train_your_dragon_027.jpg', source: 'https://cinema.everyeye.it/articoli/recensione-dragon-trainer-12621.html' },
    'Holly Golightly': { url: 'https://www.film.it/fileadmin/mediafiles/film/multimedia/201803/images/628x400/tiffany.jpg', source: 'https://www.film.it/film/foto/dettaglio/art/dieci-personaggi-femminili-che-hanno-fatto-la-storia-del-cinema-52282/' },
    'Hugo Cabret': { url: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Hugo-Cabret.Hugo.webp', source: 'https://www.charactour.com/hub/characters/view/Hugo-Cabret.Hugo' },
    'Jo March': { url: 'https://media.vogue.co.jp/photos/5ee30abb2aa909e936db31db/master/pass/pr_littlewomen1.jpg', source: 'https://www.vogue.co.jp/lifestyle/article/movie-little-women' },
    'Jordan Belfort': { url: 'https://static.cinemagia.ro/img/db/movie/48/63/93/the-wolf-of-wall-street-539971l.jpg', source: 'https://www.cinemagia.ro/filme/the-wolf-of-wall-street-486393/imagini/1401987/' },
    'Judy Hopps': { url: 'https://www.slashfilm.com/img/gallery/the-studio-note-zootopias-creators-immediately-and-completely-ignored/l-intro-1762542033.jpg', source: 'https://www.slashfilm.com/2020009/zootopia-creators-completely-ignored-studio-note/' },
    'Katniss Everdeen': { url: 'https://m.media-amazon.com/images/M/MV5BNTk4OTg0Mzg4NV5BMl5BanBnXkFtZTcwMDAzODMwNw%40%40._V1_.jpg', source: 'https://www.imdb.com/gallery/rg944085504/mediaviewer/rm2148839936/' },
    'Luca Paguro': { url: 'https://s.yimg.com/ny/api/res/1.2/4.XOW_KS70x5Vz6otWMtzQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYxOTtjZj13ZWJw/https%3A/media.zenfs.com/en/thewrap.com/bb8ef6027efbe6312e8ff5799fb0e12a', source: 'https://www.yahoo.com/entertainment/jacob-tremblay-little-sea-monster-133245783.html' },
    'Marge Gunderson': { url: 'https://cdn.mos.cms.futurecdn.net/XYTgeB6gZ42AX7ttJZjGUg-1200-80.jpg', source: 'https://www.cinemablend.com/news/2562361/fargo-behind-the-scenes-facts-about-the-coen-brothers-movie' },
    'Marlin': { url: 'https://vignette.wikia.nocookie.net/findingdory/images/d/dd/Marlin_Render2.png/revision/latest?cb=20160523132433', source: 'https://findingdory.fandom.com/wiki/Marlin' },
    'Matilda Wormwood': { url: 'https://www.publimetro.cl/resizer/v2/QZV37IIV3JBN5FT5WCIK5OT6JA.jpg?auth=ebf7b629a810ddb6e17f44e20af210751935cd5e26b26bae04e736b5409acc84&height=675&smart=true&width=1200', source: 'https://www.publimetro.cl/entretenimiento/2023/08/13/matilda-sale-de-netflix-en-septiembre-hasta-cuando-hay-tiempo-de-ver-la-pelicula/' },
    'Mia Dolan': { url: 'https://m.media-amazon.com/images/M/MV5BYTIwZjdmODItYmNkOC00NjFlLWFlZjgtYWNiMjI4MTk4YjdkXkEyXkFqcGc%40._V1_.jpg', source: 'https://www.imdb.com/title/tt3783958/mediaviewer/rm2957402625/' },
    'Miles Morales': { url: 'https://lumiere-a.akamaihd.net/v1/images/spider-man_un_nuevo_universo_84672985.jpeg?region=0%2C0%2C1920%2C802', source: 'https://www.disney.com.br/novidades/as-4-curiosidades-sobre-miles-morales-e-outros-personagens-de-homem-aranha-no-aranhaverso' },
    'Mulan': { url: 'https://akns-images.eonline.com/eol_images/Entire_Site/2018513/rs_600x600-180613124706-600-mulan-61318-rvk.jpg?crop=1080%3A540%3Bcenter%2Ctop&fit=around%7C1080%3A540&output-quality=90', source: 'https://www.eonline.com/news/945425/20-things-you-didn-t-know-about-disney-s-mulan' },
    'Nausicaä': { url: 'https://www.ghibli.jp/gallery/nausicaa016.jpg', source: 'https://www.ghibli.jp/works/nausicaa/' },
    'Neo': { url: 'https://img.mensxp.com/media/content/2021/Sep/Keanu-Reeves-Gave-Millions-Of-Dollars-From-His-Pocket-To-The-Matrix-Crew-3_6139e0c399309.jpeg', source: 'https://www.mensxp.com/entertainment/celebrities/93235-keanu-reeves-gave-millions-of-dollars-to-the-matrix-crew-vfx.html' },
    'Nina Sayers': { url: 'https://d.ibtimes.co.uk/en/full/287737/natalie-portman-quotblack-swanquot.jpg?f=6693e9dd12358ee09cf415dfd84e733d&h=900&l=53&q=88&t=42&w=1600', source: 'https://www.ibtimes.co.uk/black-swan-sex-scenes-draws-complaints-viewers-362402' },
    'Oskar Schindler': { url: 'https://cdn.magyarnemzet.hu/2025/11/Nr0NWOG5nK69F17bDM_jAjDUUaZqUZ2zovSW3rYRgmk/fit/1000/733/no/1/aHR0cHM6Ly9jbXNjZG4uYXBwLmNvbnRlbnQucHJpdmF0ZS9jb250ZW50L2FhMGQyYjRkYzUxNDQyZThhMDY4ODgxMWI4M2I5ZWY3.jpg', source: 'https://magyarnemzet.hu/kultura/2025/11/az-ot-legjobb-liam-neeson-film-schindler-listaja-video' },
    'Paddington': { url: 'https://trailer.kinopolis.de/assets/szenenbilder/xlarge/73439_04.jpg', source: 'https://www.kinopolis.de/vi/filmdetail/paddington/32E44000012PLXMQDD' },
    'Paterson': { url: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/11/23/11/paterson-0.jpg', source: 'https://www.independent.co.uk/arts-entertainment/films/reviews/paterson-review-adam-driver-jim-jarmusch-oscars-2017-a7433681.html' },
    'Phil Connors': { url: 'https://cdn.mos.cms.futurecdn.net/cMLb2tCKWiv7tuAnCKCnP3-1024-80.jpg', source: 'https://www.cinemablend.com/movies/times-bill-murray-character-hit-someone-with-vicious-comeback' },
    'Remy': { url: 'https://static.tvtropes.org/pmwiki/pub/images/remy_webp.png', source: 'https://tvtropes.org/pmwiki/pmwiki.php/Characters/Ratatouille' },
    'Rick Blaine': { url: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Humphrey_Bogart_in_Casablanca_trailer.jpg', source: 'https://commons.wikimedia.org/wiki/File:Humphrey_Bogart_in_Casablanca_trailer.jpg' },
    'Rocky Balboa': { url: 'https://media.vanityfair.com/photos/582238f3af70ea5e7082bc9d/master/w_1024%2Cc_limit/11_new.jpg', source: 'https://www.vanityfair.com/hollywood/photos/2016/11/rocky-40th-anniversary' },
    'Samwise Gamgee': { url: 'https://m.media-amazon.com/images/M/MV5BOWJkYzg5NjYtZjUzYi00YjQxLThlNDMtODY2NjdlNzExMjUwXkEyXkFqcGc%40._V1_.jpg', source: 'https://www.imdb.com/news/ni64172063/' },
    'Shrek': { url: 'https://www.inquirer.com/resizer/v2/UHNYRRHS3BB3ZNEDOTDUM6LBGQ.jpg?auth=0cc4301d6cd0ca863489c2644c5038303c7586e2596f9c155fcfc17c78f7bffb&height=507&smart=true&width=760', source: 'https://www.inquirer.com/philly/business/comcast/20160824_Comcast_s_NBCUniversal_to_absorb_DreamWorks_into_Universal_films_unit.html' },
    'The Bride': { url: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/12/07/08/Uma-Thurman.jpg', source: 'https://www.independent.co.uk/arts-entertainment/films/news/kill-bill-3-movie-quentin-tarantino-zendaya-vivica-a-fox-a9615806.html' },
    'Thelma Dickinson': { url: 'https://www.looper.com/img/gallery/actors-who-were-never-the-same-after-a-role/geena-davis-thelma-dickinson-thelma-and-louise-1560364379.jpg', source: 'https://www.looper.com/153913/actors-never-same-after-role/' },
    'Tiana': { url: 'https://lumiere-a.akamaihd.net/v1/images/gallery_princess_tiana_4_3994f6f7_471a0687.jpeg?region=3%2C0%2C2175%2C1223', source: 'https://princess.disney.com/tiana' },
    'Truman Burbank': { url: 'https://resizer.mail.ru/p/3ad3865f-eb77-516f-98e7-dcd549ffa878/AAACZnpJdXPCSyJXapq3cVh93BWluStEWixJYMyOAUF3lS05b0ZjE9OIO8ArHudpq9Yh3WZMcTidHQi9Jwal6fwjKAc.jpg', source: 'https://kino.mail.ru/cinema/movies/625630_shou_trumana/' },
    'Winston Smith': { url: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/07/02/13/5846306.jpg?auto=webp&height=726&quality=75&width=982', source: 'https://www.independent.co.uk/arts-entertainment/books/reviews/1984-by-george-orwell-book-of-a-lifetime-an-absorbing-deeply-affecting-political-thriller-10360789.html' },
    'Woody': { url: 'https://lumiere-a.akamaihd.net/v1/images/t_toystory_sheriffwoody_characterimage_v3_7a3eae5d.jpeg?region=100%2C0%2C400%2C600', source: 'https://toystory.disney.com/' },
    'Yelena Belova': { url: 'https://cdn.marvel.com/content/2x/marvel_blackwidow_yelena3.jpg', source: 'https://www.marvel.com/articles/movies/florence-pugh-yelena-black-widow-official-movie-special' },
    'Shizuku Tsukishima': { url: 'https://www.ghibli.jp/gallery/mimi019.jpg', source: 'https://www.ghibli.jp/works/mimi/' },
    'Zuko': { url: 'https://m.media-amazon.com/images/M/MV5BODMxOTM4MjQ3NV5BMl5BanBnXkFtZTcwNzY4MTU0Mw%40%40._V1_.jpg', source: 'https://www.imdb.com/title/tt0938283/mediaviewer/rm136154368/' },
    'The Little Prince': { url: 'https://m.media-amazon.com/images/M/MV5BYzI5ZDM2OGEtZDQ5Yy00NWU2LThjYzgtODllMjMxYjM3OTE5XkEyXkFqcGc%40._V1_.jpg', source: 'https://www.imdb.com/title/tt1754656/characters/nm3031107/' },
    'Dr. Louise Banks': { url: 'https://theoddapple.com/wp-content/uploads/2020/05/arrival-2016-louise-banks.jpg', source: 'https://theoddapple.com/arrival/' },
    'Anton Chigurh': { url: 'https://pics.filmaffinity.com/no_country_for_old_men-192443606-large.jpg', source: 'https://www.filmaffinity.com/us/movieimage.php?imageId=192443606' },
    'Carl Fredricksen': { url: 'https://fwcdn.pl/webv/09/55/20955/thumbnail.20955.4.jpg', source: 'https://www.filmweb.pl/film/Odlot-2009-436704' },
    'Dorothy Gale': { url: 'https://movieplayer.net-cdn.it/t/images/2011/10/03/judy-garland-interpreta-dorothy-gale-nel-film-il-mago-di-oz-216700_jpg_1280x720_crop_q85.jpg', source: 'https://movieplayer.it/news/il-mago-di-oz-figlia-judy-garland-svela-scena-terrorizzava_164110/' },
    'Gustave H.': { url: 'https://media.traveler.es/photos/6137714c8f298b3a7a5bd17c/1%3A1/w_800%2Ch_800%2Cc_limit/127790.jpg', source: 'https://www.traveler.es/viajeros/articulos/historias-y-anecdotas-locas-de-recepcionistas/13198' },
    'Hogarth Hughes': { url: 'https://www.imfdb.org/images/8/82/IG_BB_01.jpg', source: 'https://www.imfdb.org/wiki/The_Iron_Giant' },
    'Joe Gardner': { url: 'https://t.ctcdn.com.br/CjTWfxdK-RoO2C0QYCVfD2OSmR8%3D/1024x0/smart/i414618.jpeg', source: 'https://canaltech.com.br/cinema/critica-soul-e-a-resposta-para-o-sentido-da-vida-176773/' },
    'Mark Zuckerberg': { url: 'https://www.intofilm.org/intofilm-production/789/scaledcropped/1170x658/resources/789/16277-the-social-network-columbia-pictures-2010-cropped.jpg', source: 'https://www.intofilm.org/films/filmlist/6' },
    'Miguel Rivera': { url: 'https://cdn.mos.cms.futurecdn.net/xqwcFbcqZjyKZzpXDF9vsX.png', source: 'https://www.cinemablend.com/movies/why-watching-coco-is-the-reason-i-started-to-embrace-my-latina-culture' },
    'WALL·E': { url: 'https://storage.googleapis.com/endurance-apps-liip/media/cache/disney_no_filter_grid_fs/59455bf7201621576b8b45da', source: 'https://newsroom.disney.fr/photos/wall-e-de-face-jpg-e283-dc71f.html' },
    'Władysław Szpilman': { url: 'https://images.squarespace-cdn.com/content/v1/573aa03107eaa0aeb80c9320/1520991177969-71L5E656XRL8QFXLHIB3/ThePianist_04.jpg', source: 'https://nzpff.nz/2018-programme/2018/4/8/the-pianist' }
  };
  const suppliedCharacterImage = kind === 'character' && characterImageOverrides[subject];
  if (suppliedCharacterImage) {
    const image = document.createElement('img');
    let sourceLink;
    image.src = suppliedCharacterImage.url;
    image.alt = `${subject} character picture`;
    image.loading = 'lazy';
    image.addEventListener('error', () => {
      image.remove();
      sourceLink?.remove();
    }, { once: true });
    poster.prepend(image);
    if (suppliedCharacterImage.source) {
      sourceLink = createTextElement('a', 'Image source', 'catalog-image-source');
      sourceLink.href = suppliedCharacterImage.source;
      sourceLink.target = '_blank';
      sourceLink.rel = 'noopener noreferrer';
      sourceLink.addEventListener('click', event => event.stopPropagation());
      poster.after(sourceLink);
    }
    return;
  }

  const filmWikipediaTitles = {
    'Amélie': 'Amélie (film)',
    'Arrival': 'Arrival (film)',
    'Casablanca': 'Casablanca (film)',
    'Coco': 'Coco (2017 film)',
    'The Farewell': 'The Farewell (2019 film)',
    'Forrest Gump': 'Forrest Gump (film)',
    'Get Out': 'Get Out (film)',
    'Her': 'Her (film)',
    'Inside Out': 'Inside Out (2015 film)',
    'The Iron Giant': 'The Iron Giant (film)',
    'The Matrix': 'The Matrix (1999 film)',
    'The Princess Mononoke': 'Princess Mononoke',
    'The Pianist': 'The Pianist (2002 film)',
    'Roma': 'Roma (2018 film)',
    'Rashomon': 'Rashomon (film)',
    'Soul': 'Soul (2020 film)',
    'The Green Knight': 'The Green Knight (film)',
    'The Help': 'The Help (film)',
    'The Handmaiden': 'The Handmaiden (film)',
    'The Wizard of Oz': 'The Wizard of Oz (1939 film)',
    'Up': 'Up (2009 film)',
    'Whiplash': 'Whiplash (2014 film)',
    'Mulan': 'Mulan (1998 film)',
    'Your Name': 'Your Name (film)',
    'WALL·E': 'WALL-E (film)',
    'Into the Spider-Verse': 'Spider-Man: Into the Spider-Verse'
  };
  const characterWikipediaTitles = {
    'Belle': 'Belle (Beauty and the Beast)',
    'Chihiro': 'Chihiro Ogino',
    'Dory': 'Dory (Finding Nemo)',
    'Hiccup': 'Hiccup Horrendous Haddock III',
    'Mulan': 'Mulan (Disney character)',
    'Neo': 'Neo (The Matrix)',
    'Paddington': 'Paddington Bear',
    'The Bride': 'Beatrix Kiddo',
    'Tiana': 'Tiana (The Princess and the Frog)'
  };
  const requestedTitle = kind === 'character'
    ? characterWikipediaTitles[subject] || subject
    : filmWikipediaTitles[subject] || subject;
  const search = new URL('https://en.wikipedia.org/w/api.php');
  search.search = new URLSearchParams({
    action: 'query', format: 'json', origin: '*', redirects: '1',
    prop: 'pageimages', titles: requestedTitle,
    piprop: 'name|thumbnail', pithumbsize: '500'
  }).toString();

  fetch(search)
    .then(response => response.ok ? response.json() : null)
    .then(data => {
      const page = data?.query?.pages && Object.values(data.query.pages)[0];
      const imageUrl = page?.thumbnail?.source;
      const imageName = page?.pageimage || '';
      const normalizedPageTitle = page?.title?.replace(/_/g, ' ').trim().toLocaleLowerCase();
      const normalizedRequestedTitle = requestedTitle.replace(/_/g, ' ').trim().toLocaleLowerCase();
      if (imageUrl
        && normalizedPageTitle === normalizedRequestedTitle
        && artworkFileMatchesSubject(imageName, subject, kind === 'character' ? relatedFilm : '')) {
        const image = document.createElement('img');
        image.src = imageUrl;
        image.alt = `${subject} ${kind === 'character' ? 'picture' : 'poster'}`;
        image.loading = 'lazy';
        image.addEventListener('error', () => image.remove(), { once: true });
        poster.prepend(image);
      }
    })
    .catch(() => {});
}

function addLetterboxdLinksToStaticCatalog(containerId, isCharacterCatalog = false) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.querySelectorAll(':scope > .card').forEach(card => {
    const name = card.querySelector('h3')?.textContent.trim();
    const movie = card.dataset.film || '';
    if (name) addCatalogArtwork(card, name, isCharacterCatalog ? 'character' : 'film', movie);
    if (name) addLetterboxdLink(card, isCharacterCatalog && movie ? movie : name);
  });
}

function renderAdditionalCatalog(containerId, entries, kind) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const seenTitles = new Set(
    Array.from(container.querySelectorAll(':scope > .card h3'))
      .map(heading => heading.textContent.trim().toLocaleLowerCase())
  );

  entries.forEach(entry => {
    const isCharacter = kind === 'Archetype';
    const [title, relatedTitle, subtitle, detail] = isCharacter
      ? entry
      : [entry[0], '', entry[1], entry[2]];
    const normalizedTitle = title.trim().toLocaleLowerCase();
    if (seenTitles.has(normalizedTitle)) return;
    seenTitles.add(normalizedTitle);

    const card = createTextElement('div', '', 'card');
    card.tabIndex = 0;
    card.setAttribute('role', 'group');
    addCatalogArtwork(card, title, isCharacter ? 'character' : 'film', relatedTitle);
    card.append(createTextElement('h3', title), createTextElement('p', isCharacter ? `${relatedTitle} • ${subtitle}` : `${kind}: ${subtitle}`));
    addLetterboxdLink(card, isCharacter ? relatedTitle : title);
    const openDetails = () => showModal(title, detail);
    card.addEventListener('click', openDetails);
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openDetails();
      }
    });
    container.append(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  populateJournalFilmSuggestions();
  addLetterboxdLinksToStaticCatalog('film-catalog');
  addLetterboxdLinksToStaticCatalog('character-catalog', true);
  renderAdditionalCatalog('film-catalog', additionalFilms, 'Theme');
  renderAdditionalCatalog('character-catalog', additionalCharacters, 'Archetype');
  renderAllFilmLines();
  addAudioToStaticQuotes();
  renderFilmPhilosophy();
  renderFilmCraftNotes();
});

function populateJournalFilmSuggestions() {
  const suggestions = document.getElementById('journal-film-titles');
  if (!suggestions) return;
  suggestions.replaceChildren(...[...getAllFilmTitles()]
    .sort((a, b) => a.localeCompare(b))
    .map(title => {
      const option = document.createElement('option');
      option.value = title;
      return option;
    }));
}

// Film Matcher
const filmMatcherTraitOrder = ['happy', 'sad', 'stressed', 'lonely', 'curious', 'hopeful'];
const characterMatcherTraitOrder = ['creative', 'brave', 'caring', 'independent', 'curious', 'ambitious'];
const matcherCombinationCount = Math.max(
  (1 << filmMatcherTraitOrder.length) - 1,
  (1 << characterMatcherTraitOrder.length) - 1
);

function getCombinationResultIndex(selectedValues, traitOrder) {
  const selected = new Set(selectedValues);
  const mask = traitOrder.reduce((result, trait, index) => (
    selected.has(trait) ? result | (1 << index) : result
  ), 0);
  return mask - 1;
}

function assignDistinctCombinationResults(candidates, fixedAssignments, getKey, matchesFixed) {
  const results = Array(matcherCombinationCount).fill(null);
  const usedKeys = new Set();

  fixedAssignments.forEach(([index, identity]) => {
    const candidate = candidates.find(item => matchesFixed(item, identity));
    if (candidate && !usedKeys.has(getKey(candidate))) {
      results[index] = candidate;
      usedKeys.add(getKey(candidate));
    }
  });

  const remaining = candidates.filter(item => !usedKeys.has(getKey(item)));
  let next = 0;
  for (let index = 0; index < results.length; index += 1) {
    if (!results[index]) results[index] = remaining[next++];
  }
  return results;
}

function getCharacterMatcherPool() {
  const staticCharacters = [
    ['John Keating', 'Dead Poets Society', 'The Mentor / Catalyst', 'Encourages students to think independently and challenge rigid institutional norms.'],
    ['Truman Burbank', 'The Truman Show', 'The Truth-Seeker', 'Questions his surroundings and seeks an authentic life.'],
    ['Chihiro', 'Spirited Away', 'The Reluctant Hero', 'Grows more confident as she faces uncertainty and learns to care for others.'],
    ['Will Hunting', 'Good Will Hunting', 'The Wounded Prodigy', 'Learns that accepting help and facing painful truths can open the way to change.'],
    ['Evelyn Wang', 'Everything Everywhere All at Once', 'The Unexpected Hero', 'Finds strength by recognizing the value of compassion and renewed connection with her family.'],
    ['Andy Dufresne', 'The Shawshank Redemption', 'The Quiet Strategist', 'Holds on to hope and uses patience and skill to build a future beyond confinement.']
  ];
  const seenNames = new Set();
  const seenFilms = new Set();
  return [...additionalCharacters, ...staticCharacters].filter(([name, film]) => {
    const nameKey = name.trim().toLocaleLowerCase();
    const filmKey = film.trim().toLocaleLowerCase();
    if (seenNames.has(nameKey) || seenFilms.has(filmKey)) return false;
    seenNames.add(nameKey);
    seenFilms.add(filmKey);
    return true;
  });
}

function getCharacterCombinationResults() {
  const preferredCharacters = [
    [0, 'Jo March'],
    [1, 'Chihiro'],
    [3, 'Samwise Gamgee'],
    [7, 'Mulan'],
    [15, 'Truman Burbank'],
    [31, 'Mia Dolan']
  ];
  return assignDistinctCombinationResults(
    getCharacterMatcherPool(),
    preferredCharacters,
    entry => entry[1].trim().toLocaleLowerCase(),
    (entry, name) => entry[0] === name
  );
}

function getFilmCombinationResults() {
  const preferredFilms = [
    [0, 'My Neighbor Totoro'],
    [1, 'Inside Out'],
    [3, 'The Secret Life of Walter Mitty'],
    [7, 'Amélie'],
    [15, 'Arrival'],
    [31, 'The Shawshank Redemption']
  ];
  return assignDistinctCombinationResults(
    [...getAllFilmTitles()].sort((a, b) => a.localeCompare(b)),
    preferredFilms,
    title => title.trim().toLocaleLowerCase(),
    (title, preferredTitle) => title === preferredTitle
  );
}

function getSelectedMatcherLabels(groupName, values) {
  return [...document.querySelectorAll(`input[name="${groupName}"]:checked`)]
    .filter(input => values.includes(input.value))
    .map(input => input.closest('label')?.textContent.trim() || input.value);
}

function matchFilm() {
  const values = [...document.querySelectorAll('input[name="emotion"]:checked')].map(input => input.value);
  const res = document.getElementById('film-match-result');
  if (!res) return;
  res.style.display = 'block';
  if (values.length === 0) {
    res.style.display = 'block';
    res.replaceChildren(createTextElement('p', 'Choose at least one feeling to get a film recommendation.'));
    return;
  }
  const title = getFilmCombinationResults()[getCombinationResultIndex(values, filmMatcherTraitOrder)];
  const labels = getSelectedMatcherLabels('emotion', values);
  const filmDescription = additionalFilms.find(([filmTitle]) => filmTitle === title)?.[2]
    || extraFilmSummaries[title]
    || 'The story follows its characters through changing relationships and difficult choices, showing how their actions shape the people around them.';
  const copy = createTextElement('div', '', 'match-result-copy');
  copy.append(
    createTextElement('h4', `Recommended Film: ${title}`),
    createTextElement('p', `Your selected feelings: ${labels.join(', ')}. ${filmDescription}`)
  );
  res.style.display = 'flex';
  res.replaceChildren(copy);
  addCatalogArtwork(res, title, 'film');
  addLetterboxdLink(copy, title);
}

// Character Matcher
function matchCharacter() {
  const values = [...document.querySelectorAll('input[name="trait"]:checked')].map(input => input.value);
  const res = document.getElementById('character-match-result');
  if (!res) return;
  res.style.display = 'block';
  if (values.length === 0) {
    res.style.display = 'block';
    res.replaceChildren(createTextElement('p', 'Choose at least one trait to get a character match.'));
    return;
  }
  const [name, film, archetype, description] = getCharacterCombinationResults()[
    getCombinationResultIndex(values, characterMatcherTraitOrder)
  ];
  const labels = getSelectedMatcherLabels('trait', values);
  const copy = createTextElement('div', '', 'match-result-copy');
  copy.append(
    createTextElement('h4', `Character Match: ${name}`),
    createTextElement('p', `Your selected traits: ${labels.join(', ')}. ${archetype}. ${description}`)
  );
  res.style.display = 'flex';
  res.replaceChildren(copy);
  addCatalogArtwork(res, name, 'character', film);
  addLetterboxdLink(copy, film);
}

// Film Journal Functions
function saveJournalEntry() {
  const title = document.getElementById('journal-title').value.trim();
  const text = document.getElementById('journal-text').value.trim();

  if (!title || !text) {
    alert('Please fill out both fields.');
    return;
  }

  const entries = JSON.parse(localStorage.getItem('fleiss_journals') || '[]');
  entries.unshift({ title, text, date: new Date().toLocaleDateString() });
  localStorage.setItem('fleiss_journals', JSON.stringify(entries));

  document.getElementById('journal-title').value = '';
  document.getElementById('journal-text').value = '';
  loadJournalEntries();
}

function loadJournalEntries() {
  const container = document.getElementById('journal-list');
  if (!container) return;
  const entries = JSON.parse(localStorage.getItem('fleiss_journals') || '[]');

  if (entries.length === 0) {
    container.replaceChildren(createTextElement('p', 'No entries saved yet.'));
    return;
  }

  const query = document.getElementById('journal-search')?.value.trim().toLowerCase() || '';
  const matchingEntries = entries
    .map((entry, index) => ({ entry, index }))
    .filter(({ entry }) => `${entry.title} ${entry.text}`.toLowerCase().includes(query));
  if (matchingEntries.length === 0) {
    container.replaceChildren(createTextElement('p', 'No journal entries match your search.'));
    return;
  }

  container.replaceChildren(...matchingEntries.map(({ entry, index }) => {
    const card = createTextElement('div', '', 'card');
    card.style.cssText = 'cursor: default; margin-bottom: 1rem;';
    const header = document.createElement('div');
    header.style.cssText = 'display: flex; justify-content: space-between;';
    header.append(
      createTextElement('h3', entry.title),
      createTextElement('span', entry.date)
    );
    header.lastElementChild.style.cssText = 'color: var(--muted-text); font-size: 0.85rem;';
    const deleteButton = createTextElement('button', 'Delete entry', 'btn btn-secondary journal-delete-button');
    deleteButton.type = 'button';
    deleteButton.addEventListener('click', () => deleteJournalEntry(index));
    card.append(header, createTextElement('p', entry.text), deleteButton);
    return card;
  }));
}

function deleteJournalEntry(index) {
  if (!window.confirm('Delete this journal entry?')) return;
  const entries = JSON.parse(localStorage.getItem('fleiss_journals') || '[]');
  if (!Number.isInteger(index) || index < 0 || index >= entries.length) return;
  entries.splice(index, 1);
  localStorage.setItem('fleiss_journals', JSON.stringify(entries));
  loadJournalEntries();
}

function filterJournalEntries() {
  loadJournalEntries();
}

// Quotes Filter
function filterQuotes() {
  const query = document.getElementById('quote-search').value.toLowerCase();
  const cards = document.querySelectorAll('.quote-card, .film-line-card');
  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(query) ? 'block' : 'none';
  });
}

function getAllFilmTitles() {
  return new Set([
    ...additionalFilms.map(([title]) => title),
    ...additionalCharacters.map(([, film]) => film),
    ...[
      'Dead Poets Society', 'Little Miss Sunshine', 'Finding Nemo', 'Toy Story', 'Shrek',
      'The Lion King', 'Mulan', 'Inside Out', 'The Secret Life of Walter Mitty',
      'Amélie', 'Arrival', 'The Shawshank Redemption', 'My Neighbor Totoro', 'Coco',
      'Good Will Hunting', 'Everything Everywhere All at Once', 'La La Land',
      'The Lord of the Rings'
    ]
  ]);
}

const extraFilmSummaries = {
  'Dead Poets Society': 'At a strict boarding school, an unconventional teacher encourages his students to find their own voices, while the boys face the consequences of challenging expectations.',
  'Little Miss Sunshine': 'A family takes a cross-country trip so their young daughter can enter a beauty pageant, and each member confronts a different idea of failure and success.',
  'Finding Nemo': 'A cautious clownfish crosses the ocean to find his son, while the search tests how protection and trust can coexist.',
  'Toy Story': 'When a new toy unsettles the group, Woody and Buzz must rethink rivalry, belonging, and what it means to be valued.',
  'Shrek': 'An isolated ogre sets out to reclaim his home and unexpectedly builds relationships that challenge his assumptions about appearances and acceptance.',
  'The Lion King': 'After a family tragedy, a young heir avoids responsibility before returning to face his past and decide what kind of leader to become.',
  'Mulan': 'A young woman takes her father’s place in the army, confronting danger and rigid expectations as she finds her own way to serve.',
  'Inside Out': 'As a girl adjusts to a new home, her emotions struggle to guide her, revealing why sadness and difficult feelings belong in a full life.',
  'The Secret Life of Walter Mitty': 'A daydreaming photo editor sets out to find a missing image and discovers confidence through experiences beyond his imagined adventures.',
  'La La Land': 'An aspiring actor and a jazz musician pursue their ambitions while their relationship changes alongside the choices their careers demand.',
  'The Lord of the Rings': 'A small group carries a dangerous burden across a vast landscape, exploring how friendship, courage, and shared responsibility can resist corruption.'
};

function renderFilmPhilosophy() {
  const container = document.getElementById('film-philosophy-catalog');
  if (!container) return;

  const filmInfo = new Map(additionalFilms.map(([title, theme, synopsis]) => [title, { theme, synopsis }]));
  const characterByFilm = new Map();
  additionalCharacters.forEach(([name, film, archetype, description]) => {
    if (!characterByFilm.has(film)) characterByFilm.set(film, { name, archetype, description });
  });

  const cards = [...getAllFilmTitles()].sort((a, b) => a.localeCompare(b)).map(title => {
    const info = filmInfo.get(title);
    const theme = info?.theme;
    const character = characterByFilm.get(title);
    const card = createTextElement('article', '', 'card philosophy-card');
    addCatalogArtwork(card, title);
    card.append(createTextElement('h3', title));

    const characterTheme = character ? `${character.archetype.replace(/^The /, '')} & personal choice` : '';
    const themesLabel = theme || characterTheme || 'Identity, relationships & choice';
    const story = info?.synopsis || extraFilmSummaries[title] || (character
      ? `${character.name} is presented as ${character.archetype.toLowerCase()}. ${character.description}`
      : `The story follows its characters through changing relationships and difficult choices, tracing how their actions shape both themselves and the people around them.`);
    const reading = theme
      ? `Through ${theme.toLowerCase()}, the film asks what people owe to themselves and to one another. Consider how the characters’ choices are shaped by pressure, uncertainty, and the consequences they are willing to accept.`
      : character
        ? `Through ${character.name}’s choices, the film considers how ${themesLabel.toLowerCase()} can be tested by real pressures. Notice where the character’s actions change their relationships, and what the story treats as a meaningful kind of growth.`
        : `The film invites us to examine how identity, relationships, and responsibility shape a life. Notice which choices bring characters closer to the people they want to be, and which costs the story asks them to face.`;
    card.append(
      createTextElement('p', `Themes: ${themesLabel}`),
      createTextElement('p', `Story: ${story}`, 'philosophy-description'),
      createTextElement('p', `Philosophical reading: ${reading}`, 'philosophy-description')
    );

    addLetterboxdLink(card, title);
    return card;
  });
  container.replaceChildren(...cards);
}

function filterFilmPhilosophy() {
  const query = document.getElementById('philosophy-search').value.trim().toLowerCase();
  document.querySelectorAll('.philosophy-card').forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(query) ? 'block' : 'none';
  });
}

function renderFilmCraftNotes() {
  const container = document.getElementById('film-craft-catalog');
  if (!container) return;
  const filmInfo = new Map(additionalFilms.map(([title, , synopsis]) => [title, synopsis]));
  const characterByFilm = new Map();
  additionalCharacters.forEach(([name, film, archetype, description]) => {
    if (!characterByFilm.has(film)) characterByFilm.set(film, { name, archetype, description });
  });

  const craftPrompts = [
    ['Color palette', 'Notice how warm and cool colors can distinguish comfort from uncertainty.'],
    ['Framing', 'Notice who is placed at the center or edge of the frame when relationships shift.'],
    ['Editing and rhythm', 'Watch how the pace changes around moments of tension, choice, or release.'],
    ['Sound and silence', 'Listen for how music, ambient sound, and silence guide your attention.'],
    ['Production design', 'Look at how spaces and objects reflect a character’s circumstances or choices.'],
    ['Camera movement', 'Notice when the camera follows closely, observes from a distance, or remains still.'],
    ['Performance', 'Watch for gestures and pauses that reveal feelings beyond the dialogue.'],
    ['Visual motifs', 'Look for images or shapes that return and gather meaning as the story develops.']
  ];

  const cards = [...getAllFilmTitles()].sort((a, b) => a.localeCompare(b)).map(title => {
    const index = [...title].reduce((total, char) => total + char.codePointAt(0), 0) % craftPrompts.length;
    const [craft, prompt] = craftPrompts[index];
    const card = createTextElement('article', '', 'card craft-card');
    addCatalogArtwork(card, title);
    const character = characterByFilm.get(title);
    const story = filmInfo.get(title) || extraFilmSummaries[title] || (character
      ? `${character.name} is presented as ${character.archetype.toLowerCase()}. ${character.description}`
      : `The film follows its characters through changing relationships and difficult choices, showing how their actions shape the story.`);
    const observation = `${prompt} Compare an early scene with a later one: notice how this choice changes the mood, directs attention, or reveals something new about a character.`;
    card.append(
      createTextElement('h3', title),
      createTextElement('p', `Story: ${story}`, 'craft-description'),
      createTextElement('p', `Craft focus: ${craft}`),
      createTextElement('p', `Behind the scenes: ${observation}`, 'craft-description')
    );
    const link = createTextElement('a', 'Find making-of clips');
    link.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(`${title} official behind the scenes making of`)}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'catalog-link';
    card.append(link);
    return card;
  });
  container.replaceChildren(...cards);
}

function filterCraftNotes() {
  const query = document.getElementById('craft-search').value.trim().toLowerCase();
  document.querySelectorAll('.craft-card').forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(query) ? 'block' : 'none';
  });
}

function renderAllFilmLines() {
  const container = document.getElementById('all-film-lines');
  if (!container) return;

  const themes = new Map(additionalFilms.map(([title, theme]) => [title, theme]));
  container.replaceChildren(...[...getAllFilmTitles()].sort((a, b) => a.localeCompare(b)).map(title => {
    const card = createTextElement('article', '', 'card film-line-card');
    addCatalogArtwork(card, title);
    const theme = themes.get(title);
    const reflection = theme
      ? `What does ${theme.toLowerCase()} ask us to notice in our own lives?`
      : 'Every story leaves us with a different way to see the choices that shape a life.';
    card.append(
      createTextElement('h4', title),
      createTextElement('p', `Original reflection: “${reflection}”`)
    );
    addAudioButton(card, reflection);
    const link = createTextElement('a', 'Find a clip');
    link.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(`${title} official movie clip trailer`)}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'catalog-link';
    card.append(link);
    return card;
  }));
}

// Community Stories Functions
function getStoryOwnerId() {
  let ownerId = localStorage.getItem('fleiss_story_owner_id');
  if (!ownerId) {
    ownerId = globalThis.crypto?.randomUUID?.()
      || `story-owner-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    localStorage.setItem('fleiss_story_owner_id', ownerId);
  }
  return ownerId;
}

function publishStory() {
  const author = document.getElementById('story-author').value.trim() || 'Anonymous';
  const title = document.getElementById('story-title').value.trim();
  const content = document.getElementById('story-content').value.trim();

  if (!title || !content) {
    alert('Please fill out the title and content.');
    return;
  }

  const stories = JSON.parse(localStorage.getItem('fleiss_stories') || '[]');
  stories.unshift({
    author,
    title,
    content,
    date: new Date().toLocaleDateString(),
    ownerId: getStoryOwnerId()
  });
  localStorage.setItem('fleiss_stories', JSON.stringify(stories));

  alert('Your story has been published!');
  window.location.href = 'read%20others%20story.html';
}

function loadStories() {
  const container = document.getElementById('community-stories-list');
  if (!container) return;
  const stories = JSON.parse(localStorage.getItem('fleiss_stories') || '[]');
  const ownerId = getStoryOwnerId();
  let adoptedLegacyStories = false;
  stories.forEach(story => {
    if (!story.ownerId) {
      story.ownerId = ownerId;
      adoptedLegacyStories = true;
    }
  });
  if (adoptedLegacyStories) {
    localStorage.setItem('fleiss_stories', JSON.stringify(stories));
  }

  if (stories.length === 0) {
    container.replaceChildren(createTextElement('p', 'No stories have been shared yet.'));
    return;
  }

  container.replaceChildren(...stories.map((s, index) => {
    const card = createTextElement('div', '', 'card');
    card.style.cursor = 'default';
    card.append(
      createTextElement('h3', s.title),
      createTextElement('p', `By ${s.author} • ${s.date}`),
      createTextElement('p', s.content)
    );
    card.children[1].style.cssText = 'font-size: 0.85rem; color: var(--accent-color);';
    card.children[2].style.marginTop = '0.5rem';
    if (s.ownerId === ownerId) {
      const deleteButton = createTextElement('button', 'Delete story', 'btn btn-secondary journal-delete-button');
      deleteButton.type = 'button';
      deleteButton.addEventListener('click', () => deleteCommunityStory(index));
      card.append(deleteButton);
    }
    return card;
  }));
}

function deleteCommunityStory(index) {
  if (!window.confirm('Delete this story?')) return;
  const stories = JSON.parse(localStorage.getItem('fleiss_stories') || '[]');
  if (!Number.isInteger(index) || index < 0 || index >= stories.length) return;
  if (stories[index].ownerId !== getStoryOwnerId()) return;
  stories.splice(index, 1);
  localStorage.setItem('fleiss_stories', JSON.stringify(stories));
  loadStories();
}

