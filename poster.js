var data = {
'user': 'test',
'id': 0
}

fetch('http://ptl-74c77e05-9175f689.libcurl.so/share', {
	method: 'POST'.
	headers: {
		'Content-Type':'application/json'
	},
	body: JSON.stringify(data)
});
