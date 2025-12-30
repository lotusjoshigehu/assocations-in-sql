const Student=require("./students")
const IdentityCard=require("./identitycards")

Student.hasOne(IdentityCard)
IdentityCard.belongsTo(Student)

module.exports=
{
    Student,
    IdentityCard
}