var string = null,
  arr = [],
  arr2 = [];

do {
  if (string == null) string = String(prompt("Kelimeniz"));
  else if (string.includes(" "))
    string = String(prompt("Boşluk kullanmadan kelime giriniz. Kelimeniz"));
  else
    string = String(
      prompt("En az üç karakterli kelime girmelisiniz. Kelimeniz")
    );
} while (string.length < 3 || string.includes(" "));

arr = string.split("");

for (let i = 0; i < arr.length; i++) {
  if (i == 0 || i == arr.length - 1) arr2[i] = arr[i];
  else arr2[i] = "*";
}

document.write("<br>Kelimeniz: ", string);
document.write("<br>----------------------------");
document.write("<br>Kelimeniz: ", arr2.join(""));
