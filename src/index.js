module.exports = function zeros(expression) {
    let numberArr = expression.split('*');
    let count2 = 0;
    let count5 = 0;
    let count10 = 0;


    function count5Number(number) {
        let count =0;
        if(number == 0){
            return count;
        }
        while(number % 5 == 0){
            count++;
            number /= 5;
        }
        return count;
    }

    function count5fact(number , type) {
        let count = 0;
        let val = 0;
        if(type == '!!' && number % 2 == 1){
            val = 5;
            while(val <= number){
                count+= count5Number(val);
                val += 10;
            }
            return count;
        }
        if(type == '!!' && number % 2 == 0){
            val = 10;
            while(val <= number){
                count+= count5Number(val);
                val += 10;
            }
            return count;
        }
        if(type == '!'){
            val = 5;
            while(val <= number){
                count+= count5Number(val);
                val += 5;
            }
            return count;
        }
    }

    function count2Number(number) {
        let count =0;
        if(number == 0){
            return count;
        }
        while(number % 2 == 0){
            count++;
            number /= 2;
        }
        return count;
    }

    function count2fact(number, type) {
        let count = 0;
        if(type == '!!' && number % 2 ==1){
            return count;
        }


        let val = 2;
        while(val <= number){
            count += count2Number(val);
            val += 2;
        }
        return count;

    }

    numberArr.forEach((val, index, arr) => {
        let number = Number.parseInt(val);
        if(/!!/.test(val) && number % 2 == 1){
            count5 += count5fact(number, '!!');
            return;
        }
        if(/!!/.test(val) && number % 2 == 0){
            count2 += count2fact(number, '!!');
            count5 += count5fact(number, '!!');
            return;
        }
        if(/!/.test(val)){
            count2 += count2fact(number, '!');
            count5 += count5fact(number, '!');
            return;
        }

    });

    let t = count10 + Math.min(count2, count5);
    console.log(t);
    return t;

}
