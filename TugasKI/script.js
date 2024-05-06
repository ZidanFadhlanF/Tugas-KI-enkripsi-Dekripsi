const secretKey = 'KunciRahasia456'; 

function encryptText() {
  var textToEncrypt = document.getElementById('textToEncrypt').value;
  var encrypted = CryptoJS.AES.encrypt(textToEncrypt, secretKey);
  document.getElementById('encrypted').textContent = encrypted.toString();
}

function decryptText() {
  var textToDecrypt = document.getElementById('textToDecrypt').value;
  var decryptedBytes = CryptoJS.AES.decrypt(textToDecrypt, secretKey);
  var decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
  document.getElementById('decrypted').textContent = decryptedText;
}