/**
 * const,let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "ver変数は上書き可能";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数の再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "letは上書き可能";
// console.log(val2);

// // letは再宣言不可能
// let val2="let変数を再宣言"

// const val3 = "const変数";
// console.log(val3);

// val3="const変数は上書き"

// const val3="val3変数を再宣言"

// constでもオブジェクトだと上書きは可能
// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "AAA",
//   age: "12"
// };

// val4.name = "BBB";
// val4.adress = "Tokyo";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "AAA";
// const age = "16";
// // 私の名前はAAAです。年齢は１６歳です。

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str + "`だろう";
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// アロー関数
// const func2 = (str) => {
//   return str;
// };
// retuenを省略することも出来る
// const func2 = (str) => str;
// console.log(func2("func2です"));

// // 複数のパラメータ
// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "aaa",
//   age: "18"
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;

// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const MyProfile = ["aaaa", "22"];
// const Message3 = `名前は${MyProfile[0]}です。年齢は${MyProfile[1]}歳です。`;
// console.log(Message3);

// const [name, age] = MyProfile;
// const Message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(Message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayHello("管理者");

/**
 * スプレット構文
 */
// 配列の展開
// const arr1 = [12, 1];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => {
//   return console.log(num1 + num2);
// };
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// スプレット構文だとコピーもとへの影響はない
// const arr6 = [...arr4];
// arr6[0] = 99;
// console.log(`arr4=${arr4}`);
// console.log(`arr8=${arr6}`);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// // イコールでコピーするとコピーもとにも影響する
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(`arr4=${arr4}`);
// console.log(`arr8=${arr8}`);

/**
 * mapやfilterを使った配列処理
 */
const nameArry = ["田中", "道重", "亀井"];
//for
// for (let index = 0; index < nameArry.length; index++) {
//   console.log(`${index}番目は、${nameArry[index]}`);
// }

// map
// const nameArry2 = nameArry.map((name) => {
//   return name;
// });
// console.log(nameArry2);

// nameArry.map((name, index) => console.log(`${index + 1}番目は、${name}`));

// filter
// 奇数を抽出する
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArry.map((name) => {
//   if (name === "道重") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件？条件がtrueのとき：条件がfalseの時
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// 数値が入力された場合、３桁表示するように
// const num = 1300;
// const num = "1300";

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// ２つの数値合計が１００を超えたか判定する
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };
// console.log(checkSum(50, 40));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// 一般的な使い方
// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }

// if (flag1 && flag2) {
//   console.log("1も2はtrueになります");
// }

// || は左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// && は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
