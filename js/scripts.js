//Utility Logic

function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

function compareWordCount(a, b) {
  if (a[1] < b[1]) {
    return 1;
  }
  if (a[1] > b[1]) {
    return -1;
  }
  // a must be equal to b
  return 0;
}

//Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++
    }
  });
  return wordCount;
}

function threeMostCommon(text) {
  const wordArray = text.split(" ");
  let targetArray = [];
  wordArray.forEach(function(word) {
    let alreadyHere = false;
    targetArray.forEach(function(element) {
      if (element.includes(word.toLowerCase())) {
        alreadyHere = true;
      };
    });
    if (!alreadyHere) {
      targetArray.push([word.toLowerCase(), numberOfOccurrencesInText(word, text)]);
    };
  });
  targetArray.sort(compareWordCount);
  return targetArray.slice(0, 3);
}

function badWords(text) {
  if (typeof text !== 'string') {
    return null;
  } 
  if (text.trim().length === 0) {
    return null;
  }
  let badArray = text.split(" ");
  badArray.forEach(function(element, index) {
    if (element.includes("zoinks") || element.includes("muppeteer") || element.includes("biffaroni") || element.includes("loopdaloop")) {
      badArray.splice(index, 1);
    } 
  });
  text = badArray.join(" ");
  
  return text;
}

//for each word in the array we want to check if that element matches one of the "bad" words: zoinks, muppeteer, biffaroni, and loopdaloop

//UI Logic

function boldPassage(word, text) {
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}

$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);

    $("#bolded-passage").html(boldPassage(word, passage));
  });
});