{
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function() {
        output.textContent = salary.value;
    });

    const day = document.querySelector('#day');
    const month = document.querySelector('#month');
    const year = document.querySelector('#year');
    const dateError = document.querySelector('.date-error');
    let dateArr= [day,month,year];
    dateArr.forEach(data=> data.addEventListener('input',function() {
        if(month.value == 1){
            if(isYearLeap(year.value)){
                if(day.value>29)
                    dateError.textContent = "Date is Invalid";
                else dateError.textContent="";    
            }
            else{
                if(day.value>28)
                    dateError.textContent = "Date is Invalid";
                else dateError.textContent="";    
            }
        }
        if(month.value == 3 || month.value == 5 || month.value == 8 || month.value ==10)
            if(day.value>30){
                dateError.textContent = "Date is Invalid";
            } else dateError.textContent="";
    }));

    const isYearLeap = (year) => {
        if(year%4==0){
            if(year%100==0){
                if(year%400==0){
                    return true;
                }
            }
            else return true;
        }
        return false;
    }
}