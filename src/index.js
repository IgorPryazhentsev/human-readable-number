module.exports = function toReadable(number) {
    let result = "";
    const strNumber = String(number)
    const numberArray = strNumber.split("")
    const myArray0_9 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const myArray10_20 = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
    const myArray20_90 = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    if (number < 0 || number % 1 != 0) { result = "Введите целое положительное число" }
    else
        if (number >= 0 && number <= 9 && numberArray.length <= 1) { result = myArray0_9[number] }
        else
            if (number >= 10 && number <= 20 && numberArray.length <= 2) { result = myArray10_20[number - 10] }
            else
                if (number >= 21 && number <= 99 && Number(numberArray[1]) != 0) { result = myArray20_90[Number(numberArray[0]) - 2] + " " + myArray0_9[Number(numberArray[1])] }
                else
                    if (number >= 21 && number <= 99 && Number(numberArray[1]) == 0) { result = myArray20_90[Number(numberArray[0]) - 2] }
                    else
                        if (number >= 100 && number <= 999 && Number(numberArray[1]) != 0 && Number(numberArray[2]) != 0 && Number(numberArray[1]) != 1) { result = myArray0_9[Number(numberArray[0])] + " hundred " + myArray20_90[Number(numberArray[1]) - 2] + " " + myArray0_9[Number(numberArray[2])] }
                        else
                            if (Number(numberArray[1]) == 1) { result = myArray0_9[Number(numberArray[0])] + " hundred " + myArray10_20[Number(numberArray[2])] }
                            else
                                if (Number(numberArray[1]) == 0 && Number(numberArray[2]) == 0) { result = myArray0_9[Number(numberArray[0])] + " hundred" }
                                else
                                    if (Number(numberArray[1]) == 0) { result = myArray0_9[Number(numberArray[0])] + " hundred " + myArray0_9[Number(numberArray[2])] }
                                    else { result = myArray0_9[Number(numberArray[0])] + " hundred " + myArray20_90[Number(numberArray[1]) - 2] }
    return (`${result}`)

}
