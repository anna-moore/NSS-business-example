import { useBusiness } from "/scripts/BusinessProvider.js"
import { Business } from "/scripts/Business.js"


const businessArray = useBusiness();

export const BusinessList = () => {
    const contentElement = document.querySelector(".business_list");
    contentElement.innerHTML = "<h1>Active Businesses</h1>"
 
    businessArray.forEach((businessObject) =>{
            contentElement.innerHTML += Business(businessObject)
        }
    );
};

  export const BusinessSearchFunction = () => {
    const businessSearchResultArticle = document.querySelector(".foundCompanies");
  
    document
      .querySelector("#companySearch")
      .addEventListener("keypress", (keyPressEvent) => {
        if (keyPressEvent.charCode === 13) {
          const foundCompany = businessArray.find((company) => {
            return company.companyName.includes(keyPressEvent.target.value);
          });
          businessSearchResultArticle.innerHTML = Business(foundCompany);
        }
      });
  };