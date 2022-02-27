let bgFill = {
    r: 25,
    g: 26,
    b: 37,
    a: 255
};

let imgs = [];
let onscreen = [];
let star;
let goldFrame;
let orchestra;
let miloPic;
let miloGood;
let miloBad;
let sunSize = 0;
let n = 0;
let time = '5:22 AM';

let picX;
let picY;
let picW;
let picH;

let letters = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');
let lettersMixed = [];
let keys = [];
let currKeys = [];

let quotes = [
    `One by one, the hours passed, and at exactly 5:22 (by Tock's very accurate clock) Milo carefully opened one eye and, in a moment, the other. Everything was still purple, dark blue, and black, yet scarcely a minute remained to the long, quiet night.`,
    
    `He stretched lazily, rubbed his eyelids, scratched his head, and shivered once as a greeting to the early-morning mist.`,
    
    `"I must wake Chroma for the sunrise," he said softly. Then he suddenly wondered what it would be like to lead the orchestra and to color the whole world himself.`,
    
    `The idea whirled through his thoughts until he quickly decided that since it couldn't be very difficult, and since they probably all knew what to do by themselves anyway, and since it did seem a shame to wake anyone so early, and since it might be his only chance to try, and since the musicians were already poised and ready, he would--but just for a little while.`,
    
    `And so, as everyone slept peacefully on, Milo stood on tiptoes, raised his arms slowly in front of him, and made the slightest movement possible with the index finger of his right hand. It was now 5:23 A.M.`,

    `As if understanding his signal perfectly, a single piccolo played a single note and off in the east a solitary shaft of cool lemon light flicked across the sky. Milo smiled happily and then cautiously crooked his finger again.`,

    `This time two more piccolos and a flute joined in and three more rays of light danced lightly into view. Then with both hands he made a great circular sweep in the air and watched with delight as all the musicians began to play at once.`,

    `The cellos made the hills glow red, and the leaves and grass were tipped with a soft pale green as the violins began their song. Only the bass fiddles rested as the entire orchestra washed the forest in color.`,

    `Milo was overjoyed because they were all playing for him, and just the way they should.\n\r"Won't Chroma be surprised?" he thought, signaling the musicians to stop. "I'll wake him now."`,

    `But, instead of stopping, they continued to play even louder than before, until each color became more brilliant than he thought possible. Milo shielded his eyes with one hand and waved the other desperately, but the colors continued to grow brighter and brighter and brighter, until an even more curious thing began to happen.`,

    `As Milo frantically conducted, the sky changed slowly from blue to tan and then to a rich magenta red. Flurries of light-green snow began to fall, and the leaves on the trees and bushes turned a vivid orange. All the flowers suddenly appeared black, the gray rocks became a lovely soft chartreuse, and even peacefully sleeping Tock changed from brown to a magnificent ultramarine.`, 
    
    `Nothing was the color it should have been, and yet, the more he tried to straighten things out, the worse they became. Seven times the sun rose and almost as quickly disappeared as the colors kept changing. In just a few minutes a whole week had gone by.`,

    `At last the exhausted Milo, afraid to call for help and on the verge of tears, dropped his hands to his sides. The orchestra stopped. The colors disappeared, and once again it was night. The time was 5:27 A.M.`,

    `"Wake up, everybody! Time for the sunrise!" he shouted with relief, and quickly jumped from the music stand.\n\r"What a marvelous rest," said Chroma, striding to the podium. "I feel as though I'd slept for a week. My, my, I see we're a little late this morning. I'll have to cut my lunch hour short by four minutes."`,

    `He tapped for attention, and this time the dawn proceeded perfectly. "You did a fine job," he said, patting Milo on the head. "Someday I'll let you conduct the orchestra yourself."`,

    `Tock wagged his tail proudly, but Milo didn't say a word, and to this day no one knows of the lost week but the few people who happened to be awake at 5:23 on that very strange morning.`
];


function preload() {
    star = loadImage('img/star.png');
    goldFrame = loadImage('img/gold-frame.png');
    orchestra = loadImage('img/orchestra.png');
    miloGood = loadImage('img/milo-good.jpeg');
    miloBad = loadImage('img/milo-bad.jpeg');

    imgs[0] = loadImage('img/dark/dark-right.png');
    imgs[1] = loadImage('img/dark/dark-left.png');
    imgs[2] = loadImage('img/dark/dark-light1.png');
    imgs[3] = loadImage('img/dark/dark-light2.png');

    imgs[4] = loadImage('img/purple/purple-right.png');
    imgs[5] = loadImage('img/purple/purple-left.png');
    imgs[6] = loadImage('img/purple/purple-light.png');

    imgs[7] = loadImage('img/brown/brown-right.png');
    imgs[8] = loadImage('img/brown/brown-left.png');

    imgs[9] = loadImage('img/yellow/yellow-right.png');
    imgs[10] = loadImage('img/yellow/yellow-left.png');
    
    imgs[11] = loadImage('img/olive/olive-right.png');
    imgs[12] = loadImage('img/olive/olive-left.png');

    imgs[13] = loadImage('img/green/green-right.png');
    imgs[14] = loadImage('img/green/green-left1.png');
    imgs[15] = loadImage('img/green/green-left2.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(100);
    imageMode(CENTER);
    rectMode(CENTER);
    noStroke();

    // initial background
    fill(bgFill.r, bgFill.g, bgFill.b, 255);
    rect(width/2, height/2, width, height);

    // milo
    miloPic = miloGood;

    // position image
    picX = width/2;
    picY = height/3;
    if (width > 800) {
        picW = 480;
        picH = 300;
    } else {
        picW = 320;
        picH = 200;
    }

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
        console.log(index);
        currKeys.push(lettersMixed[index]);
        lettersMixed.pop(index);
    }
    console.log(currKeys);
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
    fill(bgFill.r + 10, bgFill.g, bgFill.b, 5);
    rect(width/2, height/2, width, height);

    // sun
    if (n > 1) {
        if (n < 10) {
            fill(255);
        } else {
            fill(255, 174, 1); 
        }
        ellipseMode(CENTER);
        ellipse(picX + picW / 32, picY + picH/5.3, n * 1.75, n * 1.75);
    }
    
    // all of current images
    for (let i = 0; i < onscreen.length; i++) {
        image(onscreen[i], picX, picY, picW, picH);
    }

    // picture frame
    image(goldFrame, picX, picY, picW, picH);

    // white background behind keys
    fill(255);
    rect(width/2, height * 5/6, width, height/3);

    // draw keyboard
    for (let i = 0; i < keys.length; i++) {
        keys[i].display();
    }

    // draw orchestra and milo
    image(orchestra, width/2 + picW, height * 0.7, picW / 2, picH / 2);
    image(miloPic, width/2 + picW, height * 3/4, 50, 100);

    // draw quote
    noStroke();
    fill(0);
    textFont('Georgia');
    textAlign(LEFT, BASELINE);
    text(quotes[n], width/2 - picW, height - 200, 300);

}

// checks if any keys were pressed on
function mousePressed() {
    for (let i = 0; i < keys.length; i++) {
        keys[i].mousePressed(mouseX, mouseY);
    }
}

function keyPressed() {
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
                console.log('pressed ', keys[i].letter)
            }
        }
    }
    return false;
}

// control changing background, pictures, currKeys, n for correct key press
function handleCorrectKey(letter) {
    if (n < 16) {
        if (n < 1) {
            bgFill = {r: 21, g: 21, b: 60, a: 1};
            // fill(39, 29, 77, 80);   // indigo
        } else if (n < 2) {
            bgFill = {r: 21, g: 21, b: 60, a: 1};
            // fill(150, 0, 58, 80); // magenta
        } else if (n < 3) {
            bgFill = {r: 150, g: 0, b: 58, a: 1};
            // fill(150, 0, 58, 80); // magenta
        } else if (n < 5) {
            bgFill = {r: 255, g: 130, b: 10, a: 1};
            // fill(255, 71, 71, 80); // pink
        } else if (n < 7) {
            bgFill = {r: 255, g: 166, b: 0, a: 1};
            // fill(255, 145, 0, 80);  // orange
        } else if (n < 9) {
            bgFill = {r: 255, g: 186, b: 59, a: 1};
            // fill(255, 186, 59, 80);  // yellow
        } else if (n < 11) {
            bgFill = {r: 255, g: 255, b: 255, a: 1};
            // fill(255, 255, 255, 95);  // white
        } else if (n < 13) {
            bgFill = {r: 150, g: 220, b: 255, a: 1};
            // fill(199, 218, 255, 90); // blue
        } else {
            bgFill = {r: 166, g: 211, b: 255, a: 1};
        }
    
        // tint whole picture
        fill(bgFill.r, bgFill.g, bgFill.b, bgFill.a);

        // most recent image
        onscreen.push(imgs[n]);

        // removing the pressed key
        currKeys.splice(currKeys.indexOf(letter), 1);
        let index = int(random(lettersMixed.length));
        currKeys.push(lettersMixed[index]);
        lettersMixed.pop(index);

        // update n
        if (n < 15) {
            n++;
        }
        console.log(n);
    }
}

// fill with a random color for wrong key press
function handleWrongKey() {
    bgFill = {r: random(255), g: random(255), b: random(255), a: 1};
}

class Key {
    constructor(letter) {
        this.letter = letter;
        this.index = letters.indexOf(letter);
        this.size = 30;
        this.pressed = false;

        if (this.index < 10) {
            this.x = picX - 35 * (5 - this.index) + this.size/2;
            this.y = height/3 * 2 + 40;
        } else if (this.index < 19) {
            this.x = picX - 35 * (4.5 - (this.index - 10)) + this.size/2;
            this.y = height/3 * 2 + 75;
        } else if (this.index < 26) {
            this.x = picX - 35 * (3.5 - (this.index - 19)) + this.size/2;
            this.y = height/3 * 2 + 110;
        }
    }

    display() {
        push();
        if (currKeys.includes(this.letter) && n < 16) {
            if (n < 9 || n > 11) {
                fill(bgFill.r, bgFill.g, bgFill.b, 150);
            } else {
                fill(255, 186, 59, 150);
            } 
        } else {
            noFill();
        }
        stroke(0);
        rect(this.x, this.y, this.size, this.size, 5);
        this.restoreKey();

        noStroke();
        fill(0);
        textAlign(CENTER, CENTER);
        text(this.letter, this.x, this.y);
        rectMode(CENTER);
        pop();
    }

    mousePressed(clickX, clickY) {
        // check if the mouse actually interacted with this key
        if (clickX > this.x - this.size/2 && clickX < this.x + this.size/2 &&
            clickY > this.y - this.size/2 && clickY < this.y + this.size/2) {
                this.pressed = !this.pressed;
                console.log('pressed ' + this.letter);
                this.size += 2;
                if (currKeys.includes(this.letter)) {
                    handleCorrectKey(this.letter);
                } else {
                    handleWrongKey();
                }
        }
    }

    animateKey() {
        if (this.size > 28) {
            this.size -= 2;
        }
    }

    restoreKey() {
        if (this.size < 30) {
            this.size += 0.2;
        }
    }
}


