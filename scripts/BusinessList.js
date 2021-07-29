import { useBusiness } from "./BusinessProvider.js"
import { Business } from "./Business.js"


const businessArray = useBusiness();

export const BusinessList = () => {
    const contentElement = document.querySelector(".business_list");
    contentElement.innerHTML = "<h1>Active Businesses</h1>"
 
    businessArray.forEach((businessObject) =>{
            contentElement.innerHTML += Business(businessObject)
        }
    );
};

  export const BusinessSearch= () => {
      const businessSearchResultArticle = document.querySelector(".foundCompanies");

    document
      .querySelector("#companySearch")
      .addEventListener("keypress", (keyPressEvent) => {
          if (keyPressEvent.charCode === 13) {
              const foundCompany = businessArray.find((company) => {
              console.log(company)
            return company.companyName.includes(keyPressEvent.target.value);
          });
          businessSearchResultArticle.innerHTML = Business(foundCompany);
        }
      });
  };