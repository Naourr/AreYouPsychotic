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
        scoretitle = "You are not schizophrenic. Just a little quirky.";
        scoredesc = "You probably only hear voices when your phone rings. You're safe (for now).";
    } else if (total >= 9 && total <= 16) {
        scoretitle = "You might be a little sus.";
        scoredesc = "You sometimes see things, but it's probably just your reflection. Or is it?";
    } else if (total >= 17 && total <= 24) {
        scoretitle = "You are probably a little schizo.";
        scoredesc = "You might want to stop talking to your plants. They're not talking back.";
    } else if (total >= 25 && total <= 32) {
        scoretitle = "You are likely schizophrenic.";
        scoredesc = "You have more imaginary friends than real ones. Jerma is proud.";
    } else {
        scoretitle = "You are the main character in your own simulation.";
        scoredesc = "You are the CEO of Schizophrenia. The voices say congrats!";
    }

    document.getElementById('scoretitle').textContent = scoretitle;
    document.getElementById('scoredesc').textContent = scoredesc;

    document.getElementById('results').style.display = 'block';
});