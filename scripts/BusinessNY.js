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

// export const NewYorkList = () => {
//     const nyElement = document.querySelector(".businessList--newYork");
//     let newYorkArray = businessArray.filter((business) => {    
//       return business.addressStateCode === "NY" ? true : false
//     });
  
//     newYorkArray.forEach((business) => {
//       nyElement.innerHTML += Business(business);
//     });
//   };