window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th>"+
    "<th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`
    let empPayrolList = createEmployeePayrollJSON();
    for(const employeePayrollData of empPayrolList) {
        innerHtml = `${innerHtml}
            <tr>
                <td><img class="profile" alt="" src="${employeePayrollData._profilePic}"></td>
                <td>${employeePayrollData._name}</td>
                <td>${employeePayrollData._gender}</td>
                <td>${getDeptHtml(employeePayrollData._department)}</td>
                <td>${employeePayrollData._salary}</td>
                <td>${employeePayrollData._startDate}</td>
                <td>
                    <img id="${employeePayrollData._id}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                    <img id="${employeePayrollData._id}" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
                </td>
            </tr>
        `; 
    }   
    document.querySelector('#table-display').innerHTML = innerHtml;

}

const createEmployeePayrollJSON = () => {
    let empPayrolListLocal = [
        {
            _name: 'Umesh Deora',
            _gender: 'Male',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary: '300000',
            _startDate: '29 Oct 2019',
            _note: '',
            _id: new Date().getTime,
            _profilePic: '../assets/profile-images/Ellipse -2.png'
        },
        {
            _name: 'Kajal Deora',
            _gender: 'Female',
            _department: [
                'Sales'
            ],
            _salary: '400000',
            _startDate: '17 Dec 2019',
            _note: '',
            _id: new Date().getTime() +1,
            _profilePic: '../assets/profile-images/Ellipse -1.png' 
        }
    ];
    return empPayrolListLocal;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}