function unroll(square) {
    let i = 0;
    arr = []
    let initialLength = (square[0].length % 2 === 0) ? false : true;

    while(square.length > 0){
        if(i === 0){
            square[0].map(num => {
                arr.push(num)
            })
            if(initialLength && square.length === 3){
                i++;
            } else {
                square.shift()
                i++;
            }
        } else if(i < square.length - 1){
            if(initialLength && square.length === 3){
                square.shift()
            }
            square.map(line => {
                arr.push(line[line.length-1])
                line.pop()
            })
            i = square.length-1
        } else {
            lastrow = square[square.length-1]
            for(let j = lastrow.length-1;j >= 0; j--){
                arr.push(lastrow[j])
            }
            square.pop()
            for(let k = i-1;k > 0;k--){
                arr.push(square[k][0])
                square[k].shift()
            }
            i = 0
        }
    }
}

module.exports = unroll;
