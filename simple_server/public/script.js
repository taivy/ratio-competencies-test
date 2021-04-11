window.addEventListener("DOMContentLoaded", function() {
  const formUrl = "https://kpbwd338my8.typeform.com/to/Edtmnimf";
  const imgText = "Вот твои компетенции, сохрани эту картинку";
  
  const popup = window.typeformEmbed.makePopup(formUrl, {
    hideFooter: false,
    hideHeaders: true,
    autoOpen: false,
    mode: 'popup',
    onSubmit: function (event) {
      console.log('Typeform successfully submitted')
      const response_id = event.response_id;
      const url = `https://pay.zaresh.ai/api/get-test-results`;

      const config = {
        method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({response_id: response_id})
      }
      setTimeout(() => {
        fetch(url, config).then((resp) => {
          resp.json().then((data) => {
            let resultsChart = data.resultsChart;
            const img = new Image();
            img.src = resultsChart;
            img.style.margin='10px';

            let popup = document.querySelectorAll('[data-qa="popup-mode-popup"]');
            if (popup.length > 0) {
              popupElem = popup[0];
              let iframe = document.querySelector( '[data-qa="popup-mode-popup"] iframe' );
              iframe.parentNode.removeChild(iframe);

              const imgTextElem=document.createElement('p');
              imgTextElem.style.margin='0';
              imgTextElem.innerText=imgText;

              const d=document.createElement('div');
              d.style.width='100%';
              d.style.height='100%';
              d.style.backgroundColor='white';
              d.style.display='flex';
              d.style.alignItems='center';
              d.style.justifyContent='center';
              d.style.flexDirection='column';
              d.appendChild(imgTextElem);
              d.appendChild(img);
              popupElem.appendChild(d);
            }
          })
        }).catch((err) => {
          console.log("err", err)
        })
      }, 1000)
    }
  });

  let el = document.querySelectorAll('[href*="mock_url"]');

  if (el.length > 0) {
    el[0].addEventListener('click', function(e){
      e.preventDefault();
      popup.open();
    });
  }

});
