        function tableOrder(){
       var tableOne = document.getElementById('info');
       if(tableOne.style.display == 'block')
           tableOne.style.display = 'none';

       else
           tableOne.style.display = 'block';
      var tableTwo = document.getElementById('infoTwo')
        if(tableTwo.style.display == 'block')
            tableTwo.style.display = 'none';
        }



        function tableProduct(){
       var tableOne = document.getElementById('infoTwo');
       if(tableOne.style.display == 'block')
           tableOne.style.display = 'none';
       else
           tableOne.style.display = 'block';
      var tableTwo = document.getElementById('info')
        if(tableTwo.style.display == 'block')
            tableTwo.style.display = 'none';
        }

//таблица 1


                  $.ajax({
                        type: "POST",
                        url: "model/contable.php",
                        dataType: "json",

                        success: function(data)
                        {
                            var insertHTML = "<table>";
                             var json_x = data;
                         json_x.forEach(function(item){
                             insertHTML += '<tr>'+"<th scope='row'>" + item['numrequests'] + "</th>"+"<td>" + item['nameOf'] + "</td>"+"<td>" + item['pricereq'] + " грн.</td>"+"<td>" + item['countreq'] + "</td>"+"<td>" + item['fiooperators'] + "</td>"+"</tr>";
                            })
                            insertHTML += "</table>";
                         var insTabl;
                         insTabl = document.getElementById('table');
                         insTabl.innerHTML = insertHTML;
                    }
              });
// таблица 2

                  $.ajax({
                        type: "POST",
                        url: "model/contableTwo.php",
                        dataType: "json",

                        success: function(data)
                        {
                            var insertHTML = "<table>";
                             var json_x = data;
                         json_x.forEach(function(item){
                             insertHTML += '<tr>'+"<th scope='row'>" + item['nameOf']
                            + "</th>"+"<td>" + item['countreq']
                             + "</td>"+"<td>" + item['pricereq']
                            + " грн.</td>"+"</tr>";
                            })
                            insertHTML += "</table>";
                         var insTabl;
                         insTabl = document.getElementById('tableTwo');
                         insTabl.innerHTML = insertHTML;
                    }
              });