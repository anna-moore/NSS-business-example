import { useBusiness } from "/scripts/BusinessProvider.js"
import { Business } from "/scripts/Business.js"



export const BusinessList = () =>{
    const businessArray = useBusiness()
    const contentElement = document.querySelector(".business_list")
    contentElement.innerHTML = "<h1>Active Businesses</h1>"

    businessArray.forEach(
        (businessObject) =>{
            contentElement.innerHTML += Business(businessObject)
        }
    )
}

