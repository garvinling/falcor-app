

var model = new falcor.Model({source: new falcor.HttpDataSource('/model.json')});

function getColumnLength(){

	model.get('columns.length')
		.then(function(response){
			console.log(response.json.columns.length)
		})

}



getColumnLength()