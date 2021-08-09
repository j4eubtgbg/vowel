var input,heading;
var vowel;

function setup() 
{
  createCanvas(400, 400);
  background(178,255,102);
  input = createInput();
  input.position(5,60);

  heading = createElement('h4','enter any alphabet:');
  heading.position(5,20);

  
}

function draw() {
vowel = input.value();
switch(vowel){
  case 'a':
  console.log("Vowel");
  break;
  case 'e':
    console.log("Vowel");
    break;
    case 'i':
      console.log("Vowel");
      break;
      case 'o':
        console.log("Vowel");
        break;
        case 'u':
          console.log("Vowel");
          break;
          default:
            console.log('not a vowel');
            break;
}
}

