let cart = [];
const MAX_ITEMS = 3;

cart.push("사과");
cart.push("바나나");
cart.push("오렌지");

console.log("장바구니:", cart);

if (cart.length >= MAX_ITEMS) {
    console.log("장바구니가 가득 찼습니다!");
}