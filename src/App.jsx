import { useState } from 'react'
import SignInSide from './components/SignInSide';
import AddressForm from './components/AddressForm';
import AppMenu from './components/AppMenu';
import Checkout from './components/Checkout';
import DeleteButton from './components/DeleteButton';

const App=()=>{
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <DeleteButton />
        {/* <AppMenu />*/}
      {/*<AddressForm />*/}
      {/*<SignInSide />*/}
      
      </div>
      
  
    )
  }
export default App;
