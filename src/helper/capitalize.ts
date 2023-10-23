export function capitalize(str: string) {
    const words = str.split(' ')
    return words
      .map((word) => {
        const wordLowerCase = word.toLowerCase()
        const wordArr = wordLowerCase.split('')
        wordArr[0] = word[0].toUpperCase()
  
        return wordArr.join('')
      })
      .join(' ')
  }