//translate objects to HTML


export const Business = (businessObject) =>{
    return `
    <section class="business">
        <h2 class="business_name">${businessObject.companyName}</h2>
        <div class="business_street_address">${businessObject.addressFullStreet}</div>
        <div class="business_city_state_zipcode">${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}</div>
        <div class="style">___________________________________________________________</div>
    </section>
    `
}