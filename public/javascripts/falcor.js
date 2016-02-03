

var model = new falcor.Model({source: new falcor.HttpDataSource('/model.json')});

function getColumnLength(){

	model.get('columns.length')
		.then(function(response){
			console.log(response.json.columns.length)
		})

}



function getColumnsByRange(idx1,idx2){


	model.get(['columns',{from: idx1, to: idx2},'title'])
		.then(function(response){

			console.log(response.json.columns)

		})


}



getColumnLength()

getColumnsByRange(0,1)