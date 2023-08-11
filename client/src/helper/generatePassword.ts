const upperLetters: string[] = [...Array(26)].map((_, i) => String.fromCharCode(i + 65));
const lowerLetters: string[] = upperLetters.map((val) => val.toLowerCase());
const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols: string[] = [
  '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/',
  ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|',
  '}', '~'
];

export default function generatePassword(option: {
  upperCase: boolean;
  numbers: boolean;
  symbols: boolean;
}, length: number): string {
  length = Number(length);
  let password: string = chooseRandomFromArray(lowerLetters);
  let arr: (string | number)[] = [...lowerLetters];

  if (option.upperCase) {
    arr = [...arr, ...upperLetters];
    password += chooseRandomFromArray(upperLetters);
  }

  if (option.numbers) {
    arr = [...arr, ...numbers];
    password += chooseRandomFromArray(numbers);
  }

  if (option.symbols) {
    arr = [...arr, ...symbols];
    password += chooseRandomFromArray(symbols);
  }

  while (password.length !== length) {
    password += chooseRandomFromArray(arr);
  }

  return password;
}

function chooseRandomFromArray<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
