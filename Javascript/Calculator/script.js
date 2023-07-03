let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '';
let array = Array.from(buttons);
array.forEach(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerHTML) {
            case '=':
                try {
                    string = eval(string);
                    input.value = string;
                    if (string === 0){
                        string = '';
                    }
                } catch (error) {
                    input.value = 'Error';
                    string = '';
                }
                break;

            case '←':
                string = string.substring(0,string.length-1);
                input.value = string;
                break;

            case 'AC':
                string = '';
                input.value = string;
                break;

            case '^':
                string += '**';
                input.value = string;
                break;
        
            default:
                string += e.target.innerHTML;
                input.value = string;
                break;
        }
    })
})