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
        scoretitle = "You are not a psychopath. Just a little weird.";
        scoredesc = "You probably cry at Pixar movies. You're safe (for now).";
    } else if (total >= 9 && total <= 16) {
        scoretitle = "You might be a little sus.";
        scoredesc = "You sometimes have dark thoughts, but nothing too wild.";
    } else if (total >= 17 && total <= 24) {
        scoretitle = "You are probably a little psycho.";
        scoredesc = "You might want to stop watching true crime documentaries for fun.";
    } else if (total >= 25 && total <= 32) {
        scoretitle = "You are likely a psychopath.";
        scoredesc = "You have the emotional range of a brick. Patrick Bateman would be proud.";
    } else {
        scoretitle = "You are the CEO of Psychopathy.";
        scoredesc = "You are the main character in American Psycho. Please don't hurt me.";
    }

    document.getElementById('scoretitle').textContent = scoretitle;
    document.getElementById('scoredesc').textContent = scoredesc;

    document.getElementById('results').style.display = 'block';
});