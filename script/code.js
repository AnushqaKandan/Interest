function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);


    const Interest = (principal * (rate / 100));

    document.getElementById('result').innerText = `Interest: ${Interest.toFixed(2)}`;
}
