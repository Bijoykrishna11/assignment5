const selectBtn = document.getElementsByClassName('select');

for (let index = 0; index < selectBtn.length; index++) {
    selectBtn[index].addEventListener('click', function () {

        selectBtn[index].setAttribute('disabled', true);
        const displaydiv = document.getElementById('displayPlayer');
        const playernum = displaydiv.children.length;

        if (playernum > 4) {

            alert("Hello\nHow are you?");
        } else {
            const playerName = selectBtn[index].parentNode.parentNode.children[0].innerHTML;

            const newPlayer = document.createElement('li');

            newPlayer.innerText = playerName;
            displaydiv.append(newPlayer);

        }

    })

}