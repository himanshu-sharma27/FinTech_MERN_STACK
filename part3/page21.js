const employee = {
    name : "Joy",
    salary: 3500,
    bonus:100,
    salary : function () {
        console.log(this.basic+this.bonus)
    }
}
employee.salary()
