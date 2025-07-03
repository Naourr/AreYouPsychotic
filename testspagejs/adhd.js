document.querySelector('.see-results').addEventListener('click', function() {
    let total = 0;
    document.querySelectorAll('.five-toggle').forEach(group => {
        const checked = group.querySelector('input[type="radio"]:checked');
        if (checked) total += Number(checked.value);
    });

    document.getElementById('score').textContent = total;

    var scoretitle;
    var scoredesc;

    if (total >= 0 && total <= 8) {
        scoretitle = "You are not ADHD. Just easily bored.";
        scoredesc = "You probably finish what you start. Can't relate.";
    } else if (total >= 9 && total <= 16) {
        scoretitle = "You might be a little distracted.";
        scoredesc = "You sometimes lose focus, but at least you remember your own birthday.";
    } else if (total >= 17 && total <= 24) {
        scoretitle = "You are probably ADHD-adjacent.";
        scoredesc = "You have the attention span of a goldfish on Red Bull.";
    } else if (total >= 25 && total <= 32) {
        scoretitle = "You are likely ADHD.";
        scoredesc = "You are the human version of a browser with 100 tabs open.";
    } else {
        scoretitle = "You are the CEO of ADHD.";
        scoredesc = "You forgot you were taking this test, didn't you?";
    }

    document.getElementById('scoretitle').textContent = scoretitle;
    document.getElementById('scoredesc').textContent = scoredesc;

    document.getElementById('results').style.display = 'block';
});