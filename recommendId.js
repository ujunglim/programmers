function solution(new_id) {
    let result = new_id
        .toLowerCase()
        .replace(/[^\w-_.]/g, '')
        .replace(/\.+/g, '.')
        .replace(/^\.|\.$/, '')
        .replace(/^$/g, 'a')
        .slice(0, 15)
        .replace(/\.+$/g, '')

    const length = result.length
    if(length > 2) {
        return result;
    }
    else {
        const lastChar = result[length-1];
        while(result.length <= 2) {
            result += lastChar
        }
    }
    return result;
}

function solution2(new_id) {
    let input = new_id.toLowerCase().split("");
    // 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) ~!@#$%^&*()=+[{]}:?,<>/
    // const exclusions = ['!', '@', '#', '*', '+', '=', '^'];
    const exclusions = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '=', '+', '[', '{', ',', ']', '}',':', '?', ',', '<', '>', '/'];

    let isPrevDot = false;

    // remove exclusions
    input = input.filter((ele, index) => {
        if(!exclusions.includes(ele) && valid(index)) {
            return ele;
        }
    })

    // remove unvalid .
    function valid (index) {
        if(input[index] === ".") {
            if(!isPrevDot) {
                isPrevDot = true;
                return true;
            }
            return false;
        }
        isPrevDot = false;
        return true;
    }

    // remove first, last .
    if (input[0] === ".") input.splice(0,1)
    if (input[input.length -1] === ".") input.splice(input.length -1, 1);

    // empty string
    if(input.length === 0) {
        input = ["a"];
    }

    if(input.length >= 15) {
        input = input.slice(0, 15);
        while(input[input.length - 1] === ".") {
            input.pop();
        }
    }

    if(input.length <= 2) {
        const lastChar = input[input.length -1];
        while(input.length < 3) {
            input.push(lastChar);
        }
    }

    const result = input.join('');
    return result;
}

// const input = "...!@BaT#*..y.abcdefghijklm";
// const input = "a";
// const input = "z-+.^."
// const input = "=.=";
// const input = "123_.def"
const input = "abcdefghijklmn.p"
const result = solution(input);
console.log(result)
