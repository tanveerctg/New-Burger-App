import React,{Component} from 'react';
import classes from './ContactData.module.scss'
class ContactData extends Component{

  state={
    data:{
      name:'',
      'email':'',
      'mobile':'',
      'address':''
    }
  }
  nameChangeHandler=(e)=>{
    let getValue=e.target.value;
    let upgradeName={...this.state.data};
    upgradeName['name']=getValue;
    this.setState({data:upgradeName});
    e.preventDefault();
  }
  emailChangeHandler=(e)=>{
    let getValue=e.target.value;
    let upgradeEmail={...this.state.data};
    upgradeEmail['email']=getValue;
    this.setState({data:upgradeEmail});
    e.preventDefault();
  }
  mobileChangeHandler=(e)=>{
    let getValue=e.target.value;
    let upgradeMobile={...this.state.data};
    upgradeMobile['mobile']=getValue;
    this.setState({data:upgradeMobile});
    e.preventDefault();
  }
  addressChangeHandler=(e)=>{
    let getValue=e.target.value;
    let upgradeAddress={...this.state.data};
    upgradeAddress['address']=getValue;
    this.setState({data:upgradeAddress});
    e.preventDefault();
  }
  handleSubmit=(e)=>{
    let name=this.state.data.name;
    let email=this.state.data.email;
    let mobile=this.state.data.mobile;
    let address=this.state.data.address;
  
    if(name !=='' && email !=='' && mobile !=='' && address !==''){
      this.props.contactInfo(this.state.data);
      setTimeout(()=>{
        this.props.buy();
      },100);
    }else{
      this.props.error(true);
    }
    e.preventDefault();
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit} className={classes.form}>
            <div>    
                <input 
                  placeholder="Name"
                  type="text"
                  onChange={this.nameChangeHandler}
                />
                <label>Name</label>
            </div>

            <div>    
                <input 
                  placeholder="Email"
                  type="text"
                  onChange={this.emailChangeHandler}
                />
                <label>Email</label>
            </div>

            <div>    
              <input 
                placeholder="Mobile"
                type="text"
                onChange={this.mobileChangeHandler}  
              />
              <label>Mobile</label>
            </div>

            <div>    
             <textarea 
              placeholder="Address"
              type="text"
              onChange={this.addressChangeHandler}     
            />
            <label>Address</label>
            </div>
            <input type="submit" value="Order"/>
          </form>
    )
    
  }
}

export default ContactData;