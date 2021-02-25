import requests
import argparse



parser = argparse.ArgumentParser()
parser.add_argument('response_id', type=str)
args = parser.parse_args()
resp_id = args.response_id


api_token = "5Q3ce5nCVUeNPij4V3KsuXpGd8skNLAVjxZ2mpouSJuc"
form_id = "Edtmnimf"

url = f"https://api.typeform.com/forms/{form_id}/responses?included_response_ids={resp_id}"


resp = requests.get(url, headers={
	"Authorization": "Bearer " + api_token
})
print(resp.json())

