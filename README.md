Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code: 
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0

Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("            ");
Expected Output: 0

Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2


Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code:
const word = "red";
const text = "";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "If an empty string is passed in as a word, it should return 0."
Code:
const word = "";
const text = "red RED Red!";
wordCounter(word, text);
Expected Output: 0


Describe: boldPassage()

Test: "It should return a non-matching word in a p tag."
Code:
const word = "hello";
const text = "yo";
boldPassage(word, text);
Expected Output: "<p>yo</p>"

Test: "It should return a matching word in a b tag."
Code:
const word = "hello";
const text = "hello";
boldPassage(word, text);
Expected Output: "<p><b>hello</b></p>"


Describe: threeMostCommon()

Test: "It should return an array of length 3. Each element of the array is a smaller array which should contain a word and a number which is the count of the word's occurrences."
Code:
const text = "red blue green yellow"
threeMostCommon(text);
Expected Output: [[red, 1] , [blue, 1] , [green, 1]]

Test: "It should return only one instance for each word despite repition"
Code:
const text = "blue blue blue red red green"
threeMostCommon(text);
Expected Output: [[blue, 3], [red, 2] [green, 1]]

Test: "It should return an array that is sorted by the number of occurrences."
Code: 
const text = "red red red blue blue blue blue green green"
threeMostCommon(text);
Expected Output: [[blue, 4], [red, 3], [green, 2]]

Describe: badWords()

Test: "It should return a string."
Code:
const text = "I like pizza"
badWords(text);
Expected Output: "I like pizza"

Test: "It should not accept an empty string."
Code:
const text = ""
badWords(text);
Expected Output: null

Test: "It should only accept a string."
Code:
const text = 300
badWords(text);
Expected Output: null

Test: "It removes the following words when returned: zoinks, muppeteer, biffaroni, and loopdaloop"
Code:
const text = "Holy zoinks, I'm a muppeteer, if only biffaroni, and I love loopdaloop"
badWords(text);
Expected Output: "Holy I'm a if only and I love"