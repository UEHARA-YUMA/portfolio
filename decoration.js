const h1 = document.querySelector('h1');
const profileSummary = document.querySelector('.profile-summary');
const a = document.querySelectorAll('.nav-tags li a');

function changeNightBtn() {
    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    h1.style.color = '#ffffff';
    h1.style.backgroundColor = '#485171';
    h1.style.border = '3px solid #ffffff';
    profileSummary.style.backgroundColor = '#898989';
    for (const link of a) {
        link.style.backgroundColor = '#454545';
        link.style.color = '#FFFFFF'; // 文字色も白などに変えると見やすくなります
        link.style.borderColor = '#DDDDDD'; // 枠線の色も変えると統一感が出ます
    }
}
function changeNormalBtn() {
    document.body.style.backgroundColor = '#EAF6F6';

    h1.style.color = '#CC5500';               //全体のhタグの文字の色を変更
    h1.style.backgroundColor = '#c3ffff'; 
    h1.style.border = '3px solid #000000';
    profileSummary.style.backgroundColor = 'rgb(195, 255, 249)';
    for (const link of a) {
        link.style.backgroundColor = '#ffffff';
        link.style.color = '#CC5500';
        link.style.borderColor = '#CC5500';
    }
}
document.getElementById('changeNightBtn').addEventListener('click', changeNightBtn);
document.getElementById('changeNormalBtn').addEventListener('click', changeNormalBtn);
