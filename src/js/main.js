// 変数宣言
const obj = {
  name: 'Bob',
  age: 20,
};
console.log(obj);

obj.name = 'John';
console.log(obj);

obj.address = 'Tokyo';
console.log(obj);

const arr = ['dog', 'cat'];
console.log(arr);

arr[0] = 'bird';
console.log(arr);

arr.push('monkey');
console.log(arr);

// テンプレート文字列
const myName = '柿';
const age = 24;
// 従来
const message = '私の名前は' + myName + 'です。年齢は' + age + 'です。';
console.log(message);
// テンプレートリテラル
const newMessage = `私の名前は${myName}です。年齢は${age}です。`;
console.log(newMessage);

// アロー関数
// 従来
function fn1(str) {
  return `${str}を通常の関数で返しました。`;
}
console.log(fn1('値'));
// ES6~のアロー関数
const fn2 = str => {
  return `${str}をアロー関数で返しました。`;
};
console.log(fn2('値'));
const fn3 = (num1, num2) => {
  return num1 + num2;
};
console.log(fn3(2, 3));

// 分割代入
const myProfile = {
  name: '柿',
  AGE: 24,
};
const { name, AGE } = myProfile;
let greeting = `名前は${name}です。年齢は${AGE}です。`;
console.log(greeting);
// 配列の分割代入
const myCategory = ['サッカー', 2];
const [categoryName, categoryId] = myCategory;
const message4 = `カテゴリー名は${categoryName}、このIDは${categoryId}`;
console.log(message4);

// スプレッド構文
// 配列展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);
const sumFunc = (num1, num2) => {
  return console.log(num1 + num2);
};
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);
// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [...arr3] = arr2;
console.log(arr3);
// 配列のコピーや結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr4);
console.log(arr6);
const arr7 = [...arr4, ...arr5];
console.log(arr7);

const nameArr = ['田中', '山田', '鈴木'];
for (let i = 0; i < nameArr.length; i++) {
  console.log(nameArr[i]);
}
// 一度配列に格納してから出力
const nameArr2 = nameArr.map(name => {
  return name;
});
console.log(nameArr2);
// いちいち出力
nameArr.map(name => {
  return console.log(name);
});
nameArr.map((name, index) => {
  return console.log(`${index + 1}番目は${name}`);
});

// 一致したものだけ返却して、新しい配列を生成
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter(num => {
  return num % 2 === 1;
});
console.log(newNumArr);

const newNameArr = nameArr.map(name => {
  if (name === '鈴木') {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);
