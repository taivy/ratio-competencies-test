window.addEventListener("DOMContentLoaded", function() {
  const el = document.getElementById("ratio-competence-test");
  const formUrl = "https://kpbwd338my8.typeform.com/to/Edtmnimf";
  
  window.typeformEmbed.makeWidget(el, formUrl, {
    hideFooter: false,
    hideHeaders: true,
    opacity: 0,
    onSubmit: function (event) {
      console.log('Typeform successfully submitted')
      const response_id = event.response_id;
      const url = `http://64.227.43.113:9000/get-test-results`;

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
	      		el.innerHTML = "";
	      		let resultsChart = data.resultsChart;
	      		var img = new Image();
				img.src = resultsChart;
				el.appendChild(img);
	      	})
	      }).catch((err) => {
	      	console.log("err", err)
	      })
      }, 1000)
    }
  });

  el.children[0].style.width = "100%";

});