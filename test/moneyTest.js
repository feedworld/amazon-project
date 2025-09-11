import {formatCurrency} from '../script/utils/money.js'

if (formatCurrency(2095) ==='20.95'){
    console.log('')
}else {
    console.log('failed')
};

if (formatCurrency(0)==='0.00'){
    console.log('damn right ')
}else {
    console.log('Dammn!')
};


if (formatCurrency(2000.5) ==='20.01'){
    console.log('fucking good')
}else{
    console.log('damn wrong')
}