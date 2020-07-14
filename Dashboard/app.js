
getTtransactions()

/**************************************Firebase data get getTtransactions() income / expense ****************************************/
  function getTtransactions()
{
  //userId localStorage
  const userId = localStorage.getItem('userId');
  
  //tbody ary return [0]
  const table = document.getElementsByTagName('tbody')[0]
  table.innerHTML = ""
  
  firebase.firestore().collection('transactions')

  //userId localStorage
  .where('userId' , '==' , userId)
  
  .get()
  
  .then(function(snapeshote)
  {
      snapeshote.forEach(function(doc)
    {
      const data = doc.data()
      const row = document.createElement('tr')
      const category = document.createElement('td')
      const amount = document.createElement('td')

      category.innerHTML = data.category
      amount.innerHTML = data.amount

      row.appendChild(category)
      row.appendChild(amount)
 
    table.appendChild(row)
    
    })
  })
}

/**************************************Firebase data get getTtransactions() income end ****************************************/

