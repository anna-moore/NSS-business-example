//translate objects to HTML


export const Business = (businessObject) =>{
    return `
    <section class="business">
        <h3 class="business_name">${businessObject.companyName}</h3>
        <p class="business_street_address">${businessObject.addressFullStreet}</p>
        <p class="business_city_state_zipcode">${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}</p>      
    </section>
    `;
};