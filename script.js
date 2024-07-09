document.getElementById('encode-btn').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    const encodedText = encodeText(inputText);
    showOutput(encodedText);
});

document.getElementById('decode-btn').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    const decodedText = decodeText(inputText);
    showOutput(decodedText);
});

function encodeText(text) {
    let encodedText = text.replace(/e/g, 'enter')
                          .replace(/i/g, 'imes')
                          .replace(/a/g, 'ai')
                          .replace(/o/g, 'ober')
                          .replace(/u/g, 'ufat');
    return encodedText;
}

function decodeText(text) {
    let decodedText = text.replace(/enter/g, 'e')
                          .replace(/imes/g, 'i')
                          .replace(/ai/g, 'a')
                          .replace(/ober/g, 'o')
                          .replace(/ufat/g, 'u');
    return decodedText;
}

function showOutput(text) {
    const outputPlaceholder = document.getElementById('output-placeholder');
    const outputText = document.getElementById('output-text');
    const outputImage = document.getElementById('output-image');
    
    if (text) {
        outputPlaceholder.style.display = 'none';
        outputImage.style.display = 'none';
        outputText.style.display = 'block';
        outputText.value = text;
    } else {
        outputPlaceholder.style.display = 'block';
        outputImage.style.display = 'block';
        outputText.style.display = 'none';
    }
}
