// When the button is clicked, show the result section and calculate score
document.querySelector('.see-results').addEventListener('click', function() {
    let total = 0;
    document.querySelectorAll('.five-toggle').forEach(group => {
        const checked = group.querySelector('input[type="radio"]:checked');
        if (checked) total += Number(checked.value);
    });

    document.getElementById('score').textContent = total;

    var scoretitle;
    var scoredesc;

    // Adjusted for 10 questions, max 40 points
    if (total >= 0 && total <= 8) {
        scoretitle = "You are not autistic. Calm down.";
        scoredesc = "You are a normie, a joe, a very normal, average person. In short: MID. You don't belong here, go away.";
    } else if (total >= 9 && total <= 16) {
        scoretitle = "You could be mildly autistic.";
        scoredesc = "Nothing too bad tho. You could just be a silly person. Or you might just be a cat.";
    } else if (total >= 17 && total <= 24) {
        scoretitle = "You could actually be autistic.";
        scoredesc = "You're pretty close. Hm. I'd panic if I were you tho. There's nothing wrong with being autistic though. It might make you more funny, at the very least.";
    } else if (total >= 25 && total <= 32) {
        scoretitle = "You are probably autistic.";
        scoredesc = "You cooked. You might want to look into this for real. Or just embrace the chaos.";
    } else {
        scoretitle = "You are definitely autistic.";
        scoredesc = "100%, no brainer, you cooked and you knew it way before you got here so what are you even doing, legend.";
    }

    document.getElementById('scoretitle').textContent = scoretitle;
    document.getElementById('scoredesc').textContent = scoredesc;

    // Show the result section
    document.getElementById('results').style.display = 'block';
});