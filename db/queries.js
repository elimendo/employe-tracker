const connection = require("./connection")

class DBQueries {
    constructor(connection){
        this.connection = connection;
    }

    getAllDepartments(){
        return this.connection.promise().query("SELECT * FROM department;")
    }

    getAllRoles(){
        return this.connection.promise().query("SELECT * FROM role;")
    }
}

module.exports= new DBQueries(connection)