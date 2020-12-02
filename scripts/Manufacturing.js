import { useBusiness } from "/scripts/BusinessProvider.js"
import { Business } from "/scripts/Business.js"

//filtering with forEach
export const ManufacturingBusinessList = () =>{
    const businessArray = useBusiness()
    const contentElement = document.querySelector(".businessList--manufacturing")
    contentElement.innerHTML= "<h2>Manufacturing Business</h2>"

    businessArray.forEach(
        (businessObject) =>{
            if(businessObject.companyIndustry === "Manufacturing"){
                return contentElement.innerHTML += Business(businessObject)
            }    
        }
    )
}

//need to filter with .filter()