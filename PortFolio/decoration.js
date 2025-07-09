const h1 = document.querySelector('h1');
const profileSummary = document.querySelector('.profile-summary');
const a = document.querySelectorAll('.nav-tags li a');
const navTags = document.querySelector('.nav-tags');

function changeNightBtn() {
    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    h1.style.color = '#ffffff';
    h1.style.backgroundColor = '#485171';
    h1.style.border = '3px solid #ffffff';
    profileSummary.style.backgroundColor = '#898989';
    navTags.style.backgroundColor = '#ACAAAA';

    for (const link of a) {
        link.style.backgroundColor = '#454545';
        link.style.color = '#FFFFFF';
        link.style.borderColor = '#DDDDDD';
    }
}

function changeNormalBtn() {
    document.body.style.backgroundColor = '#EAF6F6';
    h1.style.color = '#CC5500';
    h1.style.backgroundColor = '#c3ffff';
    h1.style.border = '3px solid #000000';
    profileSummary.style.backgroundColor = 'rgb(195, 255, 249)';
    navTags.style.backgroundColor = '#FDFFD0';

    for (const link of a) {
        link.style.backgroundColor = '#ffffff';
        link.style.color = '#CC5500';
        link.style.borderColor = '#CC5500';
    }
}

document.getElementById('changeNightBtn').addEventListener('click', changeNightBtn);
document.getElementById('changeNormalBtn').addEventListener('click', changeNormalBtn);