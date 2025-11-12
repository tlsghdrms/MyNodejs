// 데이터를 가져오는 비동기 함수
function fetchData(callback) {
    console.log("데이터 요청 중...");

    setTimeout(() => {
        const data = { id: 1, name: "홍길동"};
        callback(data);
    }, 2000);
}

// 콜백 함수 정의
function displayData(result) {
    console.log("가져온 데이터:", result);
}

fetchData(displayData);
