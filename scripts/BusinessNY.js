import { useBusiness } from "/scripts/BusinessProvider.js"
import { Business } from "/scripts/Business.js"


export const NewYorkBusinessList = () =>{
    const NYArray = useBusiness()
    const contentElement = document.querySelector(".businessList--newYork")
    contentElement.innerHTML= "<h2>New York Businesses</h2>"

    NYArray.forEach(
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