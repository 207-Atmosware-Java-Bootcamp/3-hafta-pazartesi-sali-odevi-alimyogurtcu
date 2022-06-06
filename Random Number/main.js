var number = null,
  arr = [],
  arr2 = [],
  randomNumber,
  sum = 0,
  evenSum = 0,
  oddSum = 0;

do {
  if (number == null) {
    number = Number(prompt("Dizinin eleman sayısı:"));
  } else if (isNaN(number)) {
    number = Number(prompt("Sayı girmelisiniz. Dizinin eleman sayısı:"));
  } else if (number < 1) {
    number = Number(
      prompt(
        "1 ya da daha büyük bir sayı girmelisiniz.. Dizinin eleman sayısı:"
      )
    );
  }
} while (isNaN(number) || number < 1);

if (!isNaN(number || number > 0)) {
  for (let i = 0; i < number; i++) {
    randomNumber = Math.floor(Math.random() * 10);
    arr[i] = randomNumber;
    sum += randomNumber;
    if (randomNumber % 2 == 0) evenSum += randomNumber;
    else oddSum += randomNumber;

    arr2[i] = randomNumber + 1;
  }

  document.write("<br>" + "Birinci dizi: ", arr);
  document.write("<br>" + "İkinci dizi: ", arr2);
  document.write("<br>------------------------");
  document.write("<br>" + "Birinci dizinin ilk eleman: ", arr[0]);
  document.write("<br>" + "Birinci dizinin son eleman: ", arr[arr.length - 1]);
  document.write("<br>------------------------");
  document.write("<br>" + "Birinci dizi küçükten büyüğe: ", arr.sort());
  document.write(
    "<br>" + "Birinci dizi büyükten küçüğe: ",
    arr.sort().reverse()
  );
  document.write("<br>-------------------------");
  document.write("<br>" + "Birinci dizinin toplam: ", sum);
  document.write("<br>" + "Birinci dizinin çift sayılar toplamı: ", evenSum);
  document.write("<br>" + "Birinci dizinin tek sayılar toplamı: ", oddSum);
}
