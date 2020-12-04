import { useBusiness } from "/scripts/BusinessProvider.js"
import { Business } from "/scripts/Business.js"

//create new array with all of business
//location on DOM
//start with headline outside of the loop
//filter() method function meet condition, 
export const NewYorkBusinessList = () =>{
    const businessArray = useBusiness()
    const contentElement = document.querySelector(".businessList--newYork")
    contentElement.innerHTML= "<h2>New York Businesses</h2>"

    businessArray.filter(
        (businessObject) =>{
            if(businessObject.addressStateCode === "NY"){
                return contentElement.innerHTML += Business(businessObject)
            }    
        }
    )
}

//create new array that contains NY
//   export const NYBusiness = businesses.filter(businessObject => {
//     if (businesses.addressStateCode === "NY"){
//         return true
//     }return false
//   })


// //arrow functions
// const state = useBusiness()
// const arrayNY = state.filter(stateCode => stateCode === "NY")


// //with a for loop
// let arrayNY = [] 
// for (let i = 0; i <NYArray.length; i++){
//     if(businessObject[i].addressStateCode === "NY"){
//         arrayNY.push(businessObject[i])
//     }
// }