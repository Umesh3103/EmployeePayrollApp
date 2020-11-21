class EmployeePayrollData {

    get name() { return this._name; }
    set name(name) { 
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if(nameRegex.test(name))
            this._name = name;
        else throw "Name is incorrect";    
         
    }

    get profilePic() { return this._profilePic;}
    set profilePic(profilePic) {
        this._profilePic=profilePic;
    }

    get gender() { return this._gender;}
    set gender(gender) {
        let genderRegex = RegExp('^[M F]$');
        if(genderRegex.test(gender))
            this._gender=gender;
        else throw "Gender is incorrect";    

    }

    get department() {return this._department;}
    set department(department) {
        this._department=department;
    }

    get salary() { return this._salary;}
    set salary(salary) {
        let salaryRegex = RegExp('^[1-9]+[0-9]*$');
        if(salaryRegex.test(salary))
            this._salary = salary;
        else throw "salary is incorrect";
    }

    get note() { return this._note;}
    set note(note) {
        this._note=note;
    }
    get startDate() { return this._startDate;}
    set startDate(startDate) {
        this._startDate=startDate;
    }
    
    toString() {
        const options = { year: "numeric", month: "long", day: "numeric"};
        const empDate = this.startDate === undefined ? undefined :
                        this.startDate.toLocaleDateString("en-US",options);
        return "name="+this.name+", gender="+this.gender+", profilePic="+this.profilePic+", department="+this.department+", salary="+this.salary+", startDate="+empDate
        +", note="+this.note;
    }
}

