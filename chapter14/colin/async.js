// 비동기 작업의 이해

// - Ajax와 같이 API를 사용할 때 네트워크 송수신 과정에서 시간이 걸림 -> 응답을 받을 때 까지 기다렸다가 데이터 처리
// - 동기적으로 처리한다면 해당 요청이 끝날 때 까지 다른 작업 불가 -> 비동기 필요

function printMe() {
  console.log("Hello");
}
setTimeout(printMe, 3000); // 여기서 3초간 멈추는게 아니라 line 10 실행 먼저 진행
console.log("대기중...");

// JS에선 보통 콜백을 이용
function increase(number, callback) {
  setTimeout(() => {
    const result = number + 10;
    if (callback) {
      callback(result);
    }
  }, 3000);
}

increase(0, (result) => {
  console.log(result);
});

// 콜백지옥
console.log("시작");
increase(0, (result) => {
  console.log(result);
  increase(result, (result) => {
    console.log(result);
    increase(result, (result) => {
      console.log(result);
    });
  });
});
console.log("실행 중");

// Promise 이용 (ES6부터 도입된 기능)
function increase(number) {
  const promise = new Promise((resolve, reject) => {
    // resolve는 성공, reject는 실패
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        const e = new Error("NumberTooBig");
        return reject(e);
      }
      resolve(result);
    }, 1000);
  });
  return promise;
}

increase(0)
  .then((number) => {
    console.log(number);
    return increase(number);
  })
  .then((number) => {
    console.log(number);
    return increase(number);
  })
  .then((number) => {
    console.log(number);
    return increase(number);
  })
  .then((number) => {
    console.log(number);
    return increase(number);
  })
  .then((number) => {
    console.log(number);
    return increase(number);
  })
  .then((number) => {
    console.log(number);
    return increase(number);
  })
  .catch((e) => {
    console.log(e);
  });

// async / await
// -> Promise를 더욱 쉽게 사용할 수 있도록 해주는 ES8 문법
// -> 이 문법을 사용하려면 함수의 앞 부분에 async 키워드를 추가하고, promise 앞에 await을 추가해줘야 함
// --> 이렇게 하면 promise가 끝날 때 까지 기다리고 진행함

async function runTasks() {
  try {
    let result = await increase(0);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
runTasks();
console.log("진행 중");
