window.addEventListener("DOMContentLoaded", function() {
  //const el = document.getElementById("ratio-competence-test");
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
      //const url = `http://64.227.43.113:9000/get-test-results`;
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
          console.log("resp", resp)
          resp.json().then((data) => {
            console.log("data", data);
            //el.innerHTML = "";
            let resultsChart = data.resultsChart;
            var img = new Image();
            img.src = resultsChart;
            img.style.margin='10px';
            //el.appendChild(img);

            let popup = document.querySelectorAll('[data-qa="popup-mode-popup"]');
            if (popup.length > 0) {
              popupElem = popup[0];
              let iframe = document.querySelector( '[data-qa="popup-mode-popup"] iframe' );
              iframe.parentNode.removeChild(iframe);

              var imgTextElem=document.createElement('p');
              imgTextElem.style.margin='0';
              imgTextElem.innerText=imgText;

              var d=document.createElement('div');
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

  /*
  document.getElementById('bt-popup').addEventListener('click', function () {
    popup.open();
  });
  */
  console.log("!11!!1")
  let el = document.querySelectorAll('[href*="mock_url"]');

  if (el.length > 0) {
    el[0].addEventListener('click', function(e){
      e.preventDefault();
      popup.open();
    });
  }

});
  console.log("???")
