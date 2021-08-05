
class FormValidation{
  formvalues=
  {
  username:"",
  email:"",
  phonenumber:"",
  password:"",
  confirmpassword:""
  }
  errorvalues=
  {
    usernameerr:"",
    emailerr:"",
    phonenumbererr:"",
    passworderr:"",
    confirmpassworderr:""
  }
  showErrormsg(index,msg)
  {
  const form_group=document.getElementsByClassName('form-group')[index]
  form_group.classList.add('error')
  form_group.getElementsByTagName('span')[0].textContent=msg
  }

  showSuccessmsg(index)
  {
    const form_group=document.getElementsByClassName('form-group')[index]
    form_group.classList.remove('error')
    form_group.classList.add('success')
  }
  getInputs()
  {
    this.formvalues.username=document.getElementById('username').value.trim()
    this.formvalues.email=document.getElementById('Email').value.trim()
    this.formvalues.phonenumber=document.getElementById('Phonenumber').value.trim()
    this.formvalues.password=document.getElementById('Password').value.trim()
    this.formvalues.confirmpassword=document.getElementById('confirmpassword').value.trim()
  }
  validateUsername()
  {
    if(this.formvalues.username==="")
    {
      this.errorvalues.usernameerr="*Please Enter Your Name"
      this.showErrormsg(0,this.errorvalues.usernameerr)
    }
    else if(this.formvalues.username.length<=4)
    {
      this.errorvalues.usernameerr="*Username must atleast have 4 characters"
      this.showErrormsg(0,this.errorvalues.usernameerr)
     }
     else if (this.formvalues.username.length>14)
     {
         this.errorvalues.usernameerr="*Username should not exceed 14 characters"
           this.showErrormsg(0,this.errorvalues.usernameerr)
     }
     else
     {
      this.errorvalues.usernameerr=""
      this.showSuccessmsg(0)
     }
  }
  validateEmail()
  {
     const regExp=/^([a-zA-Z0-9-_\.]+)@([a-zA-Z]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
     if(this.formvalues.email==="")
     {
       this.errorvalues.emailerr="*Please enter a email addres"
       this.showErrormsg(1,this.errorvalues.emailerr)
     }
     else if(!(regExp.test(this.formvalues.email)))
     {
       this.errorvalues.emailerr="*Invalid Email Address"
       this.showErrormsg(1,this.errorvalues.emailerr)
     }
     else {
       this.errorvalues.emailerr=""
       this.showSuccessmsg(1)

     }
  }
  validatePhonenumber()
  {
     const phoneno=/^\d{10}$/
     if(this.formvalues.phonenumber==="")
     {
       this.errorvalues.phonenumbererr="*Please enter a phone number"
       this.showErrormsg(2,this.errorvalues.phonenumbererr)
     }
     else if(phoneno.test(this.formvalues.phonenumber ))
     {
       this.errorvalues.phonenumbererr=""
       this.showSuccessmsg(2)
     }
     else {
       this.errorvalues.phonenumbererr="*Invalid Phonenumber"
       this.showErrormsg(2,this.errorvalues.phonenumbererr)
     }
  }
  validatePassword()
  {
     if(this.formvalues.password==="")
     {
       this.errorvalues.passworderr="*Please enter a password"
       this.showErrormsg(3,this.errorvalues.passworderr)
     }
     else if(this.formvalues.password.length>17)
     {
       this.errorvalues.passworderr="*Password must not exceed sixteen characters"
       this.showErrormsg(3,this.errorvalues.passworderr)
     }

     else if(this.formvalues.password.length<4)
     {
       this.errorvalues.passworderr="*Password must be more than 3 characters"
       this.showErrormsg(3,this.errorvalues.passworderr)
     }
     else {
       this.errorvalues.passworderr=""
       this.showSuccessmsg(3)
     }
  }
  validateconfirmpassword()
  {
     if(this.formvalues.confirmpassword==="")
     {
       this.errorvalues.confirmpassworderr="*please enter the password again"
       this.showErrormsg(4,this.errorvalues.confirmpassworderr)
     }
     else if(this.formvalues.confirmpassword===this.formvalues.password && this.errorvalues.passworderr==="")
     {
       this.errorvalues.confirmpassworderr=""
       this.showSuccessmsg(4)
     }
     else if(this.errorvalues.passworderr)
     {
       this.errorvalues.confirmpassworderr="* An error occured in password field"
       this.showErrormsg(4,this.errorvalues.confirmpassworderr)
     }
     else {
      this.errorvalues.confirmpassworderr="Password must match"
      this.showErrormsg(4,this.errorvalues.confirmpassworderr)
     }
  }
  alertmessage()
  {
    const {usernameerr,emailerr,phonenumbererr,passworderr,confirmpassworderr}=this.errorvalues
    console.log(this.errorvalues)
    if(usernameerr==="" && emailerr==="" &&phonenumbererr===""&& passworderr===""&&confirmpassworderr==="")
    {
       swal("Registration Successful","Thankyou,"+this.formvalues.username,"success").then(()=>{
         console.log(this.formvalues)
         this.removeinputs()
       })
    }
    else {
      swal("Give valid Inputs","Click Ok to continue","error")
    }
  }
  removeinputs()
  {
    const form_groups=document.getElementsByClassName('form-group')
    Array.from(form_groups).forEach(element => {
      element.getElementsByTagName('input')[0].value=""
      element.getElementsByTagName('span')[0].textContent=""
      element.classList.remove('success')

    })


  }
}
const Validateuserinput= new FormValidation()
document.getElementsByClassName('form')[0].addEventListener('submit',event =>
{
  event.preventDefault()
  Validateuserinput.getInputs()
  Validateuserinput.validateUsername()
  Validateuserinput.validateEmail()
  Validateuserinput.validatePhonenumber()
  Validateuserinput.validatePassword()
  Validateuserinput.validateconfirmpassword()
  Validateuserinput.alertmessage()
})
