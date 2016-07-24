console.log('hey boo');
    var resArr = [];
    var movObj = {};
    var submit = document.getElementById('submit').addEventListener('click', function(ev){
        ev.preventDefault();
    var input = document.getElementById('input');
        inputValue = input.value;
        var url = 'https://dry-garden-88596.herokuapp.com/';//production
        //var url = 'http://localhost:3000/';
        var data = {
            input: inputValue
        };
        console.log(data);
        $.ajax({
            url: url + 'netflix/search',
            method: 'POST',
            data: data,
            dataType: 'json'
    }).done(function(response) {

            movieObj(response);
            movData(resArr)
        });

    });
function movieObj(response) {
    data = response.ITEMS;
    for (var i = 0; i < data.length; i++) {
        //console.log(data[i]);
        //***** data[i][2]******gives poster images
        movObj['title'] = data[i][1];
        movObj['poster'] = data[i][2];
        movObj['type'] = data[i][6];
        movObj['runtime'] = data[i][8];
        movObj['released'] = data[i][7];
        movObj['plot'] = data[i][3];
        resArr.push(movObj);
        movObj = {}
    }
    //console.log(resArr);
    return resArr
}
//function to push append information to screen each div will have it's own id, and it will be incremented by i as per the loop
     function movData(resArr){
         for (var i = 0; i < resArr.length; i++){
             info = document.getElementById('info');
             divs = document.createElement('div');
             divs.classList.add('stats');
             ul = document.createElement('ul');
             favorites = document.createElement('button');
             favorites.setAttribute('id', "fave" + i);
             favorites.classList.add('buttons');
             deletes = document.createElement('button');
             deletes.setAttribute('id', "dele" + i);
             deletes.classList.add('buttons');
             fButton = document.createTextNode('Add to Chill');
             dButton = document.createTextNode('No Chill');
             imgDiv = document.createElement('div');
             imgDiv.classList.add('image');
             favorites.appendChild(fButton);
             deletes.appendChild(dButton);
             info.appendChild(divs);
             divs.appendChild(ul);
             divs.appendChild(favorites);
             divs.appendChild(deletes);
             info.appendChild(imgDiv);
             for (var movie in resArr[i]){
                 if (movie ==='title'){
                     li = document.createElement('li');
                     header = document.createElement('h2');
                     titles = document.createTextNode(resArr[i].title);
                     header.appendChild(titles);
                     li.appendChild(titles);
                     ul.appendChild(li)
                 }
             }
             for (var movie in resArr[i]){
                 if (movie === 'type'){
                     li = document.createElement('li');
                     type = document.createTextNode(resArr[i].type);
                     li.appendChild(type);
                     ul.appendChild(li)
                 }
             }
             for (var movie in resArr[i]){
                 if(movie === 'runtime'){
                     li = document.createElement('li');
                     runtime = document.createTextNode(resArr[i].runtime);
                     li.appendChild(runtime);
                     ul.appendChild(li)
                 }
             }
             for (var movie in resArr[i]){
                 if(movie === 'released'){
                     li = document.createElement('li');
                     released = document.createTextNode(resArr[i].released);
                     li.appendChild(released);
                     ul.appendChild(li)
                 }
             }
             for (var movie in resArr[i]){
                 if(movie === 'plot'){
                     li = document.createElement('li');
                     plot = document.createTextNode(resArr[i].plot);
                     li.appendChild(plot);
                     ul.appendChild(li)
                 }
             }
             for(var movie in resArr[i]);{
                 if(movie === 'poster'){
                     imgDiv.setAttribute('src', resArr[i].poster)
                 }
             }
         }
     }


