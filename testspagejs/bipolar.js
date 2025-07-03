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
        scoretitle = "You are not bipolar. You're just quirky.";
        scoredesc = "You have the emotional range of a teaspoon. Go touch grass.";
    } else if (total >= 9 && total <= 16) {
        scoretitle = "You might be a little moody.";
        scoredesc = "You have some spicy mood swings, but nothing a nap can't fix.";
    } else if (total >= 17 && total <= 24) {
        scoretitle = "You are probably a mood swing enjoyer.";
        scoredesc = "You might want to check if your brain is running on Windows ME.";
    } else if (total >= 25 && total <= 32) {
        scoretitle = "You are likely bipolar.";
        scoredesc = "You are the human embodiment of a rollercoaster. Hang tight.";
    } else {
        scoretitle = "You are the CEO of Bipolar.";
        scoredesc = "Congratulations, you have unlocked Ultra Instinct Mood Swings. Seek help (or don't, I'm not your mom).";
    }

    document.getElementById('scoretitle').textContent = scoretitle;
    document.getElementById('scoredesc').textContent = scoredesc;

    document.getElementById('results').style.display = 'block';
});