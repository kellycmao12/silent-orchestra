let bgFill = {
    r: 11,
    g: 12,
    b: 18,
    a: 255
};

let imgs = [];
let onscreen = [];
let star;
let skyGradient;
let goldFrame;
let orchestra;
let miloPic;
let miloGood;
let miloBad;
let sunSize = 0;
let n = 0;
let maxN = 20;
let time = '5:22 AM';
let wrong = false;
let montserrat;
let keySize = 35;
let started = false;

let picX;
let picY;
let picW;
let picH;

let letters = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');
let lettersMixed = [];
let keys = [];
let currKeys = [];
let currColors = [];

let quotes = [
    `Before you lies the silent orchestra, which fills all of the world not with sound, but with color. It is 5:22 AM -- time to play the sunrise, and you, Milo, have been tasked with waking the great conductor Chroma.\n\nTo begin the story, press any key.`,

    `At exactly 5:22 (by Tock's very accurate clock) Milo carefully opened one eye and, in a moment, the other. Everything was still purple, dark blue, and black, yet scarcely a minute remained to the long, quiet night.`,
    
    `He stretched lazily, rubbed his eyelids, scratched his head, and shivered once as a greeting to the early-morning mist.`,
    
    `"I must wake Chroma for the sunrise," he said softly. Then he suddenly wondered what it would be like to lead the orchestra and to color the whole world himself.`,
    
    `The idea whirled through his thoughts until he quickly decided that since it couldn't be very difficult, and since they probably all knew what to do by themselves anyway, and since it did seem a shame to wake anyone so early, and since it might be his only chance to try, and since the musicians were already poised and ready, he would--but just for a little while.`,
    
    `And so, as everyone slept peacefully on, Milo stood on tiptoes, raised his arms slowly in front of him, and made the slightest movement possible with the index finger of his right hand. It was now 5:23 A.M.`,

    `As if understanding his signal perfectly, a single piccolo played a single note and off in the east a solitary shaft of cool lemon light flicked across the sky. Milo smiled happily and then cautiously crooked his finger again.`,

    `This time two more piccolos and a flute joined in and three more rays of light danced lightly into view. Then with both hands he made a great circular sweep in the air and watched with delight as all the musicians began to play at once.`,

    `The cellos made the hills glow red, and the leaves and grass were tipped with a soft pale green as the violins began their song. Only the bass fiddles rested as the entire orchestra washed the forest in color.`,

    `Milo was overjoyed because they were all playing for him, and just the way they should.\n\n"Won't Chroma be surprised?" he thought, signaling the musicians to stop. "I'll wake him now."`,

    `But, instead of stopping, they continued to play even louder than before, until each color became more brilliant than he thought possible. Milo shielded his eyes with one hand and waved the other desperately, but the colors continued to grow brighter and brighter and brighter, until an even more curious thing began to happen.`,

    `As Milo frantically conducted, the sky changed slowly from blue to tan and then to a rich magenta red. Flurries of light-green snow began to fall, and the leaves on the trees and bushes turned a vivid orange.`,
    
    `All the flowers suddenly appeared black, the gray rocks became a lovely soft chartreuse, and even peacefully sleeping Tock changed from brown to a magnificent ultramarine.`, 
    
    `Nothing was the color it should have been, and yet, the more he tried to straighten things out, the worse they became.\n\n"I wish I hadn't started," he thought unhappily as a pale-blue blackbird flew by. "There doesn't seem to be any way to stop them."`,

    `He tried very hard to do everything just the way Chroma had done, but nothing worked. The musicians played on, faster and faster, and the purple sun raced quickly across the sky.`,

    `In less than a minute it had set once more in the west and then, without any pause, risen again in the east. The sky was now quite yellow and the grass a charming shade of lavender.`,
    
    `Seven times the sun rose and almost as quickly disappeared as the colors kept changing. In just a few minutes a whole week had gone by.`,

    `At last the exhausted Milo, afraid to call for help and on the verge of tears, dropped his hands to his sides. The orchestra stopped. The colors disappeared, and once again it was night. The time was 5:27 A.M.`,

    `"Wake up, everybody! Time for the sunrise!" he shouted with relief, and quickly jumped from the music stand.\n\n"What a marvelous rest," said Chroma, striding to the podium. "I feel as though I'd slept for a week. My, my, I see we're a little late this morning. I'll have to cut my lunch hour short by four minutes."`,

    `He tapped for attention, and this time the dawn proceeded perfectly. "You did a fine job," he said, patting Milo on the head. "Someday I'll let you conduct the orchestra yourself."`,

    `Tock wagged his tail proudly, but Milo didn't say a word, and to this day no one knows of the lost week but the few people who happened to be awake at 5:23 on that very strange morning.`
];

let colorNames = [
    'midnight',
    'royal blue',
    'lapis',
    'indigo',
    'violet',
    'plum',
    'wine',
    'mauve',
    'garnet',
    'scarlet',
    'amber',
    'apricot',
    'honey',
    'gold',
    'cream',
    'white',
    'eggshell',
    'periwinkle',
    'cyan',
    'baby blue'
]


function preload() {
    star = loadImage('img/star.png');
    goldFrame = loadImage('img/gold-frame.png');
    orchestra = loadImage('img/orchestra.png');
    miloGood = loadImage('img/milo-good.jpeg');
    miloBad = loadImage('img/milo-bad.jpeg');
    skyGradient = loadImage('img/sky gradient.png');
    montserrat = loadFont('fonts/Montserrat-Bold.ttf');

    imgs[0] = loadImage('img/dark/dark-left1.png');
    imgs[1] = loadImage('img/dark/dark-left2.png');
    imgs[2] = loadImage('img/dark/dark-right1.png');
    imgs[3] = loadImage('img/dark/dark-right2.png');
    imgs[4] = loadImage('img/dark/dark-light1.png');
    imgs[5] = loadImage('img/dark/dark-light2.png');

    imgs[6] = loadImage('img/purple/purple-right1.png');
    imgs[7] = loadImage('img/purple/purple-right2.png');
    imgs[8] = loadImage('img/purple/purple-left2.png');
    imgs[9] = loadImage('img/purple/purple-left2.png');
    imgs[10] = loadImage('img/purple/purple-light.png');

    imgs[11] = loadImage('img/brown/brown-right.png');
    imgs[12] = loadImage('img/brown/brown-left.png');

    imgs[13] = loadImage('img/yellow/yellow-right.png');
    imgs[14] = loadImage('img/yellow/yellow-left.png');
    
    imgs[15] = loadImage('img/olive/olive-right.png');
    imgs[16] = loadImage('img/olive/olive-left.png');

    imgs[17] = loadImage('img/green/green-right.png');
    imgs[18] = loadImage('img/green/green-left1.png');
    imgs[19] = loadImage('img/green/green-left2.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
    rectMode(CENTER);
    noStroke();

    // initial background
    fill(bgFill.r, bgFill.g, bgFill.b, 255);
    // rect(width/2, height/2, width, height);
    rect(picX, picY, picW, picH);

    // milo
    miloPic = miloGood;

    // position image
    picX = width * 0.3;
    picY = height * 0.35;
    if (width > 800 && height > 500) {
        picW = 400;
        picH = 250;
        //keySize = 35;
    } else {
        picW = 320;
        picH = 200;
        //keySize = 30;
    }

    keySize = (width * 3/5) / 15;

    // create keyboard
    for (let i = 0; i < letters.length; i++) {
        let key = new Key(letters[i]);
        keys.push(key);
    }

    // generate random order of keys to press
    lettersMixed = letters.sort((a, b) => 0.5 - Math.random());
    console.log(lettersMixed);
    // add first 2 to current list of keys allowed
    for (let i = 0; i < 2; i++) {
        let index = int(random(lettersMixed.length));
        currKeys.push(lettersMixed[index]);
        // give it a color label
        keys[letterToKeyIndex(lettersMixed[index])].setColorName(colorNames[i]);
        lettersMixed.pop(index);
    }

    // phantom tollbooth link
    let a = createA('https://www.goodreads.com/book/show/378.The_Phantom_Tollbooth', 'the phantom tollbooth \u2197', '_blank');
    a.position(width * 4/5 - textWidth('the phantom tollbooth \u2197')/2, 35);
    a.style('font-family', 'montserrat');
    a.style('color', 'rgb(30, 37, 69');
    a.style('font-size', '14px');
}

function draw() {
    // add stars
    if (frameCount % 60 == 0 && frameCount < 1200) {
        for (let i = 0; i < random(5 - n); i++) {
            let size = random(20);
            let x = random(picX - picW/2, picX + picW/2);
            let y = random(picY - picH/2, picY);
            push();
            translate(x, y);
            rotate(random(PI * 2));
            image(star, 0, 0, size, size);
            pop();
        }
    }

    // background color fades in
    fill(bgFill.r, bgFill.g, bgFill.b, 5);
    // rect(width/2, height/2, width, height);
    rect(picX, picY, picW, picH);

    // sun
    if (n > 1) {
        if (n < 11) {
            fill(255, 174, 1, 10);
        } else if (n < 15) {
            fill(255, 255, 255, 10);
        } else {
            fill(255, 174, 1, 100);
        }
        ellipseMode(CENTER);
        ellipse(picX + picW / 32, picY + picH/5.3, n * 1.2, n * 1.2);
    }
    
    // all of current images
    for (let i = 0; i < onscreen.length; i++) {
        image(onscreen[i], picX, picY, picW, picH);
    }

    // white background behind keys/header
    fill(255);
    rectMode(CORNER);
    rect(0, picY + picH/2, width, height);
    rect(0, 0, width, picY - picH/2);
    rectMode(CENTER);

    // picture frame
    image(goldFrame, picX, picY, picW, picH);

    // draw keyboard
    for (let i = 0; i < keys.length; i++) {
        keys[i].display();
    }
    // space bar photo note
    spaceX = picX;
    spaceY = height * 2/3 + keySize * 3.6;
    textAlign(CENTER, CENTER);
    fill(90);
    text('< press space to save image >', spaceX, spaceY)

    image(skyGradient, width * 4/5, height/2, width * 2/5, height);

    // draw orchestra and milo
    push();
    translate(width * 3/4, height * 0.6);
    rotate(0.12);
    image(orchestra, 0, 0, width/5, width/5 * 0.70);
    pop();
    image(miloPic, width * 0.9, height * 0.75, width/12, width/6);

    // draw quote
    noStroke();
    fill(0);
    textFont('Georgia');
    textAlign(RIGHT, CENTER);
    textSize(14);
    if (!started) {
        text(quotes[0], width * 4/5, height/6 + 50 - textWidth(quotes[0]) / 100, width/4);
    } else {
        text(quotes[n + 1], width * 4/5, height/6 + 50 - textWidth(quotes[n + 1]) / 100, width/4);
    }
    

    // time
    textAlign(CENTER, CENTER);
    if (!wrong) {
        text(time, picX, picY + picH/2 + 25);
    } else {
        let randTime = int(random(1, 13)) + ':' + int(random(1, 60)) + ' AM';
        text(randTime, picX, picY + picH/2 + 25);
    }

    // header
    push();
    textAlign(CENTER, CENTER);

    textFont(montserrat);
    textSize(24);
    fill(bgFill.r, bgFill.g, bgFill.b);
    text('the silent orchestra', picX, 40);

    textFont('Georgia');
    textSize(14);
    fill(100);
    text('follow the keys to help milo conduct the sunrise!', picX, 75);
    
    pop();
}

// checks if any keys were pressed on
function mousePressed() {
    for (let i = 0; i < keys.length; i++) {
        keys[i].mousePressed(mouseX, mouseY);
    }
}

function keyPressed() {
    if (!started) {
        started = true;
    } else {
        // only handle letter keys
        if (keyCode >= 65 && keyCode <= 90) {
            if (currKeys.includes(String.fromCharCode(keyCode))) {
                this.handleCorrectKey(String.fromCharCode(keyCode));
            } else {
                this.handleWrongKey();
            }

            // for loop through keys to match ascii to keys index
            for (let i = 0; i < keys.length; i++) {
                if (keys[i].letter == String.fromCharCode(keyCode)) {
                    keys[i].animateKey();
                    // console.log('pressed ', keys[i].letter)
                }
            }
        } else if (keyCode === 32) {    // space
            saveCanvas('sunrise', 'png');
        }
    }
    // disable space scroll
    return false;
}

function letterToKeyIndex(letter) {
    // for loop through keys to find key for that letter
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].letter === letter) {
            return i;
        }
    }
}

// control changing background, pictures, currKeys, n for correct key press
function handleCorrectKey(letter) {
    if (n < maxN - 1) {
        // base color: (11, 12, 18);
        if (n < 4) {
            bgFill = {r: 6, g: 11, b: 43, a: 20};
        } else if (n == 4) {
            bgFill = {r: 13, g: 6, b: 43, a: 20};
        } else if (n == 5) {
            bgFill = {r: 33, g: 6, b: 37, a: 20};
        } else if (n == 6) {
            bgFill = {r: 67, g: 8, b: 18, a: 20};
        } else if (n == 7) {
            bgFill = {r: 107, g: 12, b: 13, a: 20};
        } else if (n == 8) {
            bgFill = {r: 133, g: 33, b: 17, a: 20};
        } else if (n == 9) {
            bgFill = {r: 182, g: 62, b: 45, a: 20};
        } else if (n == 10) {
            bgFill = {r: 230, g: 99, b: 53, a: 20};
        } else if (n == 11) {
            bgFill = {r: 245, g: 136, b: 38, a: 100};
        } else if (n == 12) {
            bgFill = {r: 245, g: 186, b: 0, a: 100};
        } else if (n == 13) {
            bgFill = {r: 255, g: 215, b: 38, a: 100};
        } else if (n == 14) {
            bgFill = {r: 255, g: 230, b: 230, a: 20};
        } else if (n == 15) {
            bgFill = {r: 255, g: 255, b: 255, a: 255};
        } else if (n == 16) {
            bgFill = {r: 181, g: 218, b: 255, a: 20};
        } else if (n == 17) {
            bgFill = {r: 160, g: 208, b: 255, a: 20};
        } else if (n < maxN) {
            bgFill = {r: 140, g: 180, b: 255, a: 20};
        }

        // change time
        wrong = false;
        if (n < 3) {
            time = '5:22 AM';
        } else if (n < 6) {
            time = '5:23 AM';
        } else if (n < 9) {
            time = '5:24 AM';
        } else if (n < 12) {
            time = '5:25 AM';
        } else if (n < 15) {
            time = '5:26 AM';
        } else {
            time = '5:27 AM';
        }
    
        // tint whole picture
        fill(bgFill.r, bgFill.g, bgFill.b, bgFill.a);

        // most recent image
        onscreen.push(imgs[n]);
        // console.log('pushed ', n);

        // removing the pressed key
        currKeys.splice(currKeys.indexOf(letter), 1);
        
        if (n < maxN - 3) {
            let index = int(random(lettersMixed.length));
            currKeys.push(lettersMixed[index]);
            // set color of next key, which is at currKeys[1];
            keys[letterToKeyIndex(currKeys[1])].setColorName(colorNames[n + 2]);
            lettersMixed.splice(index, 1);
        }
        
        // console.log(currKeys);

        miloPic = miloGood;

        // update n
        if (n < maxN - 1) {
            n++;
        }
        console.log('n: ', n);
    }
}

// fill with a random color for wrong key press
function handleWrongKey() {
    bgFill = {r: random(255), g: random(255), b: random(255), a: 1};
    miloPic = miloBad;
    wrong = true;
}

class Key {
    constructor(letter) {
        this.letter = letter;
        this.index = letters.indexOf(letter);
        this.size = keySize;
        this.pressed = false;
        this.colorName = '';

        if (this.index < 10) {
            this.x = picX - (keySize * 1.2) * (5 - this.index) + this.size/2;
            this.y = height * 2/3;
        } else if (this.index < 19) {
            this.x = picX - (keySize * 1.2) * (4.5 - (this.index - 10)) + this.size/2;
            this.y = height * 2/3 + keySize * 1.2;
        } else if (this.index < 26) {
            this.x = picX - (keySize * 1.2) * (3.5 - (this.index - 19)) + this.size/2;
            this.y = height * 2/3 + keySize * 2.4;
        }   // 10, 45, 70
    }

    display() {
        push();
        if (currKeys.includes(this.letter) && n < maxN - 1) {
            if (n !== 15) {
                fill(bgFill.r * 1.2, bgFill.g * 1.2, bgFill.b * 1.2, 150);
            } else {
                fill(255, 250, 214, 150);
            }
        } else {
            noFill();
        }
        //stroke(0);
        stroke(bgFill.r - n * 4, bgFill.g - n * 4, bgFill.b - n * 4);
        rect(this.x, this.y, this.size, this.size, this.size/5);
        this.restoreKey();

        noStroke();
        fill(0);
        textAlign(CENTER, CENTER);
        if (n < maxN - 1) { 
            if (currKeys.includes(this.letter)) {
                textSize(this.size/3);
                text(this.letter, this.x, this.y);
                // color
                textSize(this.size/5);
                text(this.colorName, this.x, this.y + this.size * 0.3);
            }
        } else {
            textSize(this.size/3);
            stroke(0);
            fill(255);
            rect(this.x, this.y, this.size, this.size, this.size/5);
            fill(0);
            text(this.letter, this.x, this.y);
        }
        pop();
    }

    mousePressed(clickX, clickY) {
        // check if the mouse actually interacted with this key
        if (clickX > this.x - this.size/2 && clickX < this.x + this.size/2 &&
            clickY > this.y - this.size/2 && clickY < this.y + this.size/2) {
                if (!started) {
                    started = true;
                } else {
                    this.pressed = !this.pressed;
                    console.log('pressed ' + this.letter);
                    this.size -= this.size/15;
                    if (currKeys.includes(this.letter)) {
                        handleCorrectKey(this.letter);
                    } else {
                        handleWrongKey();
                    }
                }       
        }
    }

    animateKey() {
        if (this.size > keySize - this.size/15) {
            this.size -= this.size/15;
        }
    }

    restoreKey() {
        if (this.size < keySize) {
            this.size += this.size/150;
        }
    }

    setColorName(name) {
        this.colorName = name;
    }
}


