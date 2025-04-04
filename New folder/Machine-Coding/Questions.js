let salesData = [
    {product:'laptop' ,price :1200},
    {product:'mouse' , price :300},
    {product:'laptop' ,price: 1500},
    {product:'keyboard',price:600}
]

//findout the total sales
// let sum=0
// const totalSales =salesData.forEach((sale)=>(
//      sum = sale.price+sum
// )
// )

// console.log(sum)

const totalSales = salesData.reduce((acc , objectInSalesData) => {
return acc+=objectInSalesData.price
},0)

// console.log(totalSales)

//Find out the lowstock item values which are less than 50

let inventory = [
    {name: 'widget A' , stock:30},
    {name :'widget B' , stock: 120},
    {name :'widget B' , stock: 20},
    {name :'widget B' , stock: 150},
    {name :'widget B' , stock: 1200},
    {name :'widget B' , stock: 12},
]
 /*
The reduce method always expects the callback to return the new value of the accumulator (noOfLowStockItems).
even if the condition element.stock<50 fails also we should return the new value for the accumulator
 */
let lowStockValues = inventory.reduce((noOfLowStockItems , element) => (
    element.stock<50 ? noOfLowStockItems+1 : noOfLowStockItems
),0)


let newLowStocks = inventory.filter((object) => {
   return object.stock<50
})

// console.log(newLowStocks)

//Find out most active user 

let userActivity = [
    {user:'Alice' ,activityCount :45},
    {user:'bob' ,activityCount :50},
    {user:'mary' ,activityCount :90},
    {user:'Jhon' ,activityCount :100},
    {user:'Bruce' ,activityCount :20},
    {user:'Jenny' ,activityCount :13}
]
/*
if we want to return the activityCount directly by accessing their proerties 
maxUser.activityCount < currentUser.activityCount ? currentUser.activityCount : maxUser.activityCount
In the next iteration, maxUser is now a number (from the previous return value),
 while currentUser is still an object.
 When you try to access maxUser.activityCount, it results in undefined
*/
const mostActiveCount = userActivity.reduce((maxUser , currentUser) => {
    return maxUser.activityCount < currentUser.activityCount ? currentUser : maxUser
})

// console.log(mostActiveCount)

//Generate an Expense Report for this expenses 

const expenses =[
    {description:'Groceries', amount:300 , category: 'Food'},
    {description:'Electricity Bill', amount:150 , category: 'Utilities'},
    {description:'Dinner', amount:130 , category: 'Food'},
    {description:'Snacks', amount:350 , category: 'Food'},
    {description:'Water bill', amount:200 , category: 'Utilities'}
]

// let expenseReport = expenses.reduce((report , expense ) => {

//    report[expense.category] = (report[expense.category] || 0) + expense.amount;
//    return report 
// },{})

let expenseReport = expenses.reduce((report , expense)=>{
    //create an object dynamically , and key is created computationaly so we use [] for key
    const categoryObject ={[expense.category]: expense.amount} ;

    const existingObject  = report.find((obj)=> obj.hasOwnProperty(expense.category))

    if (existingObject) {
        // If it exists, update the value
        existingObject[expense.category] += expense.amount;
    } else {
        // If not, push the new object into the array
        report.push(categoryObject);
    }

    return report
},[])

// console.log("report ", expenseReport)
//sort the tasks according to the priority 

let tasks =[
    {description:'To learn JS',completed:false , priority : 1},
    {description:'To meet',completed:true , priority : 3},
    {description:'To eat',completed:false , priority : 2}
]

const pendingSortedTasks = tasks
                           .filter((task) =>  !task.completed )
                           .sort((x, y) => x.priority-y.priority)
                           .map((task)=> task.description)
// console.log(pendingSortedTasks)

//get the average movie ratings of each movie

let MovieRatings = [
    {title :'Movie A' , ratings:[1,2,3,4]},
    {title :'Movie B' , ratings:[4,2,3,5]},
    {title :'Movie C' , ratings:[3,2.5,3,4]},
    {title :'Movie D' , ratings:[5,2.5,3,4.5]}
]

let averageMovieRatings = MovieRatings.map((movie) => {
    let totalRatings = movie.ratings.reduce((sum , ratings) => sum+ratings , 0);

    let average = totalRatings / movie.ratings.length;

    return {title: movie.title ,  averageRatings : average.toFixed(2)};
})

console.log(averageMovieRatings) 