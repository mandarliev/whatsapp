import { Button } from '@mui/material';
import Image from "next/image";
import React from "react";

function Login() {
  return (
    <div>
      <Image
        alt="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"
        width={300}
        height={400}
      />
      <Button variant="outlined" className='m-6'>Login using Google</Button>
    </div>
  );
}

export default Login;
