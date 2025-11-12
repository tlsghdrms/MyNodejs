const order = (coffee, callback) => {
    console.log(`${coffee} 주문접수`);
    console.log(`${coffee} 제조 중`);
    
    // 커피 제조 시간 3초
    setTimeout(() => {
        callback(coffee);
    }, 3000);
}

const display = (result) => {
    console.log(`${result} 완료`);
}

order('아메리카노',display);