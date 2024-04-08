const quotes = [
    "I never saw a wild thing sorry for itself. A small bird will drop frozen dead from a bough without ever having felt sorry for itself. - D. H. Lawrence",
    "Intelligence without ambition is a bird without wings. - Salvador Dali",
    "I think we consider too much the good luck of the early bird and not enough the bad luck of the early worm. - Franklin D. Roosevelt",
    "Be like the bird who, pausing in her flight awhile on boughs too slight, feels them give way beneath her, and yet sings, knowing she hath wings. - Victor Hugo",
    "If it looks like a duck, and quacks like a duck, we have at least to consider the possibility that we have a small aquatic bird of the family anatidae on our hands. - Douglas Adams",
    "What is a fish without a river? What is a bird without a tree to nest in? What is an Endangered Species Act without any enforcement mechanism to ensure their habitat is protected? It is nothing. - Jay Inslee",
    "To find the universal elements enough; to find the air and the water exhilarating; to be refreshed by a morning walk or an evening saunter... to be thrilled by the stars at night; to be elated over a bird's nest or a wildflower in spring - these are some of the rewards of the simple life. - John Burroughs",
    "My heart is like a singing bird. - Christina Rossetti",
    "It's impossible to explain creativity. It's like asking a bird, 'How do you fly?' You just do. - Eric Jerome Dickey",
    "The bird fights its way out of the egg. The egg is the world. Whoever will be born must destroy a world. - Hermann Hesse",
    "Poetry is like a bird, it ignores all frontiers. - Yevgeny Yevtushenko",
    "Perfect as the wing of a bird may be, it will never enable the bird to fly if unsupported by the air. Facts are the air of science. Without them a man of science can never rise. - Ivan Pavlov",
    "I never wanted to weigh more heavily on a man than a bird. - Coco Chanel",
    "Delicious autumn! My very soul is wedded to it, and if I were a bird I would fly about the earth seeking the successive autumns. - George Eliot",
    "Just as the bird sings or the butterfly soars, because it is his natural characteristic, so the artist works. - Alma Gluck",
    "Girdles and wire stays should have never been invented. No man wants to hug a padded bird cage. - Marilyn Monroe",
    "The human bird shall take his first flight, filling the world with amazement, all writings with his fame, and bringing eternal glory to the nest whence he sprang. - Leonardo da Vinci",
    "Sometimes the early bird gets the worm, but sometimes the early bird gets frozen to death. - Myron Scholes",
    "We must force the government to stop the bird migration. We must shoot all birds, field all our men and troops... and force migratory birds to stay where they are. - Vladimir Zhirinovsky",
    "When I did 'Bird,' it was a surprise to some people, first because I wasn't in it and second because most of the films I'd been doing were cop movies or westerns or adventure films, so to be doing one about Charlie Parker, who was a great influence on American music, was a great thrill for me. - Clint Eastwood",
    "I give bird songs to those who dwell in cities and have never heard them, make rhythms for those who know only military marches or jazz, and paint colors for those who see none. - Olivier Messiaen",
    "In software systems it is often the early bird that makes the worm. - Alan Perlis",
    "I wanted to know the name of every stone and flower and insect and bird and beast. I wanted to know where it got its color, where it got its life - but there was no one to tell me. - George Washington Carver",
    "Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly. - Langston Hughes",
    "No bird soars too high if he soars with his own wings. - William Blake",
    "Oh, bird of my soul, fly away now, For I possess a hundred fortified towers. - Rumi",
    "The bird is powered by its own life and by its motivation. - A. P. J. Abdul Kalam",
    "Everyone likes birds. What wild creature is more accessible to our eyes and ears, as close to us and everyone in the world, as universal as a bird? - David Attenborough",
    "No better way is there to learn to love Nature than to understand Art. It dignifies every flower of the field. And, the boy who sees the thing of beauty which a bird on the wing becomes when transferred to wood or canvas will probably not throw the customary stone. - Oscar Wilde",
    "I'd rather learn from one bird how to sing than teach ten thousand stars how not to dance. - e. e. cummings",
    "I am no bird; and no net ensnares me; I am a free human being with an independent will. - Charlotte Bronte",
    "I'm very happy being me, although sometimes I'd love to be a bird so that I could fly. - Joy Fielding",
    "The early bird catches the worm. - William Camden",
    "A bird cannot fly with one wing only. Human space flight cannot develop any further without the active participation of women. - Valentina Tereshkova",
    "Man can now fly in the air like a bird, swim under the ocean like a fish, he can burrow into the ground like a mole. Now if only he could walk the earth like a man, this would be paradise. - Tommy Douglas",
    "God gives every bird his worm, but He does not throw it into the nest. - P. D. James",
    "When you have seen one ant, one bird, one tree, you have not seen them all. - E. O. Wilson",
    "You can't be suspicious of a tree, or accuse a bird or a squirrel of subversion or challenge the ideology of a violet. - Hal Borland",
    "I don't ask for the meaning of the song of a bird or the rising of the sun on a misty morning. There they are, and they are beautiful. - Pete Hamill",
    "Faith is the bird that feels the light when the dawn is still dark. - Rabindranath Tagore",
    "A forest bird never wants a cage. - Henrik Ibsen",
    "Life without dreams is like a bird with a broken wing - it can't fly. - Dan Pena",
    "It may be hard for an egg to turn into a bird: it would be a jolly sight harder for it to learn to fly while remaining an

];
document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        "I never saw a wild thing sorry for itself. A small bird will drop frozen dead from a bough without ever having felt sorry for itself. - D. H. Lawrence",
        "Intelligence without ambition is a bird without wings. - Salvador Dali",
    ];

    function getRandomQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    document.getElementById('quote').innerText = getRandomQuote();
});