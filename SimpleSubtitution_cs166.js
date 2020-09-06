class Node {
    constructor(name, value) {
        this.value = value
        this.name = name
    }
    getName() {return this.name}
    getValue() {return this.value}
    setValue(x) {this.value = x}
}

function isLetter(s)
{
  return s.match("^[a-zA-Z\(\)]+$");    
}

function isExist(value) {
    for (let i = 0; i < count.length; i++) {
        if (value == count[i].getName()) return i
    }
    return -1;
}

function selectionSort(){
    let swap = (i,j)=>{
        let temp = count[i];
        count[i] = count[j];
        count[j] = temp;
    }

    for (let i = 0; i < count.length; i++){
        let min = i
        for (let j = i+1; j < count.length; j++){
            if (count[i].getName()<count[j].getName()) min = j
        }
        swap(min, i)
    }
}

function encryption(string){
    let dictionary = []
    dictionary['a'] = 'd'
    dictionary['b'] = 'e'
    dictionary['c'] = 'f'
    dictionary['d'] = 'g'
    dictionary['e'] = 'h'
    dictionary['f'] = 'i'
    dictionary['g'] = 'j'
    dictionary['h'] = 'k'
    dictionary['i'] = 'l'
    dictionary['j'] = 'm'
    dictionary['k'] = 'n'
    dictionary['l'] = 'o'
    dictionary['m'] = 'p'
    dictionary['n'] = 'q'
    dictionary['o'] = 'r'
    dictionary['p'] = 's'
    dictionary['q'] = 't'
    dictionary['r'] = 'u'
    dictionary['s'] = 'v'
    dictionary['t'] = 'w'
    dictionary['u'] = 'h'
    dictionary['v'] = 'y'
    dictionary['w'] = 'z'
    dictionary['h'] = 'a'
    dictionary['y'] = 'b'
    dictionary['z'] = 'c'
    let newString = ''
    for (let i = 0; i < string.length; i ++) {
        if (string[i]==' ')  newString = newString+' '
        else if (isLetter(string[i])) {
            newString = newString+dictionary[string[i]]
        }
    }
    return newString
}

/**
 * vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
 * 
 * 
 * MAIN CODE
 * 
 * 
 * vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
 */

 //Actual sentences
let actual = "Letter frequency is simply the amount of times letters of the alphabet appear on average in written language. Letter frequency analysis dates back to the Arab mathematician Al-Kindi (c. 801–873 AD), who formally developed the method to break ciphers. Letter frequency analysis gained importance in Europe with the development of movable type in 1450 AD, where one must estimate the amount of type required for each letterform. Linguists use letter frequency analysis as a rudimentary technique for language identification, where it's particularly effective as an indication of whether an unknown writing system is alphabetic, syllabic, or ideographic.\
The use of letter frequencies and frequency analysis plays a fundamental role in cryptograms and several word puzzle games, including Hangman, Scrabble and the television game show Wheel of Fortune. One of the earliest descriptions in classical literature of applying the knowledge of English letter frequency to solving a cryptogram is found in Edgar Allan Poe's famous story The Gold-Bug, where the method is successfully applied to decipher a message instructing on the whereabouts of a treasure hidden by Captain Kidd.[1]\
Letter frequencies also have a strong effect on the design of some keyboard layouts. The most frequent letters are on the bottom row of the Blickensderfer typewriter, and the home row of the Dvorak keyboard layout.\
The frequency of letters in text has been studied for use in cryptanalysis, and frequency analysis in particular, dating back to the Iraqi mathematician Al-Kindi (c. 801–873 AD), who formally developed the method (the ciphers breakable by this technique go back at least to the Caesar cipher invented by Julius Caesar, so this method could have been explored in classical times). Letter frequency analysis gained additional importance in Europe with the development of movable type in 1450 AD, where one must estimate the amount of type required for each letterform, as evidenced by the variations in letter compartment size in typographer's type cases.\
No exact letter frequency distribution underlies a given language, since all writers write slightly differently. However, most languages have a characteristic distribution which is strongly apparent in longer texts. Even language changes as extreme as from old English to modern English (regarded as mutually unintelligible) show strong trends in related letter frequencies: over a small sample of Biblical passages, from most frequent to least frequent, enaid sorhm tgþlwu æcfy ðbpxz of old English compares to eotha sinrd luymw fgcbp kvjqxz of modern English, with the most extreme differences concerning letterforms not shared.[2]\
Linotype machines for the English language assumed the letter order, from most to least common, to be etaoin shrdlu cmfwyp vbgkjq xz based on the experience and custom of manual compositors. The equivalent for the French language was elaoin sdrétu cmfhyp vbgwqj xz.\
Arranging the alphabet in Morse into groups of letters that require equal amounts of time to transmit, and then sorting these groups in increasing order, yields e it san hurdm wgvlfbk opxcz jyq.[a] Letter frequency was used by other telegraph systems, such as the Murray Code.\
Similar ideas are used in modern data-compression techniques such as Huffman coding.\
Letter frequencies, like word frequencies, tend to vary, both by writer and by subject. One cannot write an essay about x-rays without using frequent Xs, and the essay will have an idiosyncratic letter frequency if the essay is about the use of x-rays to treat zebras in Qatar. Different authors have habits which can be reflected in their use of letters. Hemingway's writing style, for example, is visibly different from Faulkner's. Letter, bigram, trigram, word frequencies, word length, and sentence length can be calculated for specific authors, and used to prove or disprove authorship of texts, even for authors whose styles are not so divergent.\
Accurate average letter frequencies can only be gleaned by analyzing a large amount of representative text. With the availability of modern computing and collections of large text corpora, such calculations are easily made. Examples can be drawn from a variety of sources (press reporting, religious texts, scientific texts and general fiction) and there are differences especially for general fiction with the position of 'h' and 'i', with 'h' becoming more common.\
Herbert S. Zim, in his classic introductory cryptography text 'Codes and Secret Writing', gives the English letter frequency sequence as 'ETAON RISHD LFCMU GYPWB VKJXZQ', the most common letter pairs as 'TH HE AN RE ER IN ON AT ND ST ES EN OF TE ED OR TI HI AS TO', and the most common doubled letters as 'LL EE SS OO TT FF RR NN PP CC'.[3]\
Also, to note that different dialects of a language will also affect a letter's frequency. For example, an author in the United States would produce something in which the letter 'z' is more common than an author in the United Kingdom writing on the same topic: words like 'analyze', 'apologize', and 'recognize' contain the letter in American English, whereas the same words are spelled 'analyse', 'apologise', and 'recognise' in British English. This would highly affect the frequency of the letter 'z' as it is a rarely used letter by British speakers in the English language.[4]\
The 'top twelve' letters constitute about 80% of the total usage. The 'top eight' letters constitute about 65% of the total usage. Letter frequency as a function of rank can be fitted well by several rank functions, with the two-parameter Cocho/Beta rank function being the best.[5] Another rank function with no adjustable free parameter also fits the letter frequency distribution reasonably well[6] (the same function has been used to fit the amino acid frequency in protein sequences.[7]) A spy using the VIC cipher or some other cipher based on a straddling checkerboard typically uses a mnemonic such as 'a sin to err' (dropping the second 'r')[8][9] or 'at one sir'[10] to remember the top eight characters.\
There are three ways to count letter frequency that result in very different charts for common letters. The first method, used in the chart below, is to count letter frequency in root words of a dictionary. The second is to include all word variants when counting, such as 'abstracts', 'abstracted' and 'abstracting' and not just the root word of 'abstract'. This system results in letters like 's' appearing much more frequently, such as when counting letters from lists of the most used English words on the Internet. A final variant is to count letters based on their frequency of use in actual texts, resulting in certain letter combinations like 'th' becoming more common due to the frequent use of common words like 'the', 'then', 'both', etc. Absolute usage frequency measures like this are used when creating keyboard layouts or letter frequencies in old fashioned printing presses.\
An analysis of entries in the Concise Oxford dictionary, ignoring frequency of word use, gives an order of 'EARIOTNSLCUDPMHGBFYWKVXZJQ'.[11]\
The letter-frequency table below is taken from Pavel Mička's website, which cites Robert Lewand's Cryptological Mathematics.[12]\
According to Lewand, arranged from most to least common in appearance, the letters are: etaoinshrdlcumwfgypbvkjxqz. Lewand's ordering differs slightly from others, such as Cornell University Math Explorer's Project, which produced a table after measuring 40,000 words.[13]\
In English, the space is slightly more frequent than the top letter (e)[14] and the non-alphabetic characters (digits, punctuation, etc.) collectively occupy the fourth position (having already included the space) between t and a.[15]\
The frequency of the first letters of words or names is helpful in pre-assigning space in physical files and indexes.[16] Given 26 filing cabinet drawers, rather than a 1:1 assignment of one drawer to one letter of the alphabet, it is often useful to use a more equal-frequency-letter code by assigning several low-frequency letters to the same drawer (often one drawer is labeled VWXYZ), and to split up the most-frequent initial letters ('S', 'A', and 'C') into several drawers (often 6 drawers Aa-An, Ao-Az, Ca-Cj, Ck-Cz, Sa-Si, Sj-Sz). The same system is used in some multi-volume works such as some encyclopedias. Cutter numbers, another mapping of names to a more equal-frequency code, are used in some libraries.\
Both the overall letter distribution and the word-initial letter distribution approximately match the Zipf distribution and even more closely match the Yule distribution.[17]\
Often the frequency distribution of the first digit in each datum is significantly different from the overall frequency of all the digits in a set of numeric data, see Benford's law for details.\
An analysis by Peter Norvig on Google Books data determined, among other things, the frequency of first letters of English words.[18]\
It's time for another blog post about ciphers. As I indicated in my previous blog post about substitution ciphers, the classical substitution cipher is no longer used to encrypt ultra-secret messages because the enciphered text is prone to a type of statistical attack known as frequency analysis.\
At the root of frequency analysis is the fact that certain letters in English prose appear more frequently than other letters. In a simple substitution cipher, each letters is disguised by replacing it with some other symbol. However, a leopard cannot change its spots, and the frequencies of the symbols in an enciphered text can reveal which symbols correspond to certain letters. In a sufficiently long message, the symbols for common letters such as E, T, and A will appear often in the ciphertext, whereas the symbols for uncommon letters such as J, Q, and Z will occur rarely in the ciphertext.\
The Wikipedia article on frequency analysis contains a nice example of how frequency analysis can be used to decrypt simple ciphers. This type of frequency analysis is usually one step in solving recreational puzzles, such the popular Cryptoquote puzzle that appears in many newspapers.\
The first task for a budding cryptanalyst is to determine the frequency distribution of letters in the language that he is deciphering. This is done by counting the number of times that each letter appears in a corpus: a large set of text (articles, books, web documents,...) that is representative of the written language. In today's world of digitized texts and rapid computing, it is easier than ever to compute the distribution of letters in a large corpus. This was done recently by Peter Norvig who used Google's digitized library as a corpus. I highly recommend Norvig's fascinating presentation of the frequency distribution of letters, words, and N-grams.\
Since Norvig did the hard work, it is simple to enter the relative frequencies of each letter into SAS and visualize the results, as follows:'\
"
actual = actual.toLowerCase()

//Encrypt actual plaintext
let string = encryption(actual)
string = string.toLowerCase()
let count = []

//Count for letter frequency
for (let i = 0; i < string.length; i ++) {
    if (isLetter(string[i])) {
        let index = isExist(string[i])
        if (index>-1) count[index].setValue((count[index].getValue()+1)/actual.length)
        else count[count.length] = new Node (string[i], 1)
    }
}
//sort letter frequency from most common to least common
//biggest to smallest
selectionSort()

//Key rank in the English alphabet
//https://www3.nd.edu/~busiforc/handouts/cryptography/letterfrequencies.html
key = ['e','a','r','i','o','t','n','s','l','c','u','d','p','m','h','g','b','f','y','w','k','v','x','z','j','q']

//Decrypt
let newString = ''
for (let i = 0; i < string.length; i ++) {
    if (string[i]==' ')  newString = newString+' '
    else if (isLetter(string[i])) {
        let index = isExist(string[i])
        newString = newString+key[index]
    }
}
console.log(newString)